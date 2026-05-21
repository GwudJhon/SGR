import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  const { action, payload } = req.body;

  if (action === "getTasks") {
    const { data, error } = await supabase
      .from("tasks")
      .select("*");

    if (error) return res.status(500).json(error);

    return res.json(data);
  }
}
