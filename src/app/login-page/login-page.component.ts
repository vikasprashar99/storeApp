import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LyTheme2, ThemeVariables } from '@alyle/ui';

const STYLES = (_theme: ThemeVariables) => ({
  container: {
    maxWidth: '320px'
  }
});
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})
export class LoginPageComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);
  val: string;
  favoriteColor = '#ff1744';
  // @desc use formcontrols and validators for form
  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(16)
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
  });

  get username() {
    return this.profileForm.get('username')!;
  }

  constructor(private router:Router,private theme: LyTheme2) { }

  ngOnInit(): void {
  }
  
//@desc  Submit buttton of form
  onSubmit(){
    sessionStorage.setItem("role",this.val)

if(this.profileForm.value.username  !="" && this.profileForm.value.password!=""){
this.router.navigate(["/dashboard"])
}

  }

}
