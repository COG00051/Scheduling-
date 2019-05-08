import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWidgetsComponent } from './app-widgets.component';

describe('AppWidgetsComponent', () => {
  let component: AppWidgetsComponent;
  let fixture: ComponentFixture<AppWidgetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWidgetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
