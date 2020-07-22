import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('a test', 'This is a simply a test', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/08/peanut-butter-cookies-7-600x900.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
