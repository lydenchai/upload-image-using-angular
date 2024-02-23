import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageFile: File | any;
  imageLink: any;

  constructor() { }

  ngOnInit(): void { }

  onImageChange(event: any) {
    if (event.target.value.length !== 0) {
      this.imageFile = event.target.files[0];
      let reader = new FileReader();
      const context = this;
      reader.readAsDataURL(this.imageFile);
      reader.onload = function () {
        context.imageLink = reader.result;
      };
      reader.onerror = function (error) {
        console.log('error', error);
      };
    }
  }
}
