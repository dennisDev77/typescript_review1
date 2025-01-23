import express, {Request, Response} from 'express'
import cors from 'cors'

const app=express()

const port=3000

//Body parse
app.use(express.json())
app.use(cors())

interface IAddress{
    state:string,
    province:string
}

interface IUsers{
    firstName:string,
    lastName:string,
    age:number,
    address:IAddress,
}

const users:IUsers[]=[]

//   Put users
app.post('/user', (req:Request,res:Response)=>{

    const {firstName, lastName, age, state, province}=req.body

    const newUser:IUsers = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        address: {
            state: state,
            province: province
        },
    }


    users.push(newUser)
    res.status(201).json({message:"User add", users})
} )

//show users
app.get('/user', (req:Request,res:Response)=>{

    const newUser:IUsers = {
        firstName: "Dinis",
        lastName: "Camela",
        age: 19,
        address: {
            state: 'Luanda',
            province: 'Luanda'
        },
    }


    users.push(newUser)
    res.status(200).json({message:"Users show", users})
} )


// port listen 3000
app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})