import Board from "../../src/domain/entity/Board";

test("Deve Criar um quadro", function () {
    const board = new Board("Project 1");
    board.estimative = 6;
    expect(board.name).toBe("Project 1");
    // expect(board.estimative).toBe(6)
});

test("Não deve criar um quadro sem nome", function () {
    expect(() => new Board("")).toThrowError("Nome é obrigatório");
});
