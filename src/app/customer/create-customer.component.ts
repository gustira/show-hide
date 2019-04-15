import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  data: any;
  
  @Output()
  kirimout = new EventEmitter();
  
  kirim(){
    this.kirimout.emit(false);

 }


}
