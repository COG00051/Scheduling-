import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JvectormapComponent } from './jvectormap.component';

describe('JvectormapComponent', () => {
  let component: JvectormapComponent;
  let fixture: ComponentFixture<JvectormapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JvectormapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JvectormapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
