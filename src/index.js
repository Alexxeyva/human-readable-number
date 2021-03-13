module.exports = function toReadable (number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['zero', 'ten','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let a = number % 10;
    let b = number % 100;

    if (number < 20) return numbers[number];

    if (number < 100) {
        if (a == 0) return dozens[number / 10];
        return dozens[(number - a) / 10] + ' ' + numbers[a];
    }

    if (number < 1000) {
        if (b == 0) return numbers[number / 100] + ' ' + 'hundred';
        if (a == 0) return numbers[(number - b) / 100] + ' ' + 'hundred' + ' ' + dozens[b / 10];
        if (b < 20) return numbers[(number - b) / 100] + ' ' + 'hundred' + ' ' + numbers[b];
        return numbers[(number - b) / 100] + ' ' + 'hundred' + ' ' + dozens[((number - a) % 100) / 10] + ' ' + numbers[a];
    }
}
