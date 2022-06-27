import { Column } from "@cppay/mvc-db";

export const exampleTable = {
    tableName:'examples',
    columns:[
        (new Column).name('id').primary(),
        (new Column).name('username').varchar(100).notnull(),
        (new Column).name('address').varchar(255).notnull(),
        (new Column).name('balance').int(11).notnull(),
    ]
}