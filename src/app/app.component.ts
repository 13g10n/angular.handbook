import { Component } from '@angular/core';
declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'Saved!';

  showAlert(): void {
    UIkit.notification(this.message, {pos: 'bottom-right'});
  }
}
