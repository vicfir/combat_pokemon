export function randArr(array) {
    let rand = Math.random()*array.length | 0;
    let randValue = array[rand];
    return randValue;
}