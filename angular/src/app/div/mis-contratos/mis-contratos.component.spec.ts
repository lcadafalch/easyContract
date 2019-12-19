import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisContratosComponent } from './mis-contratos.component';

describe('MisContratosComponent', () => {
  let component: MisContratosComponent;
  let fixture: ComponentFixture<MisContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
