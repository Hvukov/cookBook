export interface Recipe {
  label: string;
  image: string;
  source: string;
  dietLabels: string;
  healthLabels: string;
  cautions: boolean;
  ingridientLines: any;
  ingridients: Ingridient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
}

export interface Ingridient {
  text: string;
  quantity: number;
  measure: string;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}
