import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../interface/interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSerService {


  constructor(private _http: HttpClient) { }
  empUrl = `${environment.baseurl}/empData.json`;


  fetchproducts(): Observable<any> {
    return this._http.get(this.empUrl)
      .pipe(
        map((res: any) => {
          let empArr: Array<string> = [];
          for (const key in res) {

            empArr.push({ ...res[key], id: key })
          }
          return empArr
        })
      );
  }



  ceratepost(post: UserDetails): Observable<any> {
    return this._http.post(this.empUrl, post)
  }

  singlePostFetch(id: string): Observable<any> {
    let singleUrl = `${environment.baseurl}/empData/${id}.json`
    return this._http.get(singleUrl)

  }

  updatePost(post:any,updatedId:any):Observable<any>{
    let updateurl= `${environment.baseurl}/empData/${updatedId}.json`
    return this._http.patch(updateurl,post)
  }

  ondelete(deleteid:  string) :Observable<any>{
    let deleteurl=`${environment.baseurl}/empData/${deleteid}.json`
    return this._http.delete(deleteurl)
    
    
  }
}
