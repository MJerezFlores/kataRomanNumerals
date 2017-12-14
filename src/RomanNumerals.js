export default class RomanNumerals {

    calculate(input) {
        var result = "";
        var romanLetters = {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M'
        };

        var placeValue = {
            0: 1000,
            1: 100,
            2: 10,
            3: 1
        }

        var valueDescomposed = this.descompose(input);

        for (var j = 0; j < valueDescomposed.length; j++) {
            var currentValue = valueDescomposed[j];

            if (currentValue == 9) {
                result += romanLetters[1 * placeValue[j]] + romanLetters[placeValue[j] * 10];
            } else if (currentValue == 4) {
                result += romanLetters[1 * placeValue[j]] + romanLetters[placeValue[j] * 5];
            } else if (currentValue == 5) {
                result += romanLetters[5 * placeValue[j]];
            } else {
                if (currentValue > 5 && currentValue < 9) result += romanLetters[5 * placeValue[j]];
                for (var i = currentValue; i % 5 != 0; i--) {
                    result += romanLetters[(i / i) * placeValue[j]];
                }
            }
        }
        return result;
    }

    descompose(value) {
        var valueDescompose = [];
        var thousands = Math.floor(value / 1000);
        var hundreds = Math.floor((value - thousands * 1000) / 100);
        var tens = Math.floor((value - thousands * 1000 - hundreds * 100) / 10);
        var units = Math.floor((value - thousands * 1000 - hundreds * 100 - tens * 10));
        valueDescompose.push(thousands, hundreds, tens, units);
        return valueDescompose;
    }
}
