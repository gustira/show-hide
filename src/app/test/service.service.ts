import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  getNumberQueue(): Observable<number>{
    return new Observable(
      this.cetak
    )
  }

  cetak(observer: Subscriber<number>){
    let queue = 1;
    setInterval(()=>{
      observer.next(queue++);
    }, 1000);
  
  }

  getNumberQueuee(): Observable<number>{
    return new Observable(
      this.cetakk
    )
  }

  cetakk(observer: Subscriber<number>){

    let queue = [];
    for(let a = 0; a < 15; a++) {
      queue.push(a);
    }

    setInterval(()=>{
      console.log(`queue list : ${queue}`)

      observer.next(queue.pop())
    }, 1000);

    
  }


}
