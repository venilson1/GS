import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-be-part-of-it',
  templateUrl: './be-part-of-it.component.html',
  styleUrls: ['./be-part-of-it.component.css']
})
export class BePartOfItComponent implements OnInit {

  subtitle : string = 'Geração Samuel';
  title : string = 'Faça Parte';

  constructor() { }

  ngOnInit(): void {
  }

}
