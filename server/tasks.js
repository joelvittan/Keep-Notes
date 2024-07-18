const app = express();



app.post("/tasks",async(req,res)=>{
    const {task}=req.body
    console.log(task)
  })

console.log("hi")



module.exports=app