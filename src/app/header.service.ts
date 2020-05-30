import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  toggleSidenavSubject = new Subject();

  toggleSidenav() {
    this.toggleSidenavSubject.next();
  }

  subscribeToToggleSidenav(): Observable<any> {
    return this.toggleSidenavSubject.asObservable();
  }
}
