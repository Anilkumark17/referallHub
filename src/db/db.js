import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hdiiizvboxaifrfrlcbh.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaWlpenZib3hhaWZyZnJsY2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0ODYwNTcsImV4cCI6MjA3MzA2MjA1N30.X1IeMdouTeOfRY9XmyhXAo0vmhaH0XcP1-fucqoBhqY"
export const db = createClient(supabaseUrl, supabaseKey);
