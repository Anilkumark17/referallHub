import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ablizbltgdplhwlhbzis.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFibGl6Ymx0Z2RwbGh3bGhiemlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMDI2MzEsImV4cCI6MjA2OTc3ODYzMX0.tqQX6Rek39nrps9eRkAloFrPiXZMoE0sduYIsC7HZjM";
export const db = createClient(supabaseUrl, supabaseKey);
