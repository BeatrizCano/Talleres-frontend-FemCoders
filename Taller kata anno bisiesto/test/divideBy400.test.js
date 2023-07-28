const LeapYear = require('../leapYear');

describe('Verificar que al introducir un año y sea divisible por 4 o 400;O bien sea divisible por 100 y 400, retorne true. Sino, devuelve false.', () => {
  test('Caso 1, devuelve true cuando sea divisible por 400. Sino, devuelve false.', () => {
    const leap_year = new LeapYear();
    let year = 1600;
    let expected_response = true; 

    const response = leap_year.divide_by_400(year);

    expect(response).toBe(expected_response);
  });
});
