import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    recipesURL = '...';

    constructor(
        private httpClient: HttpClient,
        private recipeService: RecipeService
    ) { }

    storeRecipes() {
        return this.httpClient.put(this.recipesURL, this.recipeService.getRecipes());
    }

    getRecipes() {
        this.httpClient.get<Recipe[]>(this.recipesURL, {
            observe: 'body',
            responseType: 'json',
        })
        .pipe(map(
            (recipes: Recipe[]) => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }
}
