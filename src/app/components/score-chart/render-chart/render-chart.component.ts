import {Component, Input} from '@angular/core';
import {ChartData} from "../chart";

@Component({
  selector: 'fam-render-chart',
  templateUrl: './render-chart.component.html',
  styleUrls: ['./render-chart.component.scss']
})
export class RenderChartComponent {
  @Input() chartData!: ChartData;
}
