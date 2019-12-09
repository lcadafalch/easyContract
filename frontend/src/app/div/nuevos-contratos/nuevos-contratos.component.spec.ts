import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosContratosComponent } from './nuevos-contratos.component';

describe('NuevosContratosComponent', () => {
  let component: NuevosContratosComponent;
  let fixture: ComponentFixture<NuevosContratosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevosContratosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevosContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
