import { Character } from './../../interfaces/character.interface';
import { Component,EventEmitter ,Input, OnInit, input,Output } from '@angular/core';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number):void{
   this.onDelete.emit(index);

  }



}
