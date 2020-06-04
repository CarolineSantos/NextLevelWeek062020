
//npm install express
//npm install @types/express -D
//npm install ts-note -D vai ler esse cara como jd
//npm install typescript -D
//npx tsc--init
//npx ts-node src/server.ts

//npm install ts-node-dev -D rodar sem parar aplicação
//npx ts-node-dev src/server.ts

//npm run dev colocar no package.json muda teste pra dev, nmp não precisa
//http://localhost:3333/users

//npm install knex : escrever a querys usando javaScript para qualquer banco
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

// Rota: endereço completo dda requisição
// Recurso Qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informação do back-end
// POST: Criar uma nova informação no back-en
// PUT: atualizar infomação existente do back-end
// DELETE: remover informação do back-end

// Request Parm: Parâmetros que vem na própria rota que identificam um recurso
// Query Parm: Parâmetros que vem na própria rota geralmente opcional para filtros, paginação
// Request Body: Parâmetros para criação/atualização de informação
/*const users = [
    'Diego',
    'Carol',
    'Mike',
    'Daniel'
];
app.get('/users',(request, response) => { 
    //request = obter dados, dado que precisa criar usuario(nome, email, etc)
    //response =  devolve resposta pro navegador ou plataforma
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    //intala a extensão no navegado JSON Viewer
    return response.json(filteredUsers);
});

app.get('/users/:id', (request,response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
})

app.post('/users', (request, response) => {
const data = request.body;

console.log(data);

    const user = {
        name: data.name,
        email: data.email
    };
    
    // o return foça que a requisição pare aqui
    return response.json(user);
});*/

app.listen(3333);