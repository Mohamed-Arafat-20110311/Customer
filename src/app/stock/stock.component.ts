import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../model/User';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  users: User[] = [];
  tempUsers: User[] = [];
  cacheUsers: User[] = [];
  countries: String[] = [];
  cacheCountries: String[] = [];
  selectedCountry: string = '';
  selectedStatus: string = '';
  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getStock().subscribe(
      (response) => {
        this.users = response;
        console.log(this.users);
        for (var i in response) {
          if(this.countries.indexOf(response[i].country) === -1){
            this.countries.push(response[i].country);
          }          
        }
        this.cacheCountries = this.countries;
        this.cacheUsers = response;
      }
    );
  }
  valueSelectedCountry(e: any) {
    this.users = this.cacheUsers;
    if (e.target.value === '0') {
      this.users = this.cacheUsers;
    } else if (e.target.value) {
      this.users = this.users.filter(
        item => item.country === e.target.value
      );
    }
    if(this.selectedStatus.length > 1){
      this.users = this.users.filter( item => String(item.validity) === this.selectedStatus);
    }
    this.countries = this.cacheCountries;
  }

  valueSelectedStatus(e: any){
    this.users = this.cacheUsers;
    if (e.target.value != '0') {
      this.users = this.users.filter(
        item => String(item.validity) == String(e.target.value)
      );
    }else{
      this.users = this.cacheUsers;
    }
    if(this.selectedCountry.length > 1){
      this.users = this.users.filter( item => item.country === this.selectedCountry);
    }
  }
}
