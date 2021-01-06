import { Injectable } from "@angular/core";

@Injectable()
export class MyserviceService {
  constructor() {}
  serData = "";
  showDate() {
    return new Date();
  }

  getSerData() {
    return this.serData;
  }
}
