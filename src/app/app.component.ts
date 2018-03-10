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
                    <br/><br/>
                    <button style='color:red' [style.fontWeight]="isBold ? 'bold' : 'normal'"> My Button4 </button>
                    <br/><br/>
                    <button style='color:red' [style.font-size.px]="fontSize"> My Button5 </button>
                    <br/><br/>
                    <button style='color:red' [ngStyle]="addStyle()"> My Button6 </button>
                    <br/><br/>
                    <button on-click ='onClick()'> Click </button>
              </div>`
})

export class AppComponent {
    pageHeader: string = "Employee Details";
    classesToApply: string = 'boldClass italicsClass';
    applyBoldClass: boolean = true;
    applyItalicsClass: boolean = true;
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    }

    addStyle() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    }

    onClick(): void {
        console.log("Button clicked");
    }
}