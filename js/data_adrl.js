const fs = require("fs");
const allData =require("./allData")

const addPerson=(id,fname,lname,age,city)=>{
    const allData=loadData();

    const duplicatedData=allData.filter((obj)=>{
        return obj.id ===id
    })

    if(duplicatedData.length ==0){
        allData.push({
            id:id,
            fname:fname,
            lname:lname,
            age:age,
            city:city
        })
        saveallData(allData)

    }else{
        console.log("ERROR This is deplicated id")
    }
    
}
const deleteDataByID =(id)=>{
    const allData=loadData();
    const datatoKeep =allData.filter((obj)=>{
        return obj.id !== id

    })

    saveallData(datatoKeep);
    console.log("Now you deleted person from data by id")

}

const readData =(id)=>{
    const allData=loadData();
    const dataNeeded =allData.find((obj)=>{
        return obj.id == id
    })

    if(dataNeeded){
        console.log(dataNeeded.id ,dataNeeded.fname)
    }else{
        console.log("Id needed is not found")
    }
    
}

const dataList =()=>{
    const allData=loadData();
    allData.forEach((obj) => {
      console.log(obj.id ,obj.fname,obj.lname,obj.age,obj.city)
        
    });

}

const loadData=()=>{
    try{
    const dataJson =fs.readFileSync("data_adrl.json").toString()
    return JSON.parse(dataJson)
    }
    catch{
        return []
    }
}

const saveallData=(allData)=>{
    const saveDataJson = JSON.stringify(allData)
    fs.writeFileSync("data_adrl.json" ,saveDataJson)
}


module.exports={
    addPerson,
    deleteDataByID,
    readData,
    dataList
}