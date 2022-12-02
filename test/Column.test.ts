import Column from "../src/Column";

test("Deve Criar uma coluba", function () {
    const column = new Column("Column A", true);
    expect(column.name).toBe("Column A");
    expect(column.hasEstimative).toBeTruthy();
});