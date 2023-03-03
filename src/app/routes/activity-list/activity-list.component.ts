import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';
import { IActivity } from './activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit, OnDestroy {
  pageTitle = 'Les activités et restaurants proposés'; //interpolation (binding)
  // listFilter = 'museum';
  showImage = true;
  errorMessage: string = ""; 
  sub!: Subscription; //sub is a type of Subscription


  private _listFilter: string =''; //when using getter/setter syntax there is n backing variable automatically defined to actually hold the value so we need another often private variable to retain that value
  //use underscore before the variable name to indicate that it's a private variable and should not be accessed except trough the getter/setter
  get listFilter(): string { //execute when the property value is requested
    return this._listFilter;
  }

  set listFilter(value: string) { //executed when the property value is set called. the setter passes in th value to be set so no need specify a return type
    this._listFilter = value;
    console.log("in setter:", value);
    this.filteredActivities = this.performFilter(value);
  }

  filteredActivities: IActivity[] = []; 

  activities: IActivity[] = [];

  
  //je remplace mon code dur avec la constance créée dans mon interface activity.ts
  // activities = activities;


  constructor(private activityService: ActivityService) {

  }

  ngOnInit(): void {
    this.sub = this.activityService.getActivities()
    .subscribe({
      next: activities => {
        this.activities = activities;
        this.filteredActivities = this.activities;
      },
      error: err => this.errorMessage = err
    });    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  performFilter(filterBy: string): IActivity[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.activities.filter((activity: IActivity) => 
      activity.activityName.toLocaleLowerCase().includes(filterBy));
  }

  button = document.getElementById("scrollUp");


}
