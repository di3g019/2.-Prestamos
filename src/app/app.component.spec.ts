import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct number of cuotas and valorCuota', () => {
    component.monto = 2500;
    component.calcularPrestamo();
    expect(component.cuotas).toBe(2);
    expect(component.valorCuota).toBeCloseTo(1400, 2); // Aproximadamente 1400 con dos decimales
  });

  it('should calculate correct values for different monto amounts', () => {
    component.monto = 6000;
    component.calcularPrestamo();
    expect(component.cuotas).toBe(3);
    expect(component.valorCuota).toBeCloseTo(8280, 2); // Aproximadamente 8280 con dos decimales

    component.monto = 800;
    component.calcularPrestamo();
    expect(component.cuotas).toBe(1);
    expect(component.valorCuota).toBeCloseTo(896, 2); // Aproximadamente 896 con dos decimales
  });
});
