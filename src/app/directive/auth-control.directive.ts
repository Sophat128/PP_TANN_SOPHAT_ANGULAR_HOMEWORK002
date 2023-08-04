// auth-control.directive.ts
import { Directive, Input, TemplateRef, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAuthControl]'
})
export class AuthControlDirective {
  private isLoggedIn = false;
  @Input('appAuthControl')
  set authControl(value: boolean) {
    this.isLoggedIn = value;
    this.updateView();
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
  ngOnChanges() {
    this.updateView();
  }
  private updateView() {
    if (this.isLoggedIn) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();

    }
  }
}
