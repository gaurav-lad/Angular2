import { Component } from "@angular/core";

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
                    <br/><br/>
                    Name: <input [value]='name' (input)= 'name=$event.target.value'/>
                    <br/>
                    You entered : {{name}}
                    <br/><br/>
                    Text : <input [(ngModel)] ='name2'>
                    <br/>
                    You entered : {{name2}}
                    <br/><br/>
                    List Goes Here: 
                    <br/><br/>
                    <list-employee></list-employee>
                    <br/><br/>
                    Your Name : <input type='text' [(ngModel)]='userText'/>
                    <br/><br/>
                    <simple [simpleInput] = 'userText'></simple>
                    <br/><br/>
                    list-employeeYour Name Updated to: {{userText}}
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
    name: string = 'Tom';
    name2: string = 'Gaurav';
    userText: string = 'Gaurav Test';

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