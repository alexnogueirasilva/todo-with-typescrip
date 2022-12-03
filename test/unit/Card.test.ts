import Card from "../../src/entity/Card";

test("Deve criar um cartão", function () {
    const card = new Card("Activit 1", 3);
    expect(card.title).toBe("Activit 1");
    expect(card.estimative).toBe(3);
});

test("Não deve criar um cartão sem título", function () {
    expect(() => new Card("", 3)).toThrowError("Título é obrigatório");
});

test("Não deve criar um cartão com estimativa negativa", function () {
    expect(() => new Card("Activite", -3)).toThrowError("Estimativa deve ser maior que zero");
});

