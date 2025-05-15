import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [CurrencyPipe] 
})
export class MenuComponent {
  menu = [
    {
      name: 'TRES PEDACITOS',
      description: 'Tres mini hamburguesas con jugosa carne de res, una clásica, una costeña y una azul, perfectas para compartir.',
      price: 35000,
      image: '/images/Minis.png'
    },
    {
      name: 'PEDACITO CLÁSICA',
      description: 'Jugosa carne de 150 Gr. Tocineta ahumada, queso mozarella, aro de cebolla apanado, vegetales frescos, y caramelizada Pedacito.',
      price: 25000,
      image: '/images/Doble.png'
    },
    {
      name: 'PEDACITO AMERICANA',
      description: '200 Gr. De pura carne de res, doble tocineta, extra queso cheddar, vegetales frescos. cebolla morada, pepinillos encurtidos y la salsa más deliciosa Pedacito.',
      price: 30000,
      image: '/images/Clasica.png'
    },
    {
      name: 'PEDADCITO AZUL',
      description: 'Jugosa carne de res de 200 gr. Mix de queso azul con mozarella, tocineta, tomates cherry y lechuga fresca.',
      price: 18000,
      image: '/images/Clasica.png'
    },
    {
      name: 'PEDACITO EXTRABACON',
      description: 'Mucha tocineta ahumada, carne de res de 150 gr. queso mozarella y cheddar, aros de cebolla apanados, vegetales frescos y caramelizada Pedacito.',
      price: 30000,
      image: '/images/Clasica.png'
    },
    {
      name: 'PEDACITO CRISPY',
      description: 'Doble ración de pechuga de pollo perfectamente apanada, dip de queso crema y miel, vegetales frescos y salsa de la casa. ',
      price: 28000,
      image: '/images/Crispy.png'
    },
    {
      name: 'PEDACITO COSTEÑA',
      description: 'Jugosa carne de res de 150 gr. Queso costeño asado, doble tocineta ahumada, vegetales frescos y caramelizada Pedacito',
      price: 27000,
      image: '/images/Clasica.png'
    },
    {
      name: 'PEDACITO ARGENTINA',
      description: 'Carne jugosa de res de 200 gr. Chorizo argentino, doble queso mozarella, chimichurri y vegetales frescos. ',
      price: 32000,
      image: '/images/Doble.png'
    },
    {
      name: 'DOBLE PEDAZO',
      description: '300 gr. de pura carne de res, doble tocineta ahumada, doble mix de quesos, aros de cebolla apanados, vegetales frescos y la exquisita caramelizada Pedacito. ',
      price: 36000,
      image: '/images/Doble.png'
    },
    {
      name: 'PEDACITO VEGGIE',
      description: 'Crocante proteína de lentejas y arvejas, doble queso mozarella bañado en Chipotle, vegetales frescos y caramelizada Pedacito.',
      price: 23000,
      image: '/images/Crispy.png'
    }
  ];
}


