import { Component, OnInit } from '@angular/core';
import { Item } from './items.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ItemsService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items
  //: Item []; 
  = [{
    name: 'Pizza',
    price: 3
  },
  {
    name: 'Salad',
    price: 2
  }];
  itemSubmitted = false;
  itemForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private itemService: ItemsService) { }

  addToCart() {
    window.alert('Added');
  }

  ngOnInit() {
    // Initiating the form with the fields and the required validators
    // this.itemForm = this.formBuilder.group({
    //   name: ['', Validators.required], // Name is required
    //   price: ['', [Validators.required, Validators.min(0)]] // Price is required and must be a positive number
    // });
    this.itemService.getItems().subscribe(items => this.items = items);

  }

   get getItemForm() {
     return this.itemForm.controls;
   }

  addNewItem() {
    this.itemSubmitted = true;

    if (!this.itemForm.invalid) {
      // this.itemService.postItems(this.itemForm.value).subscribe(response => {
      //   window.location.reload();
      // }, error => {
      //   window.alert(error.error.message);
      // });
    }
  }
}