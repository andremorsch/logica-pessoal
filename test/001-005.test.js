const { removeVowels } = require('../desafios/001-005/001removeVowels');
const { uniqueInOrder } = require('../desafios/001-005/002uniqueInOrder');
const { findUniq } = require('../desafios/001-005/003findUniqueNumber');
const { removeEveryOther } = require('../desafios/001-005/004RemovingElements');
const { direction } = require('../desafios/001-005/005locateDirection');

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

describe("Teste exercício 004", () => {
  it('Testa caso correto 1', () => {
    const use01 = removeEveryOther(['Hello', 'Goodbye', 'Hello Again']);
    expect(use01).toEqual(['Hello', 'Hello Again']);
  });

  it('Testa caso correto 2', () => {
    const use02 = removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(use02).toEqual([1, 3, 5, 7, 9]);
  });

  it('Testa caso correto 3', () => {
    const use03 = removeEveryOther([[1, 2]]);
    expect(use03).toEqual([[1, 2]]);
  });

  it('Testa caso correto 4', () => {
    const use04 = removeEveryOther([['Goodbye'], {'Great': 'Job'}]);
    expect(use04).toEqual([['Goodbye']]);
  });
});

describe("Teste exercício 005", () => {
  it('Testa caso correto 1', () => {
    const use01 = direction("S", 180);
    expect(use01).toEqual("N");
  });

  it('Testa caso correto 2', () => {
    const use02 = direction("SE", -45);
    expect(use02).toEqual("E");
  });

  it('Testa caso correto 3', () => {
    const use03 = direction("W", 495);
    expect(use03).toEqual("NE");
  });

  it('Testa caso correto 4', () => {
    const use04 = direction("N", -450);
    expect(use04).toEqual("W");
  });
});