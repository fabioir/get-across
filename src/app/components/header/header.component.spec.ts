import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderService } from 'src/app/header.service';
import { HeaderComponent } from './header.component';

const toggleSidenav = jasmine.createSpy();
const mockHeaderService = {
  toggleSidenav
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule, MatToolbarModule],
      providers: [{ provide: HeaderService, useValue: mockHeaderService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidenav', () => {
    const toggleButton = fixture.debugElement.query(By.css('.toggle-sidenav-button'));

    expect(toggleSidenav).toHaveBeenCalledTimes(0);
    toggleButton.nativeElement.click();
    expect(toggleSidenav).toHaveBeenCalledTimes(1);
  });
});
