import { Demo } from '../interfaces/demo.js';
import { DemoType } from '../interfaces/demotype.js';

export class DemosService {
    constructor() {
        'ngInject';

        this.demos = [new Demo("Example Demo", "<b>Example Demo</b>", this.CONFIRMATION_PAGE), new Demo("Example Demo 2", "<b>Example Demo 2</b>", this.PRESTAY_LANDING_PAGE)];
    
        this.CONFIRMATION_PAGE = new DemoType('Confirmation Page', 1);
        this.PRESTAY_LANDING_PAGE = new DemoType('Pre-Stay Landing Page', 2);
        this.HOMEPAGE = new DemoType('Homepage', 3);
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
        if (id === 1) {
            return this.CONFIRMATION_PAGE;
        } else if (id === 2) {
            return this.PRESTAY_LANDING_PAGE;
        } else if (id === 3) {
            return this.HOMEPAGE;
        }

        return;
    }

    addDemo(name, html, demotype) {
        this.demos.push(new Demo(name, html, this.getDemoTypeByID(demotype)));
    }

    removeDemo(name) {
        this.demos.splice(this.findDemoByName(name), 1);
    }

    updateDemo(oldName, newName, html, demotype) {
        this.demos[this.demos.findDemoByName(oldName)].setName(newName);
        this.demos[this.demos.findDemoByName(oldName)].setHtml(html);
        this.demos[this.demos.findDemoByName(oldName)].setDemoType(this.getDemoTypeByID(demotype));
    }

    getDemoInfo(name) {
        return new Demo(this.demos[this.findDemoByName(name)].getName(), this.demos[this.findDemoByName(name)].getHtml(), this.demos[this.findDemoByName(name)].getDemoType().getName());
    }

    getDemos() {
        return this.demos;
    }
}