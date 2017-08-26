import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';


class Hero {
	id: string;
    name: string;
    constructor(id: string,name: string) {this.id=id;this.name=name;}
}



@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: any = [];
  name = 'anacondong size 9';
  data: any = [new Hero("1","dong"),new Hero("2","off")];
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  
    this.heroService.findAll().subscribe(response => {
      this.heroes = response.data;
    });
  }

}