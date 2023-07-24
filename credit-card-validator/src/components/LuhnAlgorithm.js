function LuhnAlgorithm(number) {

    let sum = 0;
    let shouldDouble = false;
    for (let i = Number.length - 1; i >= 0; i--){
        let digit = parseInt(number.charAt(i), 10);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -=9
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;

    }
    return sum % 10 === 0
    
};
export default LuhnAlgorithm;