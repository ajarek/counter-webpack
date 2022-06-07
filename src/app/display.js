export  class Display{
    constructor(text){
        this.text = text;
    }
    render(){
        const display = document.createElement('div');
        display.innerText = this.text;
        display.classList.add('display');
        return display;
    }

}