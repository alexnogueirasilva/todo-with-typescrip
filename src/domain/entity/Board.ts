export default class Board {
    constructor( readonly idBoard: number, readonly name: string) {
        if (!name) {
            throw new Error("Nome é obrigatório");
        }
    }
}
