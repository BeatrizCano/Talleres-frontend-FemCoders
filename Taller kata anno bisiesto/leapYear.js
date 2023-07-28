class LeapYear {

    divide_by_4(year) {
        if (year % 4 === 0){
            return true;
        } else {
        return false
        }
    }

    divide_by_400(year) {
        if (year % 400 === 0){
            return true;
        } else {
        return false
        }
    }

    divide_by_400_and_100(year) {
        if ((year % 400 === 0) & (year % 100 === 0)) {
            return true;
        } else {
        return false
        }
    }
}

module.exports = LeapYear;