import ColumnRepository from "../../domain/repository/ColumnRepository";
import Connection from "../database/Connection";
import Column from "../../domain/entity/Column";
import pgq from "pg-promise";

export default class ColumnRepositoryDatabase implements ColumnRepository {
    constructor(readonly connection: Connection) {
    }

    async findAllByIdBoard(idBoard: number): Promise<Column[]> {
        const columnsData = await this.connection.query("SELECT id_board, id_column, name, has_estimative FROM vuejs.column where id_board = $1", [idBoard]);
        const columns: Column[] = [];
        for (const columnData of columnsData) {
            columns.push(new Column(
                columnData.id_board,
                columnData.id_column,
                columnData.name,
                columnData.has_estimative
            ));
        }
        return columns;
    }

    async save(column: Column): Promise<number> {
        const [columnData] = await this.connection.query('INSERT INTO vuejs.column (id_board, name, has_estimative) VALUES ($1, $2, $3) RETURNING id_column',
            [column.idBoard, column.name, column.hasEstimative]);
        return columnData.id_column;
    }

    async get(idColumn: number): Promise<Column> {
        const [columnData] = await this.connection.query("SELECT id_board, id_column, name, has_estimative FROM vuejs.column where id_column = $1", [idColumn]);
        if (!columnData) {
            throw new Error("Column not found");
        }
        return new Column(columnData.id_board, columnData.id_column, columnData.name, columnData.has_estimative);
    }

    async delete(idColumn: number): Promise<void> {
        await this.connection.query("DELETE FROM vuejs.column where id_column = $1", [idColumn]);
    }

}
