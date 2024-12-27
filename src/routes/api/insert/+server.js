import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const req = await request.json();
    
    const { data , error} = await supabase.from(req.table).insert(req.data).select();
    return json(data ?? error);
}
