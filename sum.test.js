// sum.test.js
// Импортируем нашу функцию sum из файла sum.js.
const sum = require('./sum');

// Описываем группу тестов для функции sum.
// 'test' - это функция Jest для определения отдельного теста.
test('adds 1 + 2 to equal 3', () => {
  // 'expect' - это функция Jest для создания утверждений (assertions).
  // 'toBe' - это "матчер" (matcher), который проверяет строгое равенство.
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 0 to equal 5', () => {
  expect(sum(5, 0)).toBe(5);
});

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
