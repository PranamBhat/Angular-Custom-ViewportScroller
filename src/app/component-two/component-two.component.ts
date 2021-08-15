import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  headers: number[];
  constructor() {
    let headers = [];
    for (let i = 0; i < 100; i++) {
      headers.push(i);
    }
    this.headers = headers;
  }

  ngOnInit() {
  }

}