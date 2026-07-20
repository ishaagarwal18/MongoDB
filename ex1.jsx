const mg=require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/fdb')
    .then(()=>{console.log("Success")})
    .catch((err)=>{console.log(err)})

mg.pluralize(null)
const schema=new mg.Schema({
    name:{
        type:String,
        required:true
    },
    surname:String,
    age:Number,
    active:Boolean,
    date:{
        type:Date,
        default:new Date().toLocaleDateString()
    }
})
const person=new mg.model('person',schema)

const createDoc=async()=>{
    try{
        const persondata=new person({
            name:'Kashyap',
            surname:'Patel',
            age:'21',
            active:true
        })
        const result=await persondata.save()
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

createDoc()