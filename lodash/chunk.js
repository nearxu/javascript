const chunk = (arr, size) => {
    const length = arr.length;
    if (!length || !size) {
        return [];
    }
    let start = 0; // 切割范围
    let index = 0; // 下标
    let result = new Array(Math.ceil(length / size));// 长度
    while (start < length) {
        result[index++] = arr.slice(start, (start += size))
    }
    return result;
}

console.log(chunk([1, 2, 3, 4], 3));