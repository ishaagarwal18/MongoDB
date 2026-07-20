// dbname=> details
// collection=> users
// 3 documents to be insert

const mg=require('mongoose')

mg.connect('mongodb://127.0.0.1:27017/details')
    .then(()=>{
        console.log("success")
    })
    .catch((err)=>{
        console.log(err)
    })

const schema=new mg.Schema({
    name:{
        type:String,
        required:true
    },
    enrollment:Number,
    age:Number
})

const student=new mg.model('student',schema)

const createDoc=async()=>{
    try{
        /*
        const studentdata=[
            {
                name:'A',
                enrollment:1111,
                age:20
            },
            {
                name:'B',
                enrollment:1111,
                age:21
            },
            {
                name:'C',
                enrollment:1111,
                age:22
            }
        ]
        const result=await student.insertMany(studentdata)
        */

        const student1=new student({
            name:'C',
            enrollment:2222,
            age:20
        })
        const student2=new student({
            name:'D',
            enrollment:3333,
            age:21
        })
        const student3=new student({
            name:'E',
            enrollment:4444,
            age:22
        })
        const result=await student.insertMany([student1,student2,student3])
        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}

createDoc()