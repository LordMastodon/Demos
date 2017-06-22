import { Demo } from '../interfaces/demo.js';
import { DemoType } from '../interfaces/demotype.js';

export class DemosService {
    constructor() {
        'ngInject';

        this.CONFIRMATION_PAGE = new DemoType('Confirmation Page', 1);
        this.PRESTAY_LANDING_PAGE = new DemoType('Pre-Stay Landing Page', 2);
        this.HOMEPAGE = new DemoType('Homepage', 3);

        this.demos = [new Demo("Example Demo", "<b>Example Demo</b>", this.CONFIRMATION_PAGE, ""), new Demo("Example Demo 2", "<b>Example Demo 2</b>", this.PRESTAY_LANDING_PAGE, "")];
    }

    findDemoByName(name) {
        for (var i = 0; i < this.demos.length; i++) {
            if (name === this.demos[i].name) {
                return i;
            }
        }

        return;
    }

    getDemoTypeByID(id) {
        if (id == 1) {
            return this.CONFIRMATION_PAGE;
        } else if (id == 2) {
            return this.PRESTAY_LANDING_PAGE;
        } else if (id == 3) {
            return this.HOMEPAGE;
        }

        return;
    }

    addDemo(name, html, demotype, url) {
        this.demos.push(new Demo(name, html, demotype, url));
    }

    removeDemo(name) {
        this.demos.splice(this.findDemoByName(name), 1);
    }

    updateDemo(oldName, newName, html, demotype, url) {
        this.demos[this.demos.findDemoByName(oldName)].setName(newName);
        this.demos[this.demos.findDemoByName(oldName)].setHtml(html);
        this.demos[this.demos.findDemoByName(oldName)].setDemoType(demotype);
        this.demos[this.demos.findDemoByName(oldName)].setUrl(url);
    }

    getDemos() {
        return this.demos;
    }
}