import express from 'express';
import pgq from 'pg-promise';
const app = express();

const conection = pgq()("postgres://postgres:Bruna2012*@localhost:5432/fullstack");

app.get('/boards', async (req, res) => {
   const boards = await conection.query("SELECT * FROM public.board", []);
    res.json(boards);
});

app.get('/boards/:idBoard/columns', async (req, res) => {
    const columns = await conection.query("SELECT * FROM public.column where id_board = $1", [req.params.idBoard]);
    res.json(columns);
});

app.get('/boards/:idBoard/columns/:idColumn/cards', async (req, res) => {
    const cards = await conection.query("SELECT * FROM public.card where id_column = $1", [req.params.idColumn]);
    res.json(cards);
});


app.listen(3000)
