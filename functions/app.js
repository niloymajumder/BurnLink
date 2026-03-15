export default {
  async fetch(request, env, ctx) {
    // Example: Access environment variables
    const supabaseUrl = env.SUPABASE_URL || "Not set";
    // Respond with a simple message
    return new Response(`Cloudflare Worker is running! SUPABASE_URL: ${supabaseUrl}`, {
      status: 200,
      headers: { "Content-Type": "text/plain" }
    });
  }
};
