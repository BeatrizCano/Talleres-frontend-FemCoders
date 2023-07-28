class Buzz {
    retornar_buzz(numero) {
        if (numero % 5 === 0) {
            return 'Buzz';
        } else {
             return numero;
        }
    }
};

module.exports = Buzz;