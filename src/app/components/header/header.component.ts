import { Component } from '@angular/core';
import { HeaderService } from 'src/app/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private headerService: HeaderService) {}

  toggleSidenav() {
    this.headerService.toggleSidenav();
  }
}
