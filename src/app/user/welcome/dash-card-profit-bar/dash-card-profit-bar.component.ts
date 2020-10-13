import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Devis } from 'src/app/models/devis.model';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'dash-card-profit-bar',
  templateUrl: './dash-card-profit-bar.component.html',
  styleUrls: ['./dash-card-profit-bar.component.scss']
})
export class DashCardProfitBarComponent implements OnInit {
  devis:Devis[]=[];
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
        display: false,
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
  public barChartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','oct','Nov','Dec'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      label: 'Earn',
      backgroundColor:"#46C37B",
      hoverBackgroundColor:"#46C37B",
      borderColor:"#46C37B",
      hoverBorderColor:"#46C37B"
    },
    { 
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      label: 'Dept',
      backgroundColor:"#E9B9C0" ,
      hoverBackgroundColor:"#E9B9C0",
      borderColor:"#E9B9C0",
      hoverBorderColor:"#E9B9C0"
    }
  ];


  constructor(private devisService:DevisService) {
    
  }

  ngOnInit(): void {
    this.devisService.devis.subscribe(devis=>{
      this.devis=devis;
      this.setDataBarChart();
    })
  }
  setDataBarChart(){
    console.log(this.devis.length)
    let dataEarn=[0,0,0,0,0,0,0,0,0,3000,0,0];
    let dataDept=[0,0,0,0,0,0,0,0,0,0,0,0];
      for(let d of this.devis){
        if(d.status==="valide"){
          let date=new Date(d.createDate);
          dataEarn[date.getMonth()]=+d.totalTTC;
        }
        if(d.status==="en attente"){
          let date=new Date(d.createDate);
          dataDept[date.getMonth()]=+d.totalTTC;
        }
      }
      this.barChartData[0].data=dataEarn
      this.barChartData[1].data=dataDept
  }
  public randomize(): void {
   this.setDataBarChart();
  }

}
