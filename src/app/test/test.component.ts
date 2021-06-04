import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // tiles: Tile[] = [{text: 'One', cols: 4, rows: 1, color: 'lightblue'},
  // {text: 'Two', cols: 1, rows: 6, color: 'lightgreen'},
  // {text: 'Three', cols: 2, rows: 5, color: 'lightpink'},
  // {text: 'Four', cols: 2, rows: 5, color: '#DDBDF1'}]

  
  constructor() { }

  ngOnInit(): void {
  }

}
