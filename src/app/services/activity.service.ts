import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IActivity} from '../routes/activity-list/activity';


@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  // getActivities(): IActivity[] {
  //   return [
  //     {
  //       "activityId": 1,
  //       "activityName": "museum",
  //       "description": "bonjour",
  //       "imageUrl": "assets/images/accueilImage/house.jpg"
  //   },
  //   {
  //       "activityId": 2,
  //       "activityName": "flower",
  //       "description": "bonjour",
  //       "imageUrl": "assets/images/accueilImage/flower2.jpg"
  //   },
  //   {
  //       "activityId": 3,
  //       "activityName": "forest",
  //       "description": "bonjour",
  //       "imageUrl": "assets/images/accueilImage/forest.jpg"
  //   },
  //   {
  //       "activityId": 4,
  //       "activityName": "museum",
  //       "description": "bonjour",
  //       "imageUrl": "assets/images/accueilImage/house.jpg"
  //   }
  //   ]
  // }

  private activityUrl = "api/activities/activities.json";

  constructor(private http: HttpClient) { }

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(this.activityUrl)
      .pipe(
        tap(data => console.log("All my activities", JSON.stringify(data))),
        catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = "";

    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }

}

