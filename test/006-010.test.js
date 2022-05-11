const { generateHashtag } = require('../desafios/006-010/006HashtagGenerator');

describe("Teste exercício 006", () => {
  it('Testa caso false', () => {
    const use01 = generateHashtag("");
    expect(use01).toEqual(false);
    expect(typeof use01).toEqual("boolean");
  });

  it('Testa caso correto', () => {
    const use02 = generateHashtag("Do We have A Hashtag");
    expect(use02).toEqual("#DoWeHaveAHashtag");
    expect(typeof use02).toEqual("string");
  });
});