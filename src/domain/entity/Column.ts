export default class Column {

    constructor(
        readonly idColumn: number,
        readonly name: string,
        readonly hasEstimative: boolean
    ) {
        if (!name) {
            throw new Error("Nome é obrigatório");
        }
    }
}
