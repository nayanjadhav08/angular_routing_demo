import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable()
export class HttpserviceService {
  constructor(private http: HttpClient) {}

  getServerData() {
    return this.http.get("http://localhost:8383/all");
  }

  postDataonServer(eid, name, sal) {
    let data =
      '{"id":"' + eid + '","name":"' + name + '","salary":"' + sal + '"}';
    console.log(data);
    return this.http.post("http://localhost:8383/save", data, {
      headers: new HttpHeaders({})
    });
    //    );
  }
}
