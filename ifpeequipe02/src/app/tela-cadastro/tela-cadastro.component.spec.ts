import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroComponent } from './tela-cadastro.component';

describe('TelaCadastroComponent', () => {
  let component: TelaCadastroComponent;
  let fixture: ComponentFixture<TelaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
