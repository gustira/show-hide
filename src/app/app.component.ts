import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input()
  dataUser: any;

  isEdit:boolean;

  users = [
    {
      id: 1,
      name: 'User 1',
      address: 'Jakarta1'
    },
    {
      id: 2,
      name: 'User 2',
      address: 'Jakarta2'
    },
    {
      id: 3,
      name: 'User 3',
      address: 'Jakarta3'
    },
  ]

  editPage(us){
    this.dataUser = us;
    console.log(this.dataUser);
    this.isEdit = true;
  }

  doCancel(data){
    this.isEdit=data;
  }

  
}
