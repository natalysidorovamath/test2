import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor() { }
  public firstName: string;
  public lastname: string;
  public phoneNumber: string;
  public isLoading= false;
  public rows: Array<{firstName: string, lastname: string, phoneNumber: string}> = [];
  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    this.buttonClicked();
  }
  buttonClicked() {
    this.rows.push( {firstName: this.firstName, lastname: this.lastname, phoneNumber: this.phoneNumber } );
    this.rows.sort((a, b) => a.firstName.localeCompare(b.firstName));
    //if you want to clear input
    this.firstName = "";
    this.lastname = "";
    this.phoneNumber = "";
  }

}
