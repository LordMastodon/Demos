export class Demo {
    constructor(name, html, demoType) {
        this.name = name;
        this.html = html;
        this.demoType = demoType;
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

    getDemoType() {
        return this.demoType;
    }

    setDemoType(demoType) {
        this.demoType = demoType;
    }
}