function reverseWithSpecialChars(arr, specialChars) {
    // Filtramos y guardamos los caracteres especiales con sus índices originales para hacer un seguimiento de ellos.
    let specialCharsFiltered = arr.reduce((acc, item, index) => {
        if (typeof item === 'string' && specialChars.includes(item)) {
            acc.push({ index, value: item });
        }
        return acc;
    }, []);

    // Filtramos, invertimos y guardamos los elementos no especiales, esto lo hacemos para el algoritmo de reversión.
    let reversed = arr.reduce((acc, item) => {
        if (typeof item !== 'string' || !specialChars.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []).reverse();

    // Inicializamos los índices para hacer un seguimiento de los elementos utilizados en la reversión.
    let specialIndex = 0;
    let reversedIndex = 0;

    // Construimos la matriz resultante manteniendo las posiciones originales de los caracteres especiales.
    let result = arr.map((item, index) => {
        if (typeof item === 'string' && specialChars.includes(item)) {
            // Obtenemos el elemento especial actual y actualizamos inmediatemente el índice. Luego retornamos el elemento especial.
            const specialItem = specialCharsFiltered.find(specialItem => specialItem.index === index);
            specialIndex++;
            return specialItem.value;
        } else {
            // Obtenemos el elemento no especial actual y actualizamos inmediatemente el índice. Luego retornamos el elemento no especial.
            reversedIndex++;
            return reversed[reversedIndex - 1];
        }
    });

    // Retornar la matriz resultante
    return result;
}

// Ejecutamos la función la entrada y caracteres especiales deseada.
const input = ['n', 2, 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '&', '%', 8];
const specialChars = ['&', '$', '%'];

const output = reverseWithSpecialChars(input, specialChars);
console.log(output);
