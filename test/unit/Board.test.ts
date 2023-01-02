import Board from "../../src/domain/entity/Board";

test("Deve Criar um quadro", function () {
    const board = new Board(1,"Project 1");
    expect(board.name).toBe("Project 1");

});

test("Não deve criar um quadro sem nome", function () {
    expect(() => new Board(1,"")).toThrowError("Nome é obrigatório");
});
