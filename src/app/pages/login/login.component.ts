import { Component } from '@angular/core'
import { UserService } from '../../user/services/user.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // @ts-ignore
  formGroup: FormGroup = {}

  constructor(private readonly userService: UserService) {
    this.formGroup = new FormGroup({
      emailControl: new FormControl('', [Validators.required, Validators.email]),
      passwordControl: new FormControl('', [Validators.required]),
    })
  }



  onSubmit() {
    console.log(this.formGroup)
  }

}
