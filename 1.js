/**
 * Задача #1.
 *
 * Задания:
 * - Какие данные вернет const: test_1?
 * 
 * Доп вопрос: 
 * - Что будет в консоли после цепочки вызова bind
 * const fn = obj.getName.bind(obj).bind({name: "John"}); 
 */

export const test_1 = (() => {
  const obj = {
    name: "bob",
    getName: () => {
      return this.name;
    },
  };

  const fn = obj.getName;

  return fn();
})();
