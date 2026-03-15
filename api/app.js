const app = require('../app');

// Vercel API route handler
module.exports = async (req, res) => {
  // Delegate to your Express app
  app(req, res);
};
