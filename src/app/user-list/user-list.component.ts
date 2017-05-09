import {Component, HostBinding, OnInit} from '@angular/core';
import {DataService} from '../data-service.service';
import {User} from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [DataService]

})
export class UserListComponent implements OnInit {

  users: User[] = [];


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      // data => console.log(data)
      (data) => this.users = data
    );
  }


}
