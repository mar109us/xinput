const output = document.getElementById("output") as HTMLElement;

let gamepadIndex: any;
window.addEventListener("gamepadconnected", (event) => {
	gamepadIndex = event.gamepad.index;
});

let myGamepad: any;

function gameLoop() {
	if (gamepadIndex !== undefined) {
		myGamepad = navigator.getGamepads()[gamepadIndex];
		output.innerHTML = "";
		myGamepad.buttons
			.map((e: any) => e.pressed)
			.forEach((isPressed: any, buttonIndex: any) => {
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
