import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup | any;
  imageFile: any | File;
  imageLink: any;

  constructor(
    private _formBuilder: FormBuilder,
  ) {

  }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      logo_file: new FormControl(''),
    })
  }
  submit() {
    if (this.form.valid) {
      const data: any = {
        image_file: this.imageFile
      }
      console.log(data);
    }
  }

  onImageChange(event: any) {
    if (event.target.value.length !== 0) {
      this.imageFile = event.target.files[0];
      let reader = new FileReader();
      const context = this;
      reader.readAsDataURL(this.imageFile);
      reader.onload = function () {
        context.imageLink = reader.result;
      };
      reader.onerror = function (error) { };
    }
  }
}
