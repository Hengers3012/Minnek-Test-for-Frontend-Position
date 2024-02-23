# Reverse Array with Special Characters

Este es un ejercicio de programación fundamental que aborda la reversión de los elementos en un array mientras se mantienen los caracteres especiales en sus posiciones originales.

## Funcionamiento

La función `reverseWithSpecialChars` toma dos parámetros:
1. `arr`: Un array que se desea invertir manteniendo ciertos caracteres especiales en sus posiciones originales.
2. `specialChars`: Un array que contiene los caracteres especiales que deben mantenerse en sus posiciones originales.

La función realiza los siguientes pasos:

1. **Filtrar y guardar caracteres especiales con sus índices originales:**
   - Utiliza `reduce` para construir un array `specialCharsFiltered` que contiene objetos con información sobre los caracteres especiales y sus posiciones originales en el array.

2. **Filtrar, invertir y guardar elementos no especiales:**
   - Utiliza `reduce` para construir un array `reversed` que contiene los elementos no especiales del array original, invertidos.

3. **Inicializar índices:**
   - Inicializa `specialIndex` y `reversedIndex` para hacer un seguimiento de los elementos utilizados durante la construcción de la matriz resultante.

4. **Construir la matriz resultante:**
   - Utiliza `map` para iterar sobre el array original y construir la matriz resultante.
   - Si el elemento actual es un carácter especial, obtiene el carácter de `specialCharsFiltered` y actualiza el índice `specialIndex`.
   - Si el elemento actual no es especial, obtiene el elemento de `reversed` y actualiza el índice `reversedIndex`.

5. **Retornar la matriz resultante:**
   - Retorna la matriz resultante después de completar la construcción.

## Ejemplo de Uso

```javascript
const input = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
const specialChars = ['&', '$', '%'];

const output = reverseWithSpecialChars(input, specialChars);
console.log(output);
