import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as d3 from 'd3-selection';

@Component({
    selector: 'app-restaurant-registration',
    templateUrl: './restaurant-registration.component.html',
    styleUrls: ['./restaurant-registration.component.css']
})
export class RestaurantRegistrationComponent implements OnInit {
    @ViewChild('restaurantForm', { static: true }) restaurantForm: NgForm | null = null;
    restaurantName: string = '';
    restaurantType: string ='';
    restaurantAddress: string ='';
    restaurantPhoneNumber: string ='';
    restaurantHours: string ='';

    restaurantTypes: string []=[
        'Fast Food',
        'Restaurant gastronomique',
        'Café/Bistro',
        'Pizzeria',
        'Restaurant asiatique',
        'Restaurant végétarien'
    ];

  constructor() {}

  ngOnInit() {
    d3.select(this.restaurantForm)?.style('color', 'blue');
  }

  onSubmit() {
    if (this.restaurantForm.valid) {
      console.log('Form submitted');
      console.log('Restaurant Name:', this.restaurantName);
      console.log('Restaurant Type:', this.restaurantType);
      console.log('Restaurant Address:', this.restaurantAddress);
      console.log('Restaurant Phone Number:', this.restaurantPhoneNumber);
      console.log('Restaurant Hours:', this.restaurantHours);
      // Ajouter la logique pour envoyer les données au serveur ici
    } else {
      console.log('Form is invalid');
    }
  }
}