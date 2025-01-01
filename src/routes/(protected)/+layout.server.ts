import {user} from '$lib/auth';
import { redirect} from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
    const check = user();
    console.log('USER CHECK',check);
    if(check.error===true) throw redirect(302, check.uri);
    

	return {};
}