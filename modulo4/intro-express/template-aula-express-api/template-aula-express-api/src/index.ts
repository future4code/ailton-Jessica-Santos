import express, {Request, Response}  from 'express';
import cors from 'cors';
import {lista, texto, Textos} from './data'

const app = express();
app.use(cors());
app.use(express.json());


app.get("/minha-primeira-api", (req: Request, res: Response) => {          
    res.send("Funcionou gata,vamos continuar.")
})

app.get("/retornaLista", (req: Request, res: Response) => {
    
    res.send(lista)
})


app.get("/retornaTexto", (req: Request, res: Response) => {
    
    res.send(texto)
})

app.get("/texto/:userId", (req: Request, res: Response) => {

    let user = req.params.userId

    const post = texto.filter((post) => {
        return post.userId == user 
    })

    if(!user) {
        return res.status(400).send("Entre com userId válido.")
     } else if(post.length === 0) {
        return res.status(400).send("Nenhum resultado encontrado.")
     }
        
        res.status(201).send(post)   
})


app.listen(3120, () => {
    console.log("SERVER IS RUNNING IN http://localhost:3120")
})
