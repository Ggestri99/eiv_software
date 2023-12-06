import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioVendedorComponent } from './formulario-vendedor.component';

describe('FormularioVendedorComponent', () => {
  let component: FormularioVendedorComponent;
  let fixture: ComponentFixture<FormularioVendedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioVendedorComponent]
    });
    fixture = TestBed.createComponent(FormularioVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
