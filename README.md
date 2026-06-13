# Calculator Task

![test-check](https://github.com/rsln8/my-calculator-task/actions/workflows/test-check.yml/badge.svg?branch=source)

## Задание

Напишите функцию `calculator(a, operator, b)` в файле `src/index.js`.

Функция принимает:
- `a` — первое число
- `operator` — строка с оператором: `'+'`, `'-'`, `'*'`, `'/'`
- `b` — второе число

Функция должна возвращать результат операции.

При делении на ноль выбрасывай ошибку с текстом `'Division by zero'`.
При неизвестном операторе выбрасывай ошибку с текстом `'Unknown operator'`.

## Пример

```js
calculator(2, '+', 3); // 5
calculator(10, '/', 2); // 5
calculator(10, '/', 0); // Error: Division by zero
```
