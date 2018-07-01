const init = () => {

    const duckImages = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

    const outputElement = document.querySelector(".duck");
    const button = document.querySelector("button");

    function getRandomDuck() {
        let random = Math.floor(Math.random() * duckImages.length);
        return duckImages[random];
    }

    button.addEventListener("click", function () {
        outputElement.innerHTML = "<img src='img/img" + getRandomDuck() + ".jpg'>";
    });
}


document.addEventListener("DOMContentLoaded", init);

