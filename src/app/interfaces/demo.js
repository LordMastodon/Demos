export class Demo {
    constructor(name, html) {
        this.name = name;
        this.html = html;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getHtml() {
        return this.html;
    }

    setHtml(html) {
        this.html = html;
    }
}