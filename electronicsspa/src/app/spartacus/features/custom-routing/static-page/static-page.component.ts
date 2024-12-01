import { Component } from '@angular/core';

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrl: './static-page.component.scss'
})
export class StaticPageComponent {

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
}
