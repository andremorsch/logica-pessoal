const { removeVowels } = require('../desafios/001removeVowels');
const { uniqueInOrder } = require('../desafios/002uniqueInOrder');
const { findUniq } = require('../desafios/003findUniqueNumber');

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

describe("Teste exercício 003", () => {
  it('Testa caso correto 1', () => {
    const use01 = findUniq([ 1, 0, 0 ]);
    expect(use01).toEqual(1);
  });

  it('Testa caso correto 2', () => {
    const use02 = findUniq([ 0, 1, 0 ]);
    expect(use02).toEqual(1);
  });

  it('Testa caso correto 3', () => {
    const use03 = findUniq([ 1, 1, 1, 2, 1, 1 ]);
    expect(use03).toEqual(2);
  });

  it('Testa caso correto 4', () => {
    const use04 = findUniq([ 1, 1, 2, 1, 1 ]);
    expect(use04).toEqual(2);
  });

  it('Testa caso correto 5', () => {
    const use05 = findUniq([ 3, 10, 3, 3, 3 ]);
    expect(use05).toEqual(10);
  });
});