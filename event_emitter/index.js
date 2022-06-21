const EventEmiter = require('events')
const events = new EventEmiter()

events.on('start', () => {
    console.log("Durante")
})

console.log("Antes")

events.emit("start")

console.log("depois")
