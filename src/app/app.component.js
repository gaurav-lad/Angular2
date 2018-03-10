"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = "Employee Details";
        this.classesToApply = 'boldClass italicsClass';
        this.applyBoldClass = true;
        this.applyItalicsClass = true;
        this.isBold = true;
        this.fontSize = 30;
        this.isItalic = true;
        this.name = 'Tom';
        this.name2 = 'Gaurav';
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass
        };
        return classes;
    };
    AppComponent.prototype.addStyle = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    AppComponent.prototype.onClick = function () {
        console.log("Button clicked");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div> \n                    <h1> {{pageHeader}} </h1> \n                    <my-employee></my-employee>\n                    <br/>\n                    <button class=\"colorClass\" [class]='classesToApply'> My Button </button>\n                    <br/><br/>\n                    <button class=\"colorClass\" [class.boldClass]='applyBoldClass'> My Button </button>\n                    <br/><br/>\n                    <button class=\"colorClass\" [ngClass]='addClasses()'> My Button </button>\n                    <br/><br/>\n                    <button style='color:red' [style.fontWeight]=\"isBold ? 'bold' : 'normal'\"> My Button4 </button>\n                    <br/><br/>\n                    <button style='color:red' [style.font-size.px]=\"fontSize\"> My Button5 </button>\n                    <br/><br/>\n                    <button style='color:red' [ngStyle]=\"addStyle()\"> My Button6 </button>\n                    <br/><br/>\n                    <button on-click ='onClick()'> Click </button>\n                    <br/><br/>\n                    Name: <input [value]='name' (input)= 'name=$event.target.value'/>\n                    <br/>\n                    You entered : {{name}}\n                    <br/><br/>\n                    Text : <input [(ngModel)] ='name2'>\n                    <br>\n                    You entered : {{name2}}\n              </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map