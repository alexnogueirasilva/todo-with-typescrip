import BoardService from "../../src/Service/BoardService";
import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import CardRepositoryDatabase from "../../src/infra/repository/CardRepositoryDatabase";

test("Deve Listar os quardos", async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Project 1");

    await connection.close();

});

test("Deve retornar um quardos", async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const cardRepository = new CardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository, columnRepository, cardRepository);
    const board = await boardService.getBoard(1);

    expect(board.name).toBe("Project 1");
    expect(board.columns).toHaveLength(4);

    const [column1, column2, column3, column4] = board.columns;
    expect(column1.name).toBe("Coluna A");
    expect(column1.estimative).toBe(9);
    expect(column2.estimative).toBe(0);
    expect(column3.estimative).toBe(0);
    expect(column4.estimative).toBe(0);
    expect(board.estimative).toBe(9)

    const [card1, card2, card3] = column1.cards;
    expect(card1.title).toBe("Atividade A");
    expect(card1.estimative).toBe(3);
    expect(card2.title).toBe("Atividade B");
    expect(card2.estimative).toBe(3);
    expect(card3.title).toBe("Atividade C");
    expect(card3.estimative).toBe(3);

    await connection.close();

});

