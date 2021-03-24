import { Component, OnInit } from '@angular/core';
import { AnalyzerService } from '../service/analyzer.service';

@Component({
  selector: 'app-analyzer-shell',
  templateUrl: './analyzer-shell.component.html',
  styleUrls: ['./analyzer-shell.component.scss'],
})
export class AnalyzerShellComponent implements OnInit {
  constructor(private analyzerService: AnalyzerService) {}

  ngOnInit(): void {
   
  }
  analyzeIngr(event: string) {
    const ingrArr = event.split('\n').filter(x => x.trim().length > 0);
    this.analyzerService
    .analyze({ ingr: ingrArr })
    .subscribe((data) => {
      console.log('data', data);
    });
  }
}
