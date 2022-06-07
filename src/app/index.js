import '../styles/app.css';
import {Button} from './button.js';
import {Display} from './display.js';

class Counter{
    constructor(number=0,selector){
        const container = document.querySelector(selector)
        this.number=number
        this.selector=selector
        this.container=container
    }
render(){
    this.container.innerText=''
    const title = document.createElement('h1')
    title.innerText='Counter'
    const display = new Display(this.getNumber())
    const button = new Button('➕',()=>{this.increment()})
    const button2 = new Button('➖',()=>{this.decrement()})
    const button3 = new Button('reset',()=>{this.reset()})
     this.container.appendChild(title)                  
    this.container.appendChild(display.render())
    this.container.appendChild(button.render())
    this.container.appendChild(button3.render())
    this.container.appendChild(button2.render())
   
}

    increment(){
        this.number++
        this.render()
    }
    decrement(){
        this.number--
        this.render()
    }
    reset(){
        this.number=0
        this.render()
    }
    getNumber(){
        return this.number
    }
}
const counter = new Counter(0,'#root')
counter.render()






  
  