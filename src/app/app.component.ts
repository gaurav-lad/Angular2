import {Component} from "@angular/core"

@Component({
    selector: 'my-app',
    template: `<div> 
                    <h1> {{pageHeader}} </h1> 
                    <my-employee></my-employee>
                    <br/>
                    <button class="colorClass" [class]='classesToApply'> My Button </button>
                    <br/><br/>
                    <button class="colorClass" [class.boldClass]='applyBoldClass'> My Button </button>
                    <br/><br/>
                    <button class="colorClass" [ngClass]='addClasses()'> My Button </button>
              </div>`
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    }
}