let text = 'Сегодня целый день, ромашка, звучат, пион тревоги ромашка';

console.log(text);
console.log(badWordFilter(text));



//function
function badWordFilter (badWord1, badWord2) {
    if (badWord1.includes('ромашка')){
        while (text.includes('ромашка')) {
            text = text.replace('ромашка', '*******');
        }
    } else if (badWord2.includes('пион')) {
        while (text.includes('пион')) {
            text = text.replace('пион', '****');
        }
    }
    return text;
}