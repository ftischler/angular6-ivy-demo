import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloWorld {
    constructor() {
        this.world = 'world';
    }
}
HelloWorld.ngComponentDef = i0.ɵdefineComponent({ type: HelloWorld, selectors: [["hello-world"]], factory: function HelloWorld_Factory() { return new HelloWorld(); }, template: function HelloWorld_Template(rf, ctx) { if (rf & 1) {
        i0.ɵE(0, "p");
        i0.ɵT(1);
        i0.ɵe();
    } if (rf & 2) {
        i0.ɵt(1, i0.ɵi1("Hello ", ctx.world, ""));
    } } });
renderComponent(HelloWorld);
