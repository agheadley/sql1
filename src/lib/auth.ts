import { REDIRECT_URI } from '$env/static/private'

export const user = () : {user:string,uri:string,error:boolean}=>{
    let u = 'agheadley@gmail.com';
    u='';
    return {user:u!==''? u : '', uri: u ===''? REDIRECT_URI : '', error: u ===''? true: false};
};