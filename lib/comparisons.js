const comparisonOrder = [
  "wetransfer",
  "dropbox-transfer",
  "smash",
  "swisstransfer",
];

const comparisonPages = {
  "wetransfer": {
    slug: "wetransfer",
    competitor: "WeTransfer",
    pageTitle: "BurnLink vs WeTransfer - Private File Sharing for One-Time Delivery",
    metaDescription:
      "Compare BurnLink vs WeTransfer for secure file sharing. BurnLink focuses on browser-side encryption, one-time links, password protection, and privacy-first delivery.",
    heroTitle: "BurnLink vs WeTransfer for private file sharing",
    heroSubtitle:
      "WeTransfer is built for broad file delivery. BurnLink is built for sensitive handoffs: encrypt in the browser, share a one-time link, and leave less behind after access.",
    focusNote:
      "BurnLink is strongest when privacy matters more than long-lived file hosting or ongoing cloud collaboration.",
    problemTitle: "Transfer links often stay useful longer than they should",
    problemIntro:
      "For sensitive files, convenience alone is not enough. BurnLink is designed for moments where you want the recipient to get the file once, with less leftover exposure after the handoff.",
    problemPoints: [
      {
        title: "Shared links can travel further than intended",
        text: "Once a link lands in inboxes, chats, or forwarded threads, access can become hard to contain.",
      },
      {
        title: "Temporary sharing can still leave a long audit trail",
        text: "If a transfer lives as a normal hosted link, people can keep rediscovering it long after the first send.",
      },
      {
        title: "Sensitive delivery needs more than a send button",
        text: "Private client work, legal docs, and internal approvals often need burn-after-access behavior and optional password gating.",
      },
    ],
    advantagesTitle: "Why BurnLink is a strong alternative to WeTransfer",
    advantagesIntro:
      "BurnLink is opinionated on purpose. It trades broad transfer utility for tighter delivery controls and a smaller privacy footprint.",
    advantages: [
      {
        title: "Browser-side encryption",
        text: "Files are encrypted before upload so the share flow starts with end-to-end protection.",
      },
      {
        title: "One-time access links",
        text: "BurnLink is built around links that disappear after successful access instead of lingering as reusable downloads.",
      },
      {
        title: "Optional password protection",
        text: "Add a second checkpoint when the file needs stronger recipient-side control.",
      },
      {
        title: "No account required",
        text: "You can share quickly without pushing sender or recipient into a signup flow.",
      },
      {
        title: "Privacy-first delivery",
        text: "The product is designed for short-lived exchange rather than building a permanent cloud destination for your files.",
      },
      {
        title: "Best for sensitive, smaller transfers",
        text: "BurnLink prioritizes confidentiality and ephemeral access over large-scale transfer workflows.",
      },
    ],
    faq: [
      {
        question: "How is BurnLink different from WeTransfer?",
        answer:
          "BurnLink is centered on browser-side encryption, one-time access, and privacy-first delivery. WeTransfer is broader transfer infrastructure; BurnLink is narrower and more security-focused.",
      },
      {
        question: "Can I password-protect a BurnLink file?",
        answer:
          "Yes. BurnLink supports optional password protection for cases where the link alone should not be enough.",
      },
      {
        question: "Does BurnLink require an account?",
        answer:
          "No. BurnLink is designed so people can send a file without creating an account first.",
      },
      {
        question: "What happens after the file is opened?",
        answer:
          "BurnLink is built for one-time delivery. After successful access, the link is burned instead of remaining available as a normal reusable download.",
      },
    ],
  },
  "dropbox-transfer": {
    slug: "dropbox-transfer",
    competitor: "Dropbox Transfer",
    pageTitle: "BurnLink vs Dropbox Transfer - A Privacy-First Alternative",
    metaDescription:
      "Compare BurnLink vs Dropbox Transfer. BurnLink emphasizes browser-side encryption, one-time links, password protection, and privacy-first file handoff.",
    heroTitle: "BurnLink vs Dropbox Transfer for controlled file handoff",
    heroSubtitle:
      "Dropbox Transfer fits polished delivery workflows. BurnLink focuses on the moment where you need a file shared once, with stronger privacy expectations and less leftover exposure.",
    focusNote:
      "If your goal is secure delivery instead of branded transfer workflows, BurnLink keeps the experience minimal and short-lived.",
    problemTitle: "Hosted transfers are convenient, but they can stay visible too long",
    problemIntro:
      "When teams share approvals, contracts, source exports, or financial documents, the risk is rarely the upload itself. The risk is what remains accessible afterward.",
    problemPoints: [
      {
        title: "Links can become part of permanent team history",
        text: "Transfer URLs often get copied into email threads, ticket systems, and internal docs where they stay searchable.",
      },
      {
        title: "Sensitive deliveries need stricter access expectations",
        text: "A private handoff usually needs more certainty than a standard hosted download experience provides.",
      },
      {
        title: "Not every send should turn into cloud inventory",
        text: "Sometimes the goal is to deliver the file and finish the exchange, not add one more long-lived cloud artifact.",
      },
    ],
    advantagesTitle: "Why teams choose BurnLink over Dropbox Transfer",
    advantagesIntro:
      "BurnLink narrows the workflow down to the essentials: encrypt, share, access once, and move on.",
    advantages: [
      {
        title: "Encrypt before the file leaves the browser",
        text: "BurnLink protects the file at the start of the share flow instead of treating privacy as a secondary layer.",
      },
      {
        title: "Built for one-time delivery",
        text: "The product is designed around single-use access instead of repeated downloads from the same transfer page.",
      },
      {
        title: "Optional password gate",
        text: "Add a password when the recipient should need both the link and a second secret.",
      },
      {
        title: "No account wall",
        text: "You can send without asking every stakeholder to create another workspace identity.",
      },
      {
        title: "Minimal retention mindset",
        text: "BurnLink is designed to keep less around after the file has been delivered.",
      },
      {
        title: "Simple for high-trust workflows",
        text: "It works well for legal, finance, client-review, and internal approval handoffs where brevity matters.",
      },
    ],
    faq: [
      {
        question: "Is BurnLink a cloud storage replacement?",
        answer:
          "No. BurnLink is better understood as an ephemeral delivery tool, not a long-term file organization platform.",
      },
      {
        question: "When is BurnLink a better fit than Dropbox Transfer?",
        answer:
          "BurnLink is a better fit when one-time access, password protection, and a privacy-first delivery model matter more than workflow branding or broader platform features.",
      },
      {
        question: "Can recipients open BurnLink files without signing up?",
        answer:
          "Yes. BurnLink is designed for account-free sharing and retrieval.",
      },
      {
        question: "Does BurnLink support encrypted sharing?",
        answer:
          "Yes. BurnLink encrypts files in the browser before upload to support end-to-end protected sharing.",
      },
    ],
  },
  "smash": {
    slug: "smash",
    competitor: "Smash",
    pageTitle: "BurnLink vs Smash - Secure Sharing for Sensitive Files",
    metaDescription:
      "Compare BurnLink vs Smash for secure file delivery. BurnLink focuses on encrypted, one-time, password-protected sharing without account friction.",
    heroTitle: "BurnLink vs Smash for files that should not linger",
    heroSubtitle:
      "Smash is designed for flexible file delivery. BurnLink is the tighter alternative for confidential sends where you want encrypted transfer and access that ends after the recipient gets the file.",
    focusNote:
      "BurnLink is intentionally narrower: it favors ephemeral security controls over broad transfer presentation features.",
    problemTitle: "Beautiful delivery is not the same as controlled delivery",
    problemIntro:
      "For brand assets and large send-outs, presentation matters. For sensitive exchanges, the bigger question is how much access remains after the file is opened.",
    problemPoints: [
      {
        title: "Recipient convenience can outlive the original need",
        text: "Once a hosted transfer page exists, it can keep circulating beyond the original conversation.",
      },
      {
        title: "Sensitive files need stronger defaults",
        text: "Creative review links are useful, but confidential handoffs often need one-time behavior and optional password gating.",
      },
      {
        title: "Not every transfer should be a destination page",
        text: "Sometimes the safest share flow is the one that disappears once the delivery is complete.",
      },
    ],
    advantagesTitle: "Why BurnLink stands out as a Smash alternative",
    advantagesIntro:
      "BurnLink keeps the workflow sparse so the security story stays clear: encrypt, share, retrieve once, and burn.",
    advantages: [
      {
        title: "End-to-end encrypted sharing",
        text: "Files are encrypted in the browser before upload for a stronger privacy baseline.",
      },
      {
        title: "One-time access by design",
        text: "BurnLink is built so delivery ends after successful retrieval rather than staying available as a normal repeat-download link.",
      },
      {
        title: "Password option for high-risk sends",
        text: "Add another layer when the file should not be accessible with only the URL.",
      },
      {
        title: "Fast to use without onboarding",
        text: "No account is required, which keeps the flow lightweight for occasional secure sends.",
      },
      {
        title: "Privacy-first product posture",
        text: "BurnLink is positioned around secure exchange, not around keeping your files in a branded transfer hub.",
      },
      {
        title: "Better fit for confidential reviews",
        text: "It works especially well for contracts, proofs, internal exports, and one-off client approvals.",
      },
    ],
    faq: [
      {
        question: "What is the main difference between BurnLink and Smash?",
        answer:
          "BurnLink is more narrowly focused on secure, ephemeral file handoff. Smash is a broader transfer experience, while BurnLink emphasizes encryption and one-time access.",
      },
      {
        question: "Can I use BurnLink without an account?",
        answer:
          "Yes. BurnLink is designed so senders and recipients can complete the exchange without account creation.",
      },
      {
        question: "Does BurnLink support password-protected sharing?",
        answer:
          "Yes. You can add a password to strengthen access control for sensitive files.",
      },
      {
        question: "Is BurnLink good for long-term file hosting?",
        answer:
          "No. BurnLink is not meant to replace storage platforms. It is best for short-lived, privacy-focused delivery.",
      },
    ],
  },
  "swisstransfer": {
    slug: "swisstransfer",
    competitor: "SwissTransfer",
    pageTitle: "BurnLink vs SwissTransfer - Encrypted One-Time File Sharing",
    metaDescription:
      "Compare BurnLink vs SwissTransfer. BurnLink is built for browser-side encryption, one-time links, optional passwords, and privacy-first transfer flows.",
    heroTitle: "BurnLink vs SwissTransfer for short-lived secure sharing",
    heroSubtitle:
      "SwissTransfer is useful for traditional hosted transfers. BurnLink is the alternative for sensitive delivery where you want browser-side encryption and access that ends after the first successful retrieval.",
    focusNote:
      "BurnLink is designed for private handoffs, not for acting like a general-purpose hosted transfer shelf.",
    problemTitle: "Hosted transfers can stay reachable after the file handoff is over",
    problemIntro:
      "The safest transfer is often the one that leaves the fewest reusable entry points behind. BurnLink is built around that assumption.",
    problemPoints: [
      {
        title: "Links are easy to forward",
        text: "Even well-intentioned recipients can paste transfer links into group chats, ticket threads, or notes where they spread further.",
      },
      {
        title: "Private delivery needs smaller exposure windows",
        text: "When the file contains sensitive work, keeping the access window short matters as much as encrypting the payload.",
      },
      {
        title: "Short-lived exchange beats passive hosting",
        text: "BurnLink treats delivery as a temporary event rather than another destination page for your files.",
      },
    ],
    advantagesTitle: "Why BurnLink is a compelling SwissTransfer alternative",
    advantagesIntro:
      "BurnLink’s advantage is not feature sprawl. It is the combination of encryption, one-time access, and no-account simplicity.",
    advantages: [
      {
        title: "Encrypt in the browser",
        text: "BurnLink secures the file before upload so sharing starts from an end-to-end model.",
      },
      {
        title: "Burn-after-access behavior",
        text: "The core delivery model is one-time access rather than an ordinary download page that remains reusable.",
      },
      {
        title: "Password protection when needed",
        text: "Sensitive sends can require both the link and a password.",
      },
      {
        title: "No signup required",
        text: "BurnLink keeps secure sharing approachable for one-off sends and external recipients.",
      },
      {
        title: "Privacy-first positioning",
        text: "The product is aimed at secure handoff, not at long-term hosted transfer management.",
      },
      {
        title: "Clear fit for confidential exchanges",
        text: "Use it for legal docs, financial records, source exports, or internal approvals that should be opened once.",
      },
    ],
    faq: [
      {
        question: "Why choose BurnLink over SwissTransfer?",
        answer:
          "Choose BurnLink when you care most about browser-side encryption, one-time delivery, password protection, and a privacy-first workflow.",
      },
      {
        question: "Does BurnLink keep files available for repeated downloads?",
        answer:
          "No. BurnLink is built around one-time access so the link is not meant to stay reusable after successful retrieval.",
      },
      {
        question: "Can external recipients use BurnLink without registering?",
        answer:
          "Yes. BurnLink does not require account creation for the core sharing flow.",
      },
      {
        question: "What kind of files is BurnLink best for?",
        answer:
          "BurnLink is best for sensitive files where confidentiality and a short access window are more important than long-lived hosting.",
      },
    ],
  },
};

function getComparisonBySlug(slug) {
  return comparisonPages[slug] || null;
}

function getComparisonPages() {
  return comparisonOrder.map((slug) => comparisonPages[slug]).filter(Boolean);
}

module.exports = {
  comparisonOrder,
  comparisonPages,
  getComparisonBySlug,
  getComparisonPages,
};
