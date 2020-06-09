import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

//Notes:
// Rota: Endereço completo da requisição (localhost:3333/)
// Recurso: Qual entidade estamos acessando do sistema (/users)

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação no back-end

// POST: http://localhost:3333/users - Criar um usuário
// GET: http://localhost:3333/users  - Listar usuários
// GET: http://localhost:3333/users/5 - Buscar dados do usuário com ID = 5

// Request Param: Parâmetros que vem na própria rota que identificam um recurso (Quando é algo obrigatório, que vai ficar na rota)
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação (Usado para filtro, paginação)
// Request Body: Parâmetros para criação/atualização de informações (Somente para inserção e edição)

//GET: Um exemplo de Query Param
// const users = [
//     'Diego',
//     'Bruno',
//     'Claiton',
//     'Leonardo'
// ]

// app.get('/users', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     response.json(filteredUsers);
// });

//GET: Pegar um usuário em específico | Exemplo de Request Param
// app.get('/users/:id', (request, response) => {
//     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user)
// })

//POST: Exemplo de Request Body
// app.post('/users', (request, response) => {
//     const data = request.body;

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user); 
// });