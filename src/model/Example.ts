import { ModelBase } from "@cppay/mvc-db";
import { db } from "../app/db";

export class Example extends ModelBase{
    // tableName: string = 'users';
    constructor(){
        super();
        this.db = db;
        this.tableName = 'examples'
    }

    // book():Promise<any>{
    //     return this.hasOne(new Book(),'id','user_id');
    // }
}