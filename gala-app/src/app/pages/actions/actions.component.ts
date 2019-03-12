import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { AppService } from '../../services/app-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl(0, Validators.required),
    message: new FormControl('', Validators.required),
  });
  creatUserSub: Subscription;
  showSavedText: boolean;
  constructor(private appService: AppService) {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = {
        name: this.userForm.value.name,
        value: this.userForm.value.value,
        message: this.userForm.value.message,
      };

      this.creatUserSub = this.appService.creatUser(user).subscribe(res => {
        this.showSavedText = true;
        this.startSavedCountdown();
      });
    }
  }

  startSavedCountdown() {
    setTimeout(() => {
      this.showSavedText = false;
    }, 3000);
  }

  ngOnDestroy() {
    this.creatUserSub.unsubscribe();
  }
}
