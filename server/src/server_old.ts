import express from 'express'; 

const app = express();
app.use(express.json());


const users = ['Alexandre','Adriana','Leo'];

app.get('/users', (request, response) => {
    //console.log('listagem de usuarios');
    //response.send('meu primeiro rest em nodejs!');
   const search = String(request.query.search);
   const filtrado = search ? users.filter(user => user.includes(search)) : users;
   return response.json(filtrado);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    //response.send('meu primeiro rest em nodejs!');
   return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);
    const user = {
        name: data.name,
        email: data.email
    }
   return response.json(user);
});

app.listen(3333);