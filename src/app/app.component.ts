import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

// NOTE: The decorator @Component is needed in order for this to be a component
@Component({
    // NOTE: we are creating our own HTML tag named 'app-root' using selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
// styles: [`
//     h2 {
//         color: red;
//     }
// `]
})
export class AppComponent {
  name = 'Ken Hurtado';

  // NOTE: The onScroll callback will be invoked when the window is scrolled down
  onScroll = () => {
    console.log('scrolled!!');
  }
}
