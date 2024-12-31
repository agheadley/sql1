import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const req = await request.json();
    console.log(req);
    const { data} = await supabase.auth.getUser()

    return json(data);
      
}