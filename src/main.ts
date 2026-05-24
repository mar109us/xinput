console.log("Vite application active.");

const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
	console.log("Successfully connected to native gamepad server.");
};

socket.onmessage = (event) => {
	const data = JSON.parse(event.data);
	console.log(`${data.button}`);
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
