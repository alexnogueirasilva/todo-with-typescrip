import axios from "axios";

test("Deve retornar os quadros por meio da API", async function () {
    const response = await axios.get("http://localhost:3000/boards");

    const boards = response.data;
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Project 1");
});

test("Deve retornar as colunas de um quadros por meio da API", async function () {
    const response = await axios.get("http://localhost:3000/boards/1/columns");

    const columns = response.data;
    expect(columns).toHaveLength(4);
    const [column1, column2, column3, column4] = columns;
    expect(column1.name).toBe("Coluna A");
    expect(column2.hasEstimative).toBe(true);
    expect(column3.name).toBe("Coluna C");
    expect(column4.name).toBe("Coluna D");
});

test("Deve retornar as cartões de um quadros por meio da API", async function () {
    const response = await axios.get("http://localhost:3000/boards/1/columns/1/cards");

    const cards = response.data;
    expect(cards).toHaveLength(3);
    const [card1, card2, card3] = cards;
    expect(card1.title).toBe("Atividade A");
    expect(card2.title).toBe("Atividade B");
    expect(card3.title).toBe("Atividade C");
});
