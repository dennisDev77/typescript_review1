import express, {Request, Response} from 'express'
import cors from 'cors'

const app=express()
const port=3000

//Our Middlare
app.use(express.json())
app.use(cors())

//Our enum state
enum state{
    LA="Luanda",
    BA="Benguela",
    BO="Bengo"
}
//Our Inteface products
interface IProducts{
    id:number;
    name:string;
    description:string;
    address:{
        city:string,
        country:string
    }
    

}

//Our array Products
const product: IProducts[] = []

//init route Products
app.get('/product', (req:Request, res:Response)=>{
    
    //Our object and aplicate inteface
    const newProduct: IProducts={
        id:12,
        name:"Computador",
        description:"Computador bom, bom mesmo!",
        address:{
        city:state.LA,
        country:"Luanda"
        }
   }
     
   product.push(newProduct) //Add product
   return res.status(200).json({Message:"Nossos Produtos", product:newProduct})
})

app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})