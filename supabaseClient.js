import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qoearliujnhukcayopur.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvZWFybGl1am5odWtjYXlvcHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1Nzk3NTcsImV4cCI6MjA3MDE1NTc1N30.TxqOa0Xec9HODLZI0t75WAcxHXuJx0irOMdAIel66Bg"; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
