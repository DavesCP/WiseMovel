import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TopbarComponent } from "../pages/topbar.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterModule, TopbarComponent]
})
export class AppComponent {
  constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.navigate(['/inicio']);
  // }
}
