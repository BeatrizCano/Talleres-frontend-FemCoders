const Buzz = require('../buzz');

describe (
    'Verificar que cuando se introduzca un número divisible entre 5 devuelva Buzz y sino, devuelva el número introducido', ( ) => {
        test('Caso 2 devuelve Fizz cuando sea divisible por 5', () => {

            const buzz = new Buzz();
            let numero = 10;
            let respuesta_esperada = "Buzz";

            const respuesta = buzz.retornar_buzz(numero);

            expect(respuesta).toBe(respuesta_esperada);
        }
    )}
)