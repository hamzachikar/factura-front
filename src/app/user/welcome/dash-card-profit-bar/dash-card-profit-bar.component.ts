import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'dash-card-profit-bar',
  templateUrl: './dash-card-profit-bar.component.html',
  styleUrls: ['./dash-card-profit-bar.component.scss']
})
export class DashCardProfitBarComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes:[{
        gridLines: {
          display: false
        }
      }],
     
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      backgroundColor:"#7D9BE0",
      hoverBackgroundColor:"#7D9BE0",
      borderColor:"#7D9BE0",
      hoverBorderColor:"#7D9BE0"
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      backgroundColor:"#CDDAF8" ,
      hoverBackgroundColor:"#CDDAF8",
      borderColor:"#CDDAF8",
      hoverBorderColor:"#CDDAF8"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }
}
