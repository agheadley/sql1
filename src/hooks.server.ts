import { redirect, type Handle } from "@sveltejs/kit";
import {user} from '$lib/auth';
//import { createServerClient } from '@supabase/ssr'

export const handle: Handle = async ({ event, resolve }) => {
  
  


  console.log('hooks.server.ts',event);
  if (event.route.id && event.route.id.indexOf("(protected)") > 0) {
    const check = user();
    console.log('USER CHECK',check);
    if(check.error===true) throw redirect(302, check.uri);
 }
  
  return await resolve(event);
};