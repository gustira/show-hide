import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private route: Router, private service: ServiceService) { }

  openTest(){
    this.route.navigate(["/customer"], {queryParams: {balance: 5000}})
    
  }

  test(){
    let subscription = this.service.getNumberQueue().subscribe(
      number => {
        console.log(number);
      }
    )

    setInterval(()=>{
      subscription.unsubscribe();
    }, 10000);
  }

  test2(){
    var keepGoing = true;
    let subscription = this.service.getNumberQueuee().subscribe(
      number => {
        console.log(number);
        if (number == undefined){
           console.log("kamu ganteng");
           keepGoing=false;

        }
      }
    )
    
    // if( || subscription == undefined){
    //   subscription.unsubscribe();
    // }
    // setInterval(()=>{
    //   subscription.unsubscribe();
    // }, 10000);
  }

  ngOnInit() {


  }

}
