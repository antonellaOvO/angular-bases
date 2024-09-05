import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks' /* Si no me manda nada el padre, estos valores de name y power son por defecto */,
      power: 10,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  /*onDeleteCharacter(index: number): void {
    // TODO: Emitir el ID del personaje
    console.log({ index });
    this.onDelete.emit(index);
  }*/

  /*Cuando escribes { index }, estás creando un objeto con una propiedad llamada index cuyo valor es el valor de la variable index.
  Si index tiene el valor 0, se crea un objeto { index: 0 }. */

  deleteCharacterById(id?: string): void {
    if (!id) return;
    /*console.log(id);*/ /*Para comprobar que de verdad está cogiendo el id */
    this.onDelete.emit(id);
  }
}
