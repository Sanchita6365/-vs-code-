import { Request, Response } from "express";

export async function home(req:Request,res:Response){
        res.render('dashboard');
}
export async function getlogin(req:Request,res:Response){
        res.render('login');
}
export async function getregistration(req:Request,res:Response){
        res.render('registration');
}

