const output = document.getElementById("output");
let gamepadIndex;
window.addEventListener("gamepadconnected", (event) => {
    gamepadIndex = event.gamepad.index;
});
let myGamepad;
function gameLoop() {
    if (gamepadIndex !== undefined) {
        myGamepad = navigator.getGamepads()[gamepadIndex];
        output.innerHTML = "";
        myGamepad.buttons
            .map((e) => e.pressed)
            .forEach((isPressed, buttonIndex) => {
            if (isPressed) {
                output.innerHTML += `<h1>Button ${buttonIndex} is pressed</h1>`;
            }
        });
    }
    if (gamepadIndex === undefined) {
        output.innerHTML = `Controller disconnected`;
    }
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
export {};
//# sourceMappingURL=main.js.map