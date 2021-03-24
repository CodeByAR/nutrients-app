import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnalyzeIngredients } from 'src/app/shared/interfaces/IAnalyzeIngredients';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnalyzerService {
  // baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  analyze(ingr: IAnalyzeIngredients) {
    /* Not Used since API is not returning "ingredients" */
    // let params = new HttpParams();
    // params = params.append('app_id', environment.appId);
    // params = params.append('app_key', environment.appKey);
    // const url = `${this.baseUrl}/nutrition-details`;
    // return this.http.post(url, ingr, {params: params});
    return this.http.get('../../../assets/data/nutrition-details.json');
  }
}
