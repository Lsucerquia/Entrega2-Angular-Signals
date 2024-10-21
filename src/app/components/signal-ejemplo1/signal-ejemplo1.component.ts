import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-signal-ejemplo1',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './signal-ejemplo1.component.html',
  styleUrl: './signal-ejemplo1.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush // on push cuando haya un cambio en el dom de una caracteristica lo detecta, intera sobre la velocidad.//
})
export class SignalEjemplo1Component {
  contador = signal<number>(0); //señal de tipo numero guardado en una variable comenzando en 0//
  contador2=0;

  incrementarContador(){
    this.contador.update(conta => conta + 1 ) //usando senal
    this.contador2 = this.contador2 + 1  // usando variables normal

  }

  decrementarContador(){
    this.contador.update(conta => conta - 1 )
    this.contador2 = this.contador2 - 1
  }

}
