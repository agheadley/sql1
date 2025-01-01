import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const req = await request.json();
    console.log(req.email);
    console.log('/auth/link');
    const { data, error } = await supabase.auth.signInWithOtp({
        email: req.email,
        options: {
          emailRedirectTo: 'http://localhost:5173/auth/callback',
          shouldCreateUser:false
        }
      
    });

    if(error) return json(error);
    else return json(data);
      
}