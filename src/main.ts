import express from 'express';
import pgq from 'pg-promise';
import Board from "./entity/Board";
import Column from "./entity/Column";
import Card from "./entity/Card";

const app = express();

const conection = pgq()("postgres://postgres:Bruna2012*@localhost:5432/fullstack");

app.get('/boards', async (req, res) => {
    const boardsData = await conection.query("SELECT name FROM public.board", []);
    const boards: Board[] = [];
    for (const boardData of boardsData) {
        boards.push(new Board(
            boardData.name,
        ));
    }
    res.json(boards);
});

app.get('/boards/:idBoard/columns', async (req, res) => {
    const columnsData = await conection.query("SELECT name, has_estimative FROM public.column where id_board = $1", [req.params.idBoard]);
    const columns: Column[] = [];
    for (const columnData of columnsData) {
        columns.push(new Column(
            columnData.name,
            columnData.has_estimative
        ));
    }

    res.json(columns);
});

app.get('/boards/:idBoard/columns/:idColumn/cards', async (req, res) => {
    const cardsData = await conection.query("SELECT title, estimative FROM public.card where id_column = $1", [req.params.idColumn]);
    const cards: Card[] = [];
    for (const cardData of cardsData) {
        cards.push(new Card(
            cardData.title,
            cardData.estimative
        ));
    }

    res.json(cards);
});


app.listen(3000)
