function calculatorModule() {
    let _total = null;
    let _memory = null;

    function setTotal(number) {
        _validate(number);
        return _total = number;
    }

    function add(number) {
        _validate(number);
        _total += number;
    }

    function sub(number) {
        _validate(number);
        _total -= number;
    }

    function multi(number) {
        _validate(number);
        _total *= number;
    }

    function div(number) {
        _validate(number);
        _total /= number;
    }

    function displayTotal() {
        return _total;
    }

    function displayMemory() {
        return _memory;
    }

    function setMemory() {
        _memory = _total;
       return displayMemory();
    }

    function clearMemory() {
        _memory = null;
    }

    function _validate(number) {
        if (typeof number !== 'number') {
            throw 'ERROR: Not a number';
        }
    }

    return {
        add: add,
        sub: sub,
        multi: multi,
        div: div,
        displayTotal: displayTotal,
        setMemory: setMemory,
        displayMemory: displayMemory,
        setTotal: setTotal,
        clearMemory: clearMemory

    }

}

let myCalculator = calculatorModule();