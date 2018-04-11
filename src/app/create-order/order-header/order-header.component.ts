import { Component, OnInit,Input, OnChanges} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { HandelItemsService } from '../handel-items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css'],
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers

})
export class OrderHeaderComponent implements OnInit {

  jsonData;
Clicked:boolean = false;
constructor(private router: Router,
  config: NgbDropdownConfig,
   public data:HandelItemsService
  ) {
  // customize default values of dropdowns used by this component tree
  config.placement = 'bottom';
  config.autoClose = false;

}

ngOnChanges(){

}

  ngOnInit() {
    
  }
  
  showItems(){
   this.Clicked = true; 
  }

  onDelete(item){
    var index = this.data.itemsName.indexOf(item);
    if(index !=-1){
      this.data.itemsName.splice(index,1);
      this.data.itemsCount -=1;

    }
  }

  onOrder(){
    this.jsonData = JSON.stringify(this.data.itemsName);
    console.log(this.jsonData);
  }
}

