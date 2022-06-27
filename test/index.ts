// import { User } from "../src/model/User";

// import { Book } from "../src/model/Book";
//import {SERVER_CONFIG} from '../src/config/config'
// let user = new User();

// user.create(['name','email','password','mail_confirm_slug','mail_confirmed'],[
//     'A','aa@example.com','ASERTYDFERSDRRE','Qa3@44MNdj$3e56',false
// ]);
// user.all().then(e=>{
//     console.log(e);
// })
// user.where('id',1).book().then(console.log);
// let book = new Book();
// book.create(['name','description','user_id'],['Reactor 2','A guide to Reactor',1]);
// book.create(['name','description','user_id'],['Reactor 3','A guide to Reactor',1]);
// book.all().then(console.log);
// book.where('id',1).user().then(console.log);
// server
// console.log(SERVER_CONFIG.router.logRoutes())
//console.table(SERVER_CONFIG.router.routes)

// import {Example} from '../src/model/Example';

// let example = new Example();

import {Fruit} from '../src/model/fruit';

let fruit = new Fruit();

//CRUD(CREATE , READ , UPDATE, DELETE)

//read all
fruit.all().then(res=>{
    console.log(res);
});
//fruit.create(['name','description','colour','number'],['mango','summer time fruit','yeollow', 5]).then(res=>{console.log(res)})

//read one /conditional
// example.where('username','xyz').orwhere('id',6).first().then((res:any)=>{
//     console.log(res);
    
// })

// update 
//example.update(['address'],['athrgjjmnbmnbmgnghg'],'id').execute().then(res=>(console.log(res)));


//delete
//example.delete('id',6).then(console.log);