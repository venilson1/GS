import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separation',
  templateUrl: './separation.component.html',
  styleUrls: ['./separation.component.css']
})
export class SeparationComponent implements OnInit {

  @Input() subtitle : string = '';
  @Input() title : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
