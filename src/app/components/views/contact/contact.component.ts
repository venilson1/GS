import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  subtitle : string = 'Geração Samuel';
  title : string = 'Contato';

  constructor() { }

  ngOnInit(): void {
  }

}
