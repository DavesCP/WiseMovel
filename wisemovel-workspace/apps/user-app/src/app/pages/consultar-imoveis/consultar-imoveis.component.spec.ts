import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarImoveisComponent } from './consultar-imoveis.component';

describe('ConsultarImoveisComponent', () => {
  let component: ConsultarImoveisComponent;
  let fixture: ComponentFixture<ConsultarImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarImoveisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
