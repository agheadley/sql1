import { supabase } from "$lib/supabaseClient";


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
        /*
        return {
            status: 401,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ error: 'Unauthorized' })
        };
        */
       console.log('ERROR',error);
    }
    console.log('SESSION',data);

	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}

	const response = await resolve(event);
	return response;
}
