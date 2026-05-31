// PBT_07 - Bài B3: Mini Game đoán số

function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const guessedNumbers = [];
    let count = 0;
    const maxTurns = 7;

    while (count < maxTurns) {
        const input = prompt(`Lần ${count + 1}/${maxTurns}: Nhập số từ 1 đến 100:`);

        if (input === null) {
            alert("Bạn đã thoát game.");
            return;
        }

        const guess = Number(input);

        if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
            alert("Vui lòng nhập một số nguyên từ 1 đến 100.");
            continue;
        }

        if (guessedNumbers.includes(guess)) {
            alert("Bạn đã đoán số này rồi!");
            continue;
        }

        guessedNumbers.push(guess);
        count++;

        if (guess === secretNumber) {
            alert(`Đúng rồi! Bạn đoán đúng sau ${count} lần!`);
            return;
        }

        if (guess < secretNumber) {
            alert("Cao hơn");
        } else {
            alert("Thấp hơn");
        }
    }

    alert(`Bạn đã hết lượt. Đáp án là ${secretNumber}.`);
}
