import { supabase } from "$lib/supabaseClient";
import { json } from '@sveltejs/kit';
//import {REDIRECT_URL} from "$env/static/private";
//import { redirect} from "@sveltejs/kit";



export async function GET() {
    console.log('/auth/callback');
    //let token = url.searchParams.get('token');
    /*
    const{ data} = await supabase.auth.onAuthStateChange((event, session) => {
        console.log('supabase.auth.onAuthStateChange');
        //console.log(session,event);
        if (event === 'INITIAL_SESSION') {
            console.log('INITIAL_SESSION', session);
        }

        if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
    })
    
    console.log(data);
    */

    const session = await supabase.auth.getSession();
    console.log('getSession()',session);

    //throw redirect(302,'/login');
    return json({message:'callback'});
}

