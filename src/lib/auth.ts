import { REDIRECT_URL } from '$env/static/private'

export const user = () : {user:string,uri:string,error:boolean}=>{
    let u = 'agheadley@gmail.com';
    u='';
    return {user:u!==''? u : '', uri: u ===''? REDIRECT_URL : '', error: u ===''? true: false};
};