export interface ITotalDaily {
  [key: string]: ITotalDailyDetails;
}

export interface ITotalDailyDetails {
  label: string;
  quantity: number;
  unit: string;
}

export interface IIngredient {
  text: string;
  parsed: IParsedIngredient;
}

export interface IParsedIngredient {
  quantity: number;
  measure: string;
  foodMatch: string;
  food: string;
  foodId: string;
  weight: number;
  retainedWeight: number;
  nutrients: ITotalDaily;
  measureURI: string;
  status: string;
}

export interface IAnalyzerState {
  ingredients: IIngredient[];
  totalDaily: ITotalDaily;
}
