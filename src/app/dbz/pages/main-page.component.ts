import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  /*DIFERENCIA ENTRE ESTAS 2 OPCIONES DE get characters() */
  /* La diferencia entre los dos fragmentos de código radica en cómo se manipulan y se exponen los datos que provienen de this.dbzService.characters. Aunque ambos métodos devuelven un array de objetos Character, el segundo método crea una copia superficial del array original (lo clona), mientras que el primero devuelve una referencia directa al array original. */
  /*La consecuencia directa del uso de uno u de otro es que con el primero cualquier otro componente o servicio que acceda a characters y lo modifique también afectará al array original, es decir, al array del servicio en este caso */
  /*get characters(): Character[] {
    return this.dbzService.characters;
} */

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
