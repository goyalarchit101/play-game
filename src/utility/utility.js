const generateRandomNumber = (exclude) => {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 6) + 1;
    } while (randomNumber === exclude);
    return randomNumber;
}

export default generateRandomNumber;

