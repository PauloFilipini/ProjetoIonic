import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PedidoCompletoPage } from './pedido-completo.page';

describe('PedidoCompletoPage', () => {
  let component: PedidoCompletoPage;
  let fixture: ComponentFixture<PedidoCompletoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidoCompletoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidoCompletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
