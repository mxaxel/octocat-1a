import { Component, OnInit } from '@angular/core';
import { mean } from '../01-mean/mean';
import { standardDeviation } from '../02-standard_devitation/standard_deviation';
import { arreglo } from '../arreglonumeros/arreglo';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  numero1A: number = 0;
  numero2A: number = 0;
  numero3A: number = 0;
  numero4A: number = 0;
  numero5A: number = 0;
  numero6A: number = 0;
  numero7A: number = 0;
  numero8A: number = 0;
  numero9A: number = 0;
  numero10A: number = 0;
  media: number = 0;
  resultnumber = 0;
  TextValueMedia = 0;

  ngOnInit(): void {
  }

  mean() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    myresult = mean(ArregloA);
    this.resultnumber = myresult;
    this.TextValueMedia = this.resultnumber;
  }

  standardDeviation() {
    let myresult = 0;
    let ArregloA: Array<number> = arreglo( this.numero1A, this.numero2A, this.numero3A, this.numero4A, this.numero5A, this.numero6A, this.numero7A, this.numero8A, this.numero9A, this.numero10A);
    myresult = standardDeviation(ArregloA);
    this.resultnumber = myresult;
    this.TextValueMedia = this.resultnumber;
  }

}
