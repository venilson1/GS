import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.responsive.css']
})
export class HeaderComponent implements OnInit {

  @Input() Subtitle : string = ``;
  @Input() Title : string = ``;

  constructor() { }

  ngOnInit(): void {
  }

}
