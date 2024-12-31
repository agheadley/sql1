import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';


export async function POST({request}) {
    const req = await request.json();
    console.log(req.email);
    console.log('/api/login');
    const { data, error } = await supabase.auth.signInWithOtp({
        email: req.email,
        options: {
          emailRedirectTo: 'https://localhost:5173/loginRedirect',
          shouldCreateUser:false
        }
      
    });

    if(error) return json(error);
    else return json(data);
      
}