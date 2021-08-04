import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataModelService {


  credentials:any = [
    {
        "token": "abc123",
        "userName": "Ravi",
        "userRole": "Admin",
        "userId": "Ravi_UI"
    }
]
  Users: any = [
    { "id": 1, "name": "AAA" },
    { "id": 2, "name": "AAB" },
    { "id": 3, "name": "AAC" },
    { "id": 4, "name": "AAD" },
    { "id": 5, "name": "AAE" },
    { "id": 6, "name": "AAF" },
    { "id": 7, "name": "AAG" },
    { "id": 8, "name": "AAH" },
    { "id": 9, "name": "AAI" },
    { "id": 10, "name": "AAJ" },
    { "id": 11, "name": "AAK" }
  ]

  CheckBox: any = [

    { "value": "Angular", "id": 1 },
    { "value": "java", "id": 2 },
    { "value": "AWS", "id": 3 },
    { "value": "ReactJS", "id": 4 },
    { "value": "Python", "id": 5 }
  ]

  radioButtonData: any = [
    { "value": "Men", "id": 1 },
    { "value": "Women", "id": 2 }
  ]

  tokenData() {
    return of(this.credentials)
  }

  dropDown() {
    return of(this.Users)
  }

  checkBox() {
    return of(this.CheckBox)
  }

  radioButton() {
    return of(this.radioButtonData)
  }

}
