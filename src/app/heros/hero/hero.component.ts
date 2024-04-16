import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void{
    this.name = 'Spiderman';
  }
  public changeAge():void{
    this.age = 20;
  }

  public restore():void{
    this.name = 'ironman';
    this.age = 45;
  }


}
