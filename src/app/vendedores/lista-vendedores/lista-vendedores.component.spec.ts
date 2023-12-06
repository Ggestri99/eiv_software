import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVendedoresComponent } from './lista-vendedores.component';

describe('ListaVendedoresComponent', () => {
  let component: ListaVendedoresComponent;
  let fixture: ComponentFixture<ListaVendedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVendedoresComponent]
    });
    fixture = TestBed.createComponent(ListaVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
