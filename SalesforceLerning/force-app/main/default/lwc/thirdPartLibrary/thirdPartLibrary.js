import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartjs';
import {loadScript} from 'lightning/platformResourceLoader';

export default class ThirdPartLibrary extends LightningElement {
isChartJsInitialized;

    renderedCallback(){
        if(this.isChartJsInitialized){
            return;
        }
        loadScript(this, chartJs+'/chartJs/Chart.js').then(()=>{
            console.log("chartJs loaded succesfully")
            this.isChartJsInitialized = true// load thescript only once
            this.loadCharts()
        }).catch(error=>{
            console.error(error)
        })

    }
    loadCharts(){
        window.Chart.platform.disableCSSInjection = true
 
        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas) //  will create Canvas inside div tag 
        const ctx = canvas.getContext('2d')// context variable will help us to create the chart
        this.chart = new window.Chart(ctx, this.config()) // to display the chart, config is the method to bring all the necessary data and labled for the chart
    }

    config(){
        return {
            type: 'bar', // specify the type of the chart
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black', 'White'],
                datasets: [{
                    label: '# of Votes',
                    data: [12,19,3,5,2,3,4,7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(30, 204, 148, 0.8)',
                        'rgba(130, 204, 148, 0.8)'
                       
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        }
    }

}