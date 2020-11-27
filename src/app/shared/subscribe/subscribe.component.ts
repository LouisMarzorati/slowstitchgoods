import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  public form: FormGroup;
  public sent = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.form.get('email');
  }

  onSubmit(): void {

    this.sent = true;
    this.form.reset();
    // this.contactService.PostMessage(
    //   this.name.value,
    //   this.email.value,
    //   this.message.value)
    // .subscribe(response => {
    //   this.sent = true;
    //   console.log('hey there! yes ur email was sent (-: ')
    // }, error => {
    //   this.error = true;
    // })
  }

}
