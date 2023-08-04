import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() subjectInfo: any[] = [];
  @Output() toggleEvent = new EventEmitter<boolean> ;
  @Output() toggleNameValueEvent = new EventEmitter<any> ;
  @Input() isLoggedIn: boolean = false;


  emitValue() {
    this.isLoggedIn = !this.isLoggedIn;
    this.toggleEvent.emit(this.isLoggedIn);
  }
  emitSubjectName(object:any) {
    this.toggleNameValueEvent.emit(object);        
  }
  



}
