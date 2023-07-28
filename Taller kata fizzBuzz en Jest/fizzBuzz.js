class FizzBuzz {
    retornar_fizzBuzz(numero) {
        if ((numero % 3 === 0) & (numero % 5 === 0)) {
            return 'FizzBuzz';
        } else {
             return numero;
        }
    }
};

module.exports = FizzBuzz;