import Column from "../../src/domain/entity/Column";

test("Deve Criar uma coluba", function () {
    const column = new Column(1,"Column A", true);
    expect(column.name).toBe("Column A");
    expect(column.hasEstimative).toBeTruthy();
});

test("Não deve criar uma coluna sem nome", function () {
    expect(() => new Column(1,"", true)).toThrowError("Nome é obrigatório");
});
