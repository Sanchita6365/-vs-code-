import { Path } from "@cppay/mvc-server";
import { getlogin, getregistration, home} from "../controller/HomeController";
import { login, signup,} from "../controller/UserController";

export const routes:Path[] = [
    {path:'/',handlerFunction:home,type:'get',name:'home'},
    {path:'/account/signup',handlerFunction:signup,type:'post',name:'signup'},
    {path:'/account/login',handlerFunction:login,type:'post',name:'signup'},
    {path:'/account/login',handlerFunction:getlogin,type:'get',name:'signup'},
    {path:'/account/signup',handlerFunction:getregistration,type:'get',name:'login'},
]