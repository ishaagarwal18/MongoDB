const mg=require('mongoose')

mg.connect('mongodb://127.0.0.1:27017/data')
const schema=new mg.Schema({
    name:String,
    age:Number,
    active:Boolean
})
const employee=mg.model('employee',schema)

const operation=async()=>{
    try{
        const empdata=[
            {
                name:'Radha',
                age:18,
                active:true
            },
            {
                name:'Shyam',
                age:15,
                active:false
            },
            {
                name:'Ram',
                age:19,
                active:false
            }
        ]
        // const result=await employee.insertMany(empdata)
        const result=await employee.updateOne({name:'Shyam'},{$set:{active:true}},{upsert:true})
        console.log(result)
    }
    catch(err){
        console.log(err);
        
    }
}
operation()

//update the value of active where name is shyam insert if document not available
// retrieve name and id on console of first document