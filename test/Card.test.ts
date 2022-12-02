import Card from "../src/Card";

test("Deve criar um cartão", function () {
    const card = new Card("Activit 1", 3);
    expect(card.title).toBe("Activit 1");
    expect(card.estimative).toBe(3);
});