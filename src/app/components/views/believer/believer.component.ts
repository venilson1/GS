import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-believer',
  templateUrl: './believer.component.html',
  styleUrls: ['./believer.component.css']
})
export class BelieverComponent implements OnInit {

  subtitle : string = 'Geração Samuel';
  title : string = 'Projeto Believer';

  constructor() { }

  ngOnInit(): void {
  }

}
