import { Component } from '@angular/core';

@Component({
  selector: 'fam-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss']
})
export class ScoreChartComponent {
  charts!: any[]

  constructor() {
    this.charts = [
      {
        title: 'easy',
        color: '#00FF01',
        results: [
          {
            time: 30,
            name: 'Dmytro'
          },
          {
            time: 24,
            name: 'Test'
          },
          {
            time: 90,
            name: 'Jake'
          },
          {
            time: 30,
            name: 'Dmytro'
          },
          {
            time: 24,
            name: 'Test'
          },
          {
            time: 90,
            name: 'Jake'
          }
        ]
      },
      {
        title: 'medium',
        color: '#FFFF01',
        results: [
          {
            time: 45,
            name: 'Dmytro'
          },
          {
            time: 56,
            name: 'Test'
          },
          {
            time: 78,
            name: 'Jake'
          },
          {
            time: 120,
            name: 'Dmytro'
          },
          {
            time: 92,
            name: 'Test'
          },
          {
            time: 84,
            name: 'Jake'
          }
        ]
      },
      {
        title: 'hard',
        color: '#FA8072',
        results: [
          {
            time: 176,
            name: 'Dmytro'
          },
          {
            time: 185,
            name: 'Test'
          },
          {
            time: 142,
            name: 'Jake'
          },
          {
            time: 174,
            name: 'Dmytro'
          },
          {
            time: 250,
            name: 'Test'
          },
          {
            time: 130,
            name: 'Jake'
          }
        ]
      }
    ]
  }

}
