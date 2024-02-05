import { Component } from "./components/component.js"

const myComponent = new Component(document.getElementById('app'), {
    listeners: ['click', 'mouseover'],
    className: 'my-component-class',
});

myComponent.init()
myComponent.render()

console.log(myComponent.events)

setTimeout(() => {
    myComponent.destroy()
    console.log(myComponent.events)
}, 5000);