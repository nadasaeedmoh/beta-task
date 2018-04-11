import { Component, OnInit, Input,Output,EventEmitter, Directive } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HandelItemsService } from './handel-items.service';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})

export class CreateOrderComponent implements OnInit {
  count: number = 0;
  choosedItem : string[]=[];

 images = [
   {name: "Round office table", Url:"assets/image/office.jpg", id:"customCheck1", clickId: 1},
   {name: "Classic Sofa", Url: "assets/image/classic.jpg", id:"customCheck2", clickId: 2},
   {name: "Classic Table", Url: "assets/image/classic-table.jpg", id:"customCheck3", clickId: 3},
   {name: "relaxing chair", Url: "assets/image/relaxing-chair.png", id:"customCheck4", clickId: 4},
   {name: "classic hanging lamps", Url: "assets/image/hanging-lamps.jpg", id:"customCheck5", clickId: 5},
   {name: "Modern hanging lamps", Url: "assets/image/lamp-home.jpg", id:"customCheck6", clickId: 6},
   {name: "dining room", Url: "assets/image/dining-room.jpg", id:"customCheck7", clickId: 7},
   {name: "Square office table", Url: "assets/image/off-table.jpg", id:"customCheck8", clickId: 8},
   {name: "Modern White Chair", Url: "assets/image/chair.jpg", id:"customCheck9", clickId: 9},
   {name: "Classic White Sofa", Url: "assets/image/white-sofa.jpg", id:"customCheck10", clickId: 10},
   {name: "Modern White Sofa", Url: "assets/image/sofa.jpg", id:"customCheck11", clickId: 11},
   {name: "Modern Blue Sofa", Url: "assets/image/blue-coch.jpg", id:"customCheck12", clickId: 12}
  ];
  jsonData;
  constructor(private modalService: NgbModal, private data: HandelItemsService ) {
    
   }

  ngOnInit() {
  }


  onItemSelected(Img){
    this.choosedItem.push(Img.name);
    this.data.itemsName = this.choosedItem;
    console.log(this.choosedItem);
    this.data.itemsCount = this.data.itemsCount +1 ;
    console.log(this.data.itemsCount)
      
  }

}
