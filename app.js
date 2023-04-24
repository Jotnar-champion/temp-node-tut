//on - listen for an event
//emit -- emits and event

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// on string or symbol should match that of the emit
customEmitter.on("response", () => {
  console.log("data Received");
});

customEmitter.emit("response");
