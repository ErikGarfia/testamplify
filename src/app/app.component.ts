import { Component } from '@angular/core';
import MStepper from "materialize-stepper/dist/js/mstepper";
declare const MStepper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  
  async ngOnInit() {
    
    var stepper = document.querySelector('.stepper');
    var stepperInstace = new MStepper(stepper, {
       // options
       firstActive: 0, // this is the default
       linearStepsNavigation: false,
       autoFocusInput: true,
       stepTitleNavigation: true,
    })
  }
}
