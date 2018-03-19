/**
 * 复制文本
 * @param {string} [str=''] 
 */

function copy(str) {
    const input = document.createElement('textare');
    input.value = str;
    document.body.appendChild(input);
    input.setAttribute('readonly','');
    input.select();
    input.setSelectionRange(0, input.value.length) // 选中文本
    document.execCommand('copy') // 拷贝当前选中内容到剪贴板。
    document.body.removeChild(input)
}