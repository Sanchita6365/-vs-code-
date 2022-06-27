import { ModelBase } from "@cppay/mvc-db";
import { db } from "../app/db";

export class Fruit extends ModelBase{
    constructor(){
        super();
        this.db = db;
        this.tableName = 'fruit'
    }
    
}