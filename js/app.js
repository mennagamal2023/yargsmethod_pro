const yargs= require("yargs")
const data_adrl =require("./data_adrl")

yargs.command({
    command:"add",
    describe:"add person",
    builder:{
        fname:{
            describe:"this is the first name of the person added",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"this is the last name of the person added",
            demandOption:true,
            type:"string"
        },
       
    },

    handler:(x)=>{
        data_adrl.addPerson(x.id,x.fname ,x.lname ,x.age ,x.city);
    }
})

////////////////////////////// delete any data by id

    yargs.command({
        command:"delete",
        describe:"delete person",

        handler:(x)=>{
         data_adrl.deleteDataByID(x.id);
    }
})
///////////////////////////read data
yargs.command({
    command:"read",
    describe:"to read data",
    builder:{
        id:{
            describe:"this is the id of the person",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data_adrl.readData(x.id) 
    }

})
/////////////////////////////////list data
yargs.command({
    command:"list",
    describe:" to list data",
    handler:()=>{
        data_adrl.dataList()
    }

})
    
    
yargs.parse()