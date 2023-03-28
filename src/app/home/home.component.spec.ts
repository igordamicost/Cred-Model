import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectSimulado } from '../services/creditoContratado.sevice';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let objectSimulado: ObjectSimulado;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ ObjectSimulado ] // Adicionar o serviço aos providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    const objectSimulado = TestBed.inject(ObjectSimulado); // Instanciar o serviço
    component.objectSalvo = objectSimulado; // Atribuir o serviço à propriedade objectSalvo
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display an error message if name or surname is empty', () => {
    const form = {
      value: {
        nome: '',
        sobrenome: 'Silva',
        valorTotal: 5000,
        quantidadeParcelas: 24
      }
    };
    spyOn(window, 'alert');
    component.onSubmit(form);
    expect(window.alert).toHaveBeenCalledWith('Insira seu Nome e Sobrenome');
  });

  it('should display an error message if the loan amount is less than 1000 or greater than 100000', () => {
    const form = {
      value: {
        nome: 'João',
        sobrenome: 'Silva',
        valorTotal: 500,
        quantidadeParcelas: 24
      }
    };
    spyOn(window, 'alert');
    component.onSubmit(form);
    expect(window.alert).toHaveBeenCalledWith('Emprestamos apenas entre 1000 e 100000 Reais');
  });

  it('should display an error message if the number of installments is less than 12 or greater than 48', () => {
    const form = {
      value: {
        nome: 'João',
        sobrenome: 'Silva',
        valorTotal: 5000,
        quantidadeParcelas: 5
      }
    };
    spyOn(window, 'alert');
    component.onSubmit(form);
    expect(window.alert).toHaveBeenCalledWith('Parcelas invalidas. Escolher entre 12 e 48');
  });

  it('should send simulated data to the ObjectSimulado service when simulating a loan', () => {
    const form = {
      value: {
        nome: 'João',
        sobrenome: 'Silva',
        valorTotal: 5000,
        quantidadeParcelas: 24
      }
    };
    spyOn(component.objectSalvo, 'envioObj');
    component.simularEmprestimo(form);
    expect(component.objectSalvo.envioObj).toHaveBeenCalled();
  });
});
