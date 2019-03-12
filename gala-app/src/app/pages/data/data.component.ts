import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app-service.service';
import { User } from '../../interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['name', 'value', 'message'];
  getUserSub: Subscription;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getUserSub = this.appService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  ngOnDestroy() {
    this.getUserSub.unsubscribe();
  }
}
