import { redirect} from "@sveltejs/kit";
import { supabase } from "$lib/supabaseClient";


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const { data:{user} } = await supabase.auth.getUser();
    console.log('hooks.server.js , authCheck',user);
    console.log(event.route.id);
    if(user?.aud!=='authenticated' && event.route.id!=='/login'){
        throw redirect(302,'/login');
    } 


	const response = await resolve(event);
	return response;
}