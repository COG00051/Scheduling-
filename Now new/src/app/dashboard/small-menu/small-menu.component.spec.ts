import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMenuComponent } from './small-menu.component';

describe('SmallMenuComponent', () => {
  let component: SmallMenuComponent;
  let fixture: ComponentFixture<SmallMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
