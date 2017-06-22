export class Demo {
    constructor(name, html, demoType, url) {
        this.name = name;
        this.html = html;
        this.demoType = demoType;
        this.url = url;
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

    getUrl() {
        return this.url;
    }

    setUrl(url) {
        this.url = url;
    }
}