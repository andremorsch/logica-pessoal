const { removeVowels } = require('../desafios/001removeVowels');
const { uniqueInOrder } = require('../desafios/002uniqueInOrder');

describe("Teste exercício 001", () => {
  it('Testa caso correto 1', () => {
    const use01 = removeVowels("This website is for losers LOL!");
    expect(use01).toEqual("Ths wbst s fr lsrs LL!");
  });

  it('Testa caso correto 2', () => {
    const use01 = removeVowels("No offense but,\nYour writing is among the worst I've ever read");
    expect(use01).toEqual("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  });
});


describe("Teste exercício 002", () => {
  it('Testa caso correto', () => {
    const use01 = uniqueInOrder('AAAABBBCCDAABBB');
    expect(use01).toEqual(['A','B','C','D','A','B']);
  });
});