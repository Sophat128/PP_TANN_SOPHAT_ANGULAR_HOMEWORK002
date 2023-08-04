import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PP_TANN_SOPHAT_ANGULAR_HOMEWORK002';
  ngOnInit(): void {
    initFlowbite();
  }
}
