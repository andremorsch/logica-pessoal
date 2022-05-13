const { generateHashtag } = require('../desafios/006-010/006HashtagGenerator');
const { accum } = require('../desafios/006-010/007AccumLetters');
const { whatday } = require('../desafios/006-010/008DaysOfTheWeek');

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

describe("Testa exercício 007", () => {
  it('Testa caso correto 01', () => {
    const use01 = accum("ZpglnRxqenU");
    expect(use01).toEqual("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
  });

  it('Testa caso correto 02', () => {
    const use02 = accum("NyffsGeyylB");
    expect(use02).toEqual("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
    expect(typeof use02).toEqual("string");
  });
});

describe("Testa exercício 008", () => {
  it('Testa caso correto 01', () => {
    const use01 = whatday(1);
    expect(use01).toEqual("Sunday");
  });
  it('Testa caso correto 02', () => {
    const use01 = whatday(2);
    expect(use01).toEqual("Monday");
  });
  it('Testa caso correto 03', () => {
    const use01 = whatday(30);
    expect(use01).toEqual("Wrong, please enter a number between 1 and 7");
  });
});