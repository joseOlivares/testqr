import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigoqr',
  templateUrl: './codigoqr.component.html',
  styleUrls: ['./codigoqr.component.css']
})
export class CodigoqrComponent implements OnInit {

  item = [{
    'id': '000001',
    'email': 'joseluis_503@yahoo.com'
  }]

  qrInfo = JSON.stringify(this.item);


  constructor() {
   }

  ngOnInit(): void {
  }

}
