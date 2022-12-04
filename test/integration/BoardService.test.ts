import BoardService from "../../src/Service/BoardService";
import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";

test("Deve Listar os quardos", async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    const boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Project 1");

});
