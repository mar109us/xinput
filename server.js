import { WebSocketServer } from "ws";
import { installNavigatorShim } from "gamepad-node";

installNavigatorShim();

const server = new WebSocketServer({ port: 8080 });
console.log("Starting server on 8080");

let lastButtonStates = [];

server.on("connection", (ws) => {
	console.log("Connected");

	const interval = setInterval(() => {
		const gamepad = navigator.getGamepads();
		const gp = gamepad[0];

		if (gp) {
			gp.buttons.forEach((button, index) => {
				const isPressed = button.pressed;
				if (isPressed && !lastButtonStates[index]) {
					console.log(`${index}`);
					ws.send(JSON.stringify({ button: index }));
				}
				lastButtonStates[index] = isPressed;
			});
		}
	}, 16);

	ws.on("close", () => {
		clearInterval(interval);
		console.log("Disconnected");
	});
});
