import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const req = await request.json();
    console.log(req.email);

    const { data, error } = await supabase.auth.signInWithOtp({
        email: 'example@email.com',
        options: {
          emailRedirectTo: 'https://localhost:5173/loginRedirect',
          shouldCreateUser:false
        }
      
    });

    if(error) return json(error);
    else return json(data);
      
}