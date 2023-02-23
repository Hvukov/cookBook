import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../config/config.service';
import { Recipe } from '../Recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = [];
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
      console.log(this.recipes);
    });
  }
}
