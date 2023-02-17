import { Component, OnInit } from '@angular/core';
import { IActivity } from './activity';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})

export class ActivityListComponent implements OnInit {
  pageTitle = 'Les activités et restaurants proposés';
  // listFilter = 'museum';
  showImage = true;


  private _listFilter: string ='';
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log("in setter:", value);
    this.filteredActivities = this.performFilter(value);
  }

  filteredActivities: IActivity[] = []; 

  activities: IActivity[] = [
    {
    activityId: 1,
    activityName: 'museum',
    description: 'bonjour',
    imageUrl: 'assets/images/accueilImage/house.jpg',
    },
    {
    activityId: 2,
    activityName: 'flower',
    description: 'bonjour',
    imageUrl: 'assets/images/accueilImage/flower2.jpg',
    },
    {
    activityId: 3,
    activityName: 'forest',
    description: 'bonjour',
    imageUrl: 'assets/images/accueilImage/forest.jpg',
    },
    {
      activityId: 4,
      activityName: 'museum',
      description: 'bonjour',
      imageUrl: 'assets/images/accueilImage/house.jpg',
      }
  ]


  constructor() {

  }

  ngOnInit(): void {
    this.listFilter= '';
    
  }

  performFilter(filterBy: string): IActivity[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.activities.filter((activity: IActivity)=> activity.activityName.toLocaleLowerCase().includes(filterBy));
  }
}
