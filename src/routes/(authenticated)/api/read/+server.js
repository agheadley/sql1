import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
        const req = await request.json();
    
  const { data } = await supabase.from(req.table).select();
  return json(data ?? []);
}
