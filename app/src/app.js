import mqtt from 'mqtt';
import _ from 'lodash';

const client = mqtt.connect()
client.subscribe("mqtt/demo")

client.on("message", function (topic, payload) {
  alert([topic, payload].join(": "))
  //client.end()
})

client.publish("mqtt/demo", "hello world!")

function component () {
  var element = document.createElement('div');

  const myconst = 'hello';

  setTimeout(() => {
    console.log("hello from settimeout")
  }, 3000)

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
