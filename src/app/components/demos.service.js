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

    findDemoByNameInArray(array, name) {
        for (var i = 0; i < array.length; i++) {
            if (name === array[i].name) {
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

    sortDemoArray(array) {
        var newArray = [];

        for (var i = 0; i < 3; i++) {
            var tempArray2 = [];

            for (var j = 0; j < array.length; j++) {
                console.log(array[j]);
                if (array[j].demoType.id == i + 1) {
                    tempArray2.push(array[j]);
                }
            }

            if (tempArray2.length > 1) {
                var tempArray3 = [];
                var tempArray4 = tempArray2;

                for (var k = 0; k < tempArray2.length; k++) {
                    tempArray3.push(tempArray2[k].getName());
                }
              
                tempArray2 = [];
                tempArray3.sort();

                for (var l = 0; l < tempArray3.length; l++) {
                    tempArray2.push(this.findDemoByNameInArray(tempArray4, tempArray3[l]));
                }
            }

            for (var m = 0; m < tempArray2.length; m++) {
                newArray.push(tempArray2[m]);
            }
        }

        return newArray;
    }

    addDemo(name, html, demotype, url) {
        this.demos.push(new Demo(name, html, demotype, url));
        var demos2 = this.demos;
        this.demos = this.sortDemoArray(demos2);
        console.log(this.sortDemoArray(this.demos));
    }

    removeDemo(name) {
        this.demos.splice(this.findDemoByName(name), 1);
        var demos2 = this.demos;
        this.demos = this.sortDemoArray(demos2);
    }

    updateDemo(oldName, newName, html, demotype, url) {
        this.demos[this.findDemoByName(oldName)].setName(newName);
        this.demos[this.findDemoByName(newName)].setHtml(html);
        this.demos[this.findDemoByName(newName)].setDemoType(this.getDemoTypeByID(demotype));
        this.demos[this.findDemoByName(newName)].setUrl(url);
        var demos2 = this.demos;
        this.demos = this.sortDemoArray(demos2);
    }

    getDemos() {
        return this.demos;
    }
}