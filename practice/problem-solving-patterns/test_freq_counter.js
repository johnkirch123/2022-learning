function sameFrequency(freq1, freq2){
    let freq1Arr = Array.from(String(freq1));
    let freq2Arr = Array.from(String(freq2));
    let freq1Obj = {};
    let freq2Obj = {};
    if(freq1Arr.length !== freq2Arr.length) return false;
    for(let val of freq1Arr) {
        console.log(val)
        freq1Obj[val] = (freq1Obj[val] || 0) + 1;
    }
    for(let val of freq2Arr) {
        freq2Obj[val] = (freq2Obj[val] || 0) + 1;
    }
    for(let key in freq1Obj) {
        if(!(key in freq2Obj)) return false;
        if(freq1Obj[key] !== freq2Obj[key]) return false;
    }
    return true;
}

console.log(sameFrequency(123, 321));