import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import ColumnService from "../../src/Service/ColumnService";
import Column from "../../src/domain/entity/Column";
import * as wasi from "wasi";
test("Deve listar as colunas", async function () {
    const connection = new PgPromiseConnection();
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const columns = await columnService.getColumns(1);
    expect(columns).toHaveLength(4);
});

test("Deve salvae uma column", async function () {
    const connection = new PgPromiseConnection();
    const columnRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnRepository);
    const idColumn =await columnService.saveColumn(new Column(1,1, "ToDo", true));
    const column = await columnService.getColumn(idColumn);
    expect(column.name).toBe("ToDo");
    await columnService.deleteColumn(idColumn);
    await connection.close();

});
