const compact = (arr) => {
    let index= 0;
    let result = [];
    for(let value of arr ) {
        value && result[index++] = value 
    }
    return result;
    // return arr.filter(v => !!value !== false );
}