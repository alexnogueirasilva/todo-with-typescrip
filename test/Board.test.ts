import Board from "../src/Board";

test("Deve Criar um quadro", function () {
    const board = new Board("Project 1");
    expect(board.name).toBe("Project 1");
});