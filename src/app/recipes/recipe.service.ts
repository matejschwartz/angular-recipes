import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Cheesecake',
      'Per Serving: 313 calories; 17.7 g fat; 35.8 g carbohydrates; 4.5 g protein; 88 mg cholesterol; 272 mg sodium.',
      'https://images.media-allrecipes.com/userphotos/560x315/5520328.jpg',
      [new Ingredient('Sugar', 120), new Ingredient('Butter', 0.25)]
    ),
    new Recipe(
      2,
      'Vanilla Cake',
      'A vanilla cake recipe that is quick, easy, and delicious!',
      'https://addapinch.com/wp-content/uploads/2017/02/best-vanilla-cake-recipe-0429-crop-copy-210x267.jpg',
      [new Ingredient('Flour', 250), new Ingredient('Baking Soda', 1), new Ingredient('Eggs', 4)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.slice().find(obj => {
      return obj.id === id;
    });
  }
}
