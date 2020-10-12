import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'dash-card-profit',
  templateUrl: './dash-card-profit.component.html',
  styleUrls: ['./dash-card-profit.component.scss']
})
export class DashCardProfitComponent implements OnInit {
  @Input() cardOption:string;
  number:number=50000;
  stats:boolean=true;
  percent:string="2.5";
  lineChartData: ChartDataSets[] = [
    { 
      data: [85, 72, 78, 75, 77, 80],
      pointBorderColor: "transparent",
      pointBackgroundColor: "transparent",
      pointHoverBackgroundColor: "#46C37B",
      pointHoverBorderColor: "#46C37B",
    },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  lineChartOptions = {
    responsive:true,
    maintainAspectRatio: true,
    aspectRatio:3.4,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        gridLines: {
          display: false
        }
      }],
      yAxes:[{
        display: false,
        gridLines: {
          display: false
        }
      }],
     
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: '#46C37B',
      backgroundColor: '#E3F6EB',

    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor() { }

  ngOnInit(): void {
      switch (this.cardOption){
        case null:{
          break;
        }
        case "":{
          break;
        }
        case "earn":{
          this.lineChartData=[
            { 
              data: [100,50,20,90, 30,50],
              pointBorderColor: "transparent",
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: "#46C37B",
              pointHoverBorderColor: "#46C37B",
            },
          ];
          this.number=340;
          this.percent=((50-30)/30).toFixed(2);
          break;
        }
        case "client":{
          this.lineChartData=[
            { 
              data: [20,5,30,10,20,3],
              pointBorderColor: "transparent",
              pointBackgroundColor: "transparent",
              pointHoverBackgroundColor: "#E9B9C0",
              pointHoverBorderColor: "#F8E9EB",
            },
          ];
          this.lineChartColors= [
            {
              borderColor: "#E9B9C0",
              backgroundColor: "#F8E9EB",
        
            },
          ];
          this.stats=false;
          this.number=1000;
          this.percent=((3-20)/20).toFixed(2);
        }
      }
  }

}
