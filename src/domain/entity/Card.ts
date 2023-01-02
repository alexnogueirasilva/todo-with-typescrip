export default class Card {

    constructor(
        readonly idColumn: number,
        readonly idCard: number,
        readonly title: string,
        readonly estimative: number
    ) {
        if (!title) {
            throw new Error("Título é obrigatório");
        }

        if (estimative < 0) {
            throw new Error("Estimativa deve ser maior que zero");
        }
    }
}
