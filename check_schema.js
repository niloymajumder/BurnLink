require("dotenv").config();
const supabase = require('./lib/supabase');

async function checkSchema() {
  // Try to select the columns from the files table
  const { data, error } = await supabase
    .from('files')
    .select('mode, expires_at')
    .limit(1);

  if (error) {
    console.log("SCHEMA_CHECK_FAILED: " + error.message);
  } else {
    console.log("SCHEMA_CHECK_OK");
  }
}

checkSchema().catch(console.error);
