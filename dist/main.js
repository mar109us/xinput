/* const output = document.getElementById("output") as HTMLElement;

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
 */
// This runs purely in your browser window via Vite
console.log("Vite application active.");
const socket = new WebSocket("ws://localhost:8080");
socket.onopen = () => {
    console.log("Successfully connected to native gamepad server.");
};
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // This prints in your browser DevTools Console while you are playing your game!
    console.log(`[Stream Received] Button ${data.button} was pressed!`);
    // Optional: If you want to render the clicks onto your HTML page dynamically
    const logDiv = document.getElementById("log");
    if (logDiv) {
        const p = document.createElement("p");
        p.innerText = `Button ${data.button} pressed at ${new Date().toLocaleTimeString()}`;
        logDiv.prepend(p);
    }
};
socket.onerror = (error) => {
    console.error("WebSocket Error:", error);
};
export {};
//# sourceMappingURL=main.js.map