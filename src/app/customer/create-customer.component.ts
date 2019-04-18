import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        let balance = params['balance'];
        alert(balance);
      }
    )
  }

  @Input()
  data: any;
  
  @Output()
  kirimout = new EventEmitter();
  
  kirim(){
    this.kirimout.emit(false);

 }


}
