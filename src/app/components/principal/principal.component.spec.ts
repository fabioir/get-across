import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule, LayoutPipe } from '@get-across-app/shared';

import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from '../header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalComponent, HeaderComponent],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        SharedModule
      ],
      providers: [LayoutPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidenav', () => {
    const toggleButton = fixture.debugElement.query(By.css('.toggle-sidenav-button'));
    const sidenav = fixture.debugElement.query(By.css('mat-sidenav'));
    const spy = spyOn(component.getAcrossSidenav, 'toggle');

    expect((sidenav.nativeElement as HTMLElement).style.visibility).toContain('visible');

    expect(spy).toHaveBeenCalledTimes(0);

    toggleButton.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
