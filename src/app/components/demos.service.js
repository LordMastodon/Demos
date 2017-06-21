import { Demo } from '../interfaces/demo.js';

export class DemosService {
    constructor() {
        'ngInject';

        this.demos = [new Demo("Example Demo", "<b>Example Demo</b>"), new Demo("Example Demo 2", "<b>Example Demo 2</b>")];
    }

    findDemoByName(name) {
        for (var i = 0; i < this.demos.length; i++) {
            if (name === this.demos[i].name) {
                return i;
            }
        }

        return;
    }

    addDemo(name, html) {
        this.demos.push(new Demo(name, html));
    }

    removeDemo(name) {
        this.demos.splice(this.findDemoByName(name), 1);
    }

    updateDemo(oldName, newName, html) {
        this.demos[this.demos.findDemoByName(oldName)].setName(newName);
        this.demos[this.demos.findDemoByName(oldName)].setHtml(html);
    }

    getDemoInfo(name) {
        return new Demo(this.demos[this.findDemoByName(name)].getName(), this.demos[this.findDemoByName(name)].getHtml());
    }

    getDemos() {
        return this.demos;
    }
}