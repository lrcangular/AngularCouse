import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrls: ['./addCharacter.component.css']
})


export class AddCharacterComponent  {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{


    if(this.character.name.length === 0 ) return;

    this.onNewCharacter.emit({...this.character});

    this.character = {name:'', power: 0};
  }

}
