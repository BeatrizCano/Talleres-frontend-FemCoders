
class Fizz {
    retornar_fizz(numero) {
        if (numero % 3 === 0) {
            return 'Fizz';
        } else {
             return numero;
        }
    }
};

module.exports = Fizz;