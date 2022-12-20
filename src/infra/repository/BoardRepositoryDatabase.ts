import BoardRepository from "../../domain/repository/BoardRepository";
import Board from "../../domain/entity/Board";
import pgq from "pg-promise";
import Connection from "../database/Connection";

export default class BoardRepositoryDatabase implements BoardRepository {
    constructor(readonly connection: Connection) {
    }


   async findAll(): Promise<Board[]> {
        const boardsData = await this.connection.query("SELECT id_board, name FROM public.board", []);
        const boards: Board[] = [];

        for (const boardData of boardsData) {
            const board = new Board(boardData.name);
            boards.push(board);
        }
        return boards;
    }

    async get(idBoard: number): Promise<Board> {
        const [boardData] = await this.connection.query("SELECT * FROM public.board WHERE id_board = $1", [idBoard]);
        if (!boardData) throw new Error("Board não encontrado");
        const board = new Board(boardData.name);
        return board;
    }

}
