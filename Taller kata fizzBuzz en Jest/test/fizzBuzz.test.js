const FizzBuzz = require('../fizzBuzz');

describe (
    'Verificar que cuando se introduzca un número y sea divisible entre 3 y 5 devuelva FizzBuzz y sino, devuelva el número introducido', ( ) => {
        test('Caso 3 devuelve FizzBuzz cuando sea divisible por 3 y 5', () => {

            const fizz_buzz = new FizzBuzz();
            let numero = 15;
            let respuesta_esperada = "FizzBuzz";

            const respuesta = fizz_buzz.retornar_fizzBuzz(numero);

            expect(respuesta).toBe(respuesta_esperada);
        }
    )}
)