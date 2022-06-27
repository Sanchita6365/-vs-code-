import { ControllerBase, Middleware } from "@cppay/mvc-server";
import { User } from "../model/User";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import {compareSync, hashSync} from 'bcrypt';
import { SERVER_CONFIG } from "../config/config";

// class UserControllerBase {
//     protectAll: boolean = true;
    
    // SIGN UP LOGIC GOES HERE
    export async function signup(req:any,res:any){
        let user = new User();
        console.log(req.body);
        
     
        await user.create([
             'name','email','password','mail_confirm_slug','mail_confirmed','city','pincode'
         ],[
            req.body.name,req.body.email,hash(req.body.password),generateSlug(20),false,req.body.city,req.body.pin
         ])
         res.render('index')

    // LOGIN LOGIC GOES HERE
        
    }
    export async function login(req:any,res:any){
        // if()
        let user:any = await (new User()).where('email',req.body.email).first();
        if(user){
            if(compareSync(req.body.password,user.password)){
                // TO-DO: You Custom Logic HERE do Passport or JWT auth;
                res.send("LOGIN");
            }else{
                res.status(401).send({
                    success:false,
                    message:"Password Doesn't Match!"
                })
            }
        }else{
            res.status(401).send({
                success:false,
                message:"Email Doesn't Exists!"
            })
        }
        // let usrData = 
    }
    function generateSlug(length:number){
        let chars = '1234567890abcdefghijklmnopqrstuvwxyz';
        let charsArr = chars.split('');
        let str = 'cp';
        for(let i=0;i<length-2;i++){
            let rIndex = Math.floor(Math.random() * charsArr.length);
            str += charsArr[rIndex];
        }
        return str;
    }
    function hash(password:string):string{
        return hashSync(password,SERVER_CONFIG.saltRound);
    }
    function verifyHash(password:string,hash:string){
        return compareSync(password,hash);
    }

//export const UserController = new UserControllerBase();