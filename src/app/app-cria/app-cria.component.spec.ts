import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCriaComponent } from './app-cria.component';

describe('AppCriaComponent', () => {
  let component: AppCriaComponent;
  let fixture: ComponentFixture<AppCriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCriaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
