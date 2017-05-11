import {Component, OnInit} from '@angular/core';
import {DataService} from '../data-service.service';
import {User} from '../user';
import * as _ from "lodash";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [DataService]

})
export class UserListComponent implements OnInit {

  users: User[] = [];
  term: string = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      // data => console.log(data)
      (data) => this.users = data
    );
  }

  removeUserByIndex(index: number) {
    console.log(index);

    this.users.splice(index, 1);

    console.log(this.users)
  }

  removeUserByName(name: string){
    console.log(name);
    console.log(this.users);
    _.remove(this.users, {first_name: name});
  }

}
