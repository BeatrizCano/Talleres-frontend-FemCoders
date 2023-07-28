const Fizz = require('../fizz');

describe (
    'Verificar que cuando se introduzca un número divisible entre 3 devuelva Fizz y sino, devuelva el número introducido', ( ) => {
        test('Caso 1 devuelve Fizz cuando sea divisible por 3', () => {

            const fizz = new Fizz();
            let numero = 6;
            let respuesta_esperada = "Fizz";

            const respuesta = fizz.retornar_fizz(numero);

            expect(respuesta).toBe(respuesta_esperada);
        }
    )}
)