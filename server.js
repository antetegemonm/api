import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
const prisma = new PrismaClient()

const port = process.env.PORT || 3001;
const app = express()
app.use(express.json())
app.use(cors())


app.post('/usuarios' ,async (req, res)=>
{
await prisma.user.create({
     data:{
          email: req.body.email,
          name: req.body.name,
          age:req.body.age
     }
})

res.status(201).json(req.body)

})


app.get('/usuarios', async (req , res) =>{

    const users =  await prisma.user.findMany()

     res.status(200).json(users)
})




app.put('/usuarios/:id' ,async (req, res)=>
     {
        

    await prisma.user.update({
         
     where:{
           id: req.params.id
          },

          data:{
               email: req.body.email,
               name: req.body.name,
               age:req.body.age
          }
     })
     
     res.status(201).json(req.body)
     
     })

     app.delete('/usuarios/:id',async (req, res)=>
     {

          await prisma.user.delete({
            where:{
               id: req.params.id
            }
            
          })

          res.status(200).json({message:"usuário deletado com sucesso"})
     })

  

/*
2- npx prisma studio para utilizar o prisma
3- baixar thunder.client
4- verificar se tem que baixar o prisma (creio que não mas qualquer coisa é só baixar o prisma)

node --watch server.js -> reestarta o servidor automaticamente toda vez 
o projeto for salvo */

//alex 
//leco123
