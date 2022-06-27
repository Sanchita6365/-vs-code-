import { Column } from "@cppay/mvc-db";

export const fruitsTable = {
    tableName:'fruit',
    columns:[
        (new Column).name('id').primary(),
        (new Column).name('name').varchar(40).notnull(),
        (new Column).name('description').varchar(60).notnull(),
        (new Column).name('colour').varchar(10).notnull(),
        (new Column).name('number').int(100).notnull(),
    ]
}