import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  @Input() courseObject: any;
  @Input() subjectInfo: any[] = [];
  subjectName: string = "Angular";

  findSubjectByName() {
    this.courseObject = this.subjectInfo.find(item => item.subjectName === this.subjectName);
  }

  ngOnInit(){
    this.findSubjectByName()
  }

  



  

}
