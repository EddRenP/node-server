var readlineSync = require('readline-sync');

const tareas = [
    {id : 1, name : "comprar provisiones", completado : false},
    {id : 2, name : "comprar medicina", completado : false},
    {id : 3, name : "comprar ropa", completado : false},
];

const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/tareas') {
        console.table(tareas);
        res.end(JSON.stringify(tareas));
      }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});