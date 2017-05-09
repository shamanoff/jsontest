import {Component, OnInit} from '@angular/core';
import {DataService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})
export class AppComponent implements OnInit {

  ninjas = [];
  bool = null;


  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    this.dataService.fetchData().subscribe(
      // data => console.log(data)
      (data) => this.ninjas = data
    );
  }

}
