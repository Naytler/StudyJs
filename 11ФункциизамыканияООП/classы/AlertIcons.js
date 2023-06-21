class Alert2 extends Alert{
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
    showAlertIcon() {
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>
        <img src="${this.icon}" alt="">${this.message}</p>`;
    }
}
