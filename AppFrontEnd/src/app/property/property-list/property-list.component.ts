import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/models/iproperty';
import { HousingService } from 'src/services/Housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  Properties: Array<IProperty>;
  constructor(private route : ActivatedRoute, private housingService : HousingService) { }

  ngOnInit() {

    if(this.route.snapshot.url.toString()){
      this.SellRent = 2; //means we are on rent-property url
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
        this.Properties = data;

      },error =>{
        console.log(error);
      }
    );
  }
}
