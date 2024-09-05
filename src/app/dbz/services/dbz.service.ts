import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() {}

  /*Cuando yo no sé de qué tipo de datos va a ser mi array, mejor no utilizar "any" (sería como utilizar js sin el tipado que ofrece ts); es mejor utilizar una interfaz*/
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    { id: uuid(), name: 'Goku', power: 9500 },
    { id: uuid(), name: 'Vegeta', power: 7500 },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    /*Esto sería lo mismo que escribir esto: {
      id: uuid(),
      name: character.name,
      power: character.power,
    }; */
    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
    /*Si escribiéramos: this.characters.splice(index), indicaríamos que borrar todo a partir de ese índice;
  }*/

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
    /*Este .filter devuelve un nuevo array que cumpla la condición que le estamos poniendo*/
  }
}
