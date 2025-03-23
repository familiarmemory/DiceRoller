import * as math from 'mathjs';

export function roll(sides, dice){
    let total = 0;
    for (let i = 0; i < dice; i++){
        total +=( math.floor(math.randomInt(1, sides)) + 1);
    }
    return total;
}