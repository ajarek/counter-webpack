export class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }
    render() {
        const button = document.createElement('button');
        button.innerText = this.text;
        button.classList.add('button');
        button.addEventListener('click', this.onClick);
        return button;
}
}