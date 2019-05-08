import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalTablesComponent } from './normal-tables.component';

describe('NormalTablesComponent', () => {
  let component: NormalTablesComponent;
  let fixture: ComponentFixture<NormalTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
