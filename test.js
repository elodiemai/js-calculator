function cat(name, health, energy) {

    const _max = {
        health,
        energy
    };

    const _state = {
        name,
        health,
        energy,
        alive: true,
    };

    function getStats() {
            return _state
        };
 
    function _checkAlive(){
        if (!_state["alive"]) {
            _printMsg(`${name} needs to be taken care of!`);
            return false;
        } else return true;
    }

    function eat() {
        if (_checkAlive()) {
            if (_addStat('health', 1) || _addStat('energy', 1))
            _printMsg(`${name} ate.`);
        }
    }

    function sleep() {
        if (_checkAlive()) {
            if (_addStat('health', 2) || _addStat('energy', 3)) 
            _printMsg(`${name} slept.`);
        }
    }

    function fight(enemy) {
        if (_checkAlive()) {
            if (enemy.getStats().energy > _state.energy && enemy.getStats().health > _state.health) {
                if (_removeStat(_state,'energy', 3) && _removeStat(_state,'health', 2)) 
                _removeStat.call(enemy, enemy.getStats(),'energy',1);
                _printMsg(`Enemy is stronger that ${name}. ${name} took -2 damages in health and -3 damages in energy.`);
            } else {
                _removeStat(_state,'energy', 1);
                _removeStat.call(enemy, enemy.getStats(),'health',3);
                _removeStat.call(enemy, enemy.getStats(),'energy',2);
                _printMsg(`${name} is stronger that enemy. ${name} gained +1 in pride and lost -1 in energy.`);
            } 
        }
    }

    function play() {
        if (_checkAlive()) {
            if (_removeStat('energy', 1))
            _printMsg(`${name} played.`);
        }
    }

    function _addStat(type, points) {
        if (_state[type] <= _max[type] - points) {
            _state[type] += points;
            _printMsg(`${name} gained +${points} ${type}.`);
            return 1;
        } else {
            _state[type] = _max[type];
            _printMsg(`${name} is at maximum ${type}. (max: ${_max[type]})`)
            return 0;
        }
    }

    function _printMsg(message) {
        console.log(message);
    }

    function _removeStat(_state, type, points) {
        if (_state[type] >= points) {
            _state[type] -= points;
            return 1;
        } else {
            _state[type] = 0;
            _state["alive"] = false;
            _printMsg(`Oh no! Too much damage: ${_state.name} died and needs to be taken care of.`, _state);
            return 0;
        }
    }

    function care() {
        _state["alive"] = true;
        initialize();
    }

    return {
        sleep:sleep,
        eat: eat,
        play: play,
        fight: fight,
        getStats: getStats,
        care: care
    }

}

let tarrega = cat('Tarrega', 10, 15);
let jeremy = cat('Jeremy',20,25);
let pouki = cat('Pouki',1,2);