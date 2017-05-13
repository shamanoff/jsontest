import {Component, OnInit} from '@angular/core';
import {DataService} from '../data-service.service';
import {User} from '../user';
import * as _ from 'lodash';
import {slideTrigger} from '../slideTrigger';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [DataService],
  animations: [
    slideTrigger
  ]

})
export class UserListComponent implements OnInit {

  isOpen = true;
  addedUser: newUser;
  users: User[] = [];
  // reUsers: User[] = [];
  term = '';

  constructor(private dataService: DataService

  ) {
    this.addedUser = new newUser();
  }

  ngOnInit() {
    this.dataService.fetchData().subscribe(
      // data => console.log(data)
      (data) => this.users = data
    );


  }

/*  removeUserByIndex(index: number) {
    console.log(index);

    this.users.splice(index, 1);

    console.log(this.users);
  }*/

  removeUserByName(name: string) {
    console.log(name);
    _.remove(this.users, {first_name: name});
  }


  sortBy(prop: string) {
    if (prop !== '0') {
      this.users = _.sortBy(this.users, prop);

    } else {
      this.dataService.fetchData().subscribe(
        (data) => this.users = data
      );
    }
  }

  addUser() {
    if (this.addedUser) {
      const entry = {
        'id': this.addedUser.id,
        'first_name': this.addedUser.first_name,
        'last_name': this.addedUser.last_name,
        'job': this.addedUser.job,
        'email': this.addedUser.email,
        'phone': this.addedUser.phone,
        'userpic': this.addedUser.userpic
      };
      this.users.push(entry);

      this.addedUser.first_name = '';
      this.addedUser.last_name = '';
      this.addedUser.job = '';
      this.addedUser.email = '';
      this.addedUser.phone = '';
      this.addedUser.userpic = '';
    }
  }

  onOpen(){
    this.isOpen = false;
    console.log(this.isOpen);
  }

  onClose(){
    this.isOpen = true;
    console.log(this.isOpen);
  }
}

class newUser {
  id?: number;
  first_name?: string;
  last_name?: string;
  job?: string;
  email?: string;
  phone?: string;
  userpic?: string;
}
