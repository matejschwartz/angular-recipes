import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Cheesecake', 'Per Serving: 313 calories; 17.7 g fat; 35.8 g carbohydrates; 4.5 g protein; 88 mg cholesterol; 272 mg sodium. ', 'https://images.media-allrecipes.com/userphotos/560x315/5520328.jpg'),
    new Recipe('Chicken', 'It\'s the all-American meal. Find out how to make juicy fried chicken with a crispy golden crust every time.', 'https://images.media-allrecipes.com/userphotos/600x600/1585625.jpg')
  ];

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>()
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
