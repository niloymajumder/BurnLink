const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const app = require("../app");

let server;
let port;

async function request(path) {
  return new Promise((resolve, reject) => {
    const req = http.get(
      {
        hostname: "127.0.0.1",
        port,
        path,
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body,
          });
        });
      }
    );
    req.on("error", reject);
  });
}

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      port = server.address().port;
      resolve();
    });
  });
});

test.after(async () => {
  if (!server) return;
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) return reject(error);
      resolve();
    });
  });
});

test("core pages render without crashing", async () => {
  const pages = [
    ["/", "BurnLink — Share files. Encrypted. Ephemeral."],
    ["/about", "About - BurnLink"],
    ["/security-policy", "Security Policy - BurnLink"],
    ["/hall-of-fame", "Hall of Fame — BurnLink"],
  ];

  for (const [path, title] of pages) {
    const response = await request(path);
    assert.equal(response.status, 200, `${path} should return 200`);
    assert.match(response.body, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(response.body, /BurnLink vs WeTransfer/);
  }
});

test("comparison pages render with SEO and CTA content", async () => {
  const comparisons = [
    {
      path: "/comparisons/wetransfer",
      title: "BurnLink vs WeTransfer - Private File Sharing for One-Time Delivery",
      competitor: "WeTransfer",
    },
    {
      path: "/comparisons/dropbox-transfer",
      title: "BurnLink vs Dropbox Transfer - A Privacy-First Alternative",
      competitor: "Dropbox Transfer",
    },
    {
      path: "/comparisons/smash",
      title: "BurnLink vs Smash - Secure Sharing for Sensitive Files",
      competitor: "Smash",
    },
    {
      path: "/comparisons/swisstransfer",
      title: "BurnLink vs SwissTransfer - Encrypted One-Time File Sharing",
      competitor: "SwissTransfer",
    },
  ];

  for (const comparison of comparisons) {
    const response = await request(comparison.path);
    assert.equal(response.status, 200, `${comparison.path} should return 200`);
    assert.match(response.body, new RegExp(`<title>${comparison.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<\\/title>`));
    assert.match(response.body, new RegExp(`BurnLink vs ${comparison.competitor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`));
    assert.match(response.body, /Share a file/);
    assert.match(response.body, /How BurnLink works/);
    assert.match(response.body, new RegExp(`<link rel="canonical" href="https://burnlink\\.page${comparison.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
    assert.doesNotMatch(response.body, /no-size-limit|unlimited/i);
  }
});

test("comparison pages include related alternatives and shared footer links", async () => {
  const response = await request("/comparisons/wetransfer");

  assert.equal(response.status, 200);
  assert.match(response.body, /BurnLink vs Dropbox Transfer/);
  assert.match(response.body, /BurnLink vs Smash/);
  assert.match(response.body, /BurnLink vs SwissTransfer/);
  assert.match(response.body, /<h3>Comparisons<\/h3>/);
  assert.match(response.body, /href="\/comparisons\/wetransfer"/);
});

test("unknown comparison slugs return the existing not found page", async () => {
  const response = await request("/comparisons/not-a-real-tool");

  assert.equal(response.status, 404);
  assert.match(response.body, /File Not Found - BurnLink/);
});
