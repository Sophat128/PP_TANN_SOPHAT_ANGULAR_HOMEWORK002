import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isLoggedIn:boolean = false;
  courseObject: any;

  handleAuth(){
    this.isLoggedIn = !this.isLoggedIn
  }
  getSubjectInfo(object:any){
    this.courseObject = object;
    
  }


  subject_list: any[] = [ {
    subjectName: 'Angular',
    description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    thumbnail: 'angular.png', },
    {
    subjectName: 'TypeScript',
    description: `TypeScript is a strongly typed, object oriented, compiled
    language.
    TypeScript is a syntactic superset of JavaScript which adds static typing. It was designed by Anders Hejlsberg (designer of C#) at Microsoft.`,
     thumbnail: 'typescript.png',
    }, {
    subjectName: 'Kotlin',
    description: `Kotlin is a modern, trending programming language. Kotlin is easy to learn,
    especially if you already know Java (it is 100% compatible with Java).`,
    thumbnail: 'kotlin.png', },
    {
    subjectName: 'Java',
    description: `Java is a high-level, class-based, object-oriented
    programming language that is designed to
    have as few implementation dependencies as possible.`,
    thumbnail: 'java.png', },
    {
    subjectName: 'JavaScript',
    description: `JavaScript often abbreviated JS, is a programming language
    that is one of the core technologies
    of the World Wide Web, alongside HTML and CSS.`,
    thumbnail: 'javascript.png', },
    ]
}
