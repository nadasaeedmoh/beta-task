import { Injectable } from '@angular/core';

@Injectable()
export class HandelItemsService {
  itemsCount:number=0;
  itemNum:number;
  itemsName = [];
  itemselect:false
  constructor() { 
  }

  addOne(){
    this.itemsCount +=1;
  }

}
