let chartArea = document.getElementById('myChart');
let dailyChartArea = document.getElementById('daily-chart');
let mobileChartArea = document.getElementById('mobile-chart');

const chartToggle = document.getElementById('traffic-id');
const chartTypeToggle = document.getElementById('chart-id');

let timingTraffic = [{
    labels: ['0-4', '5-8', '9-12', '13-17', '18-21', '22-24'],
    label: ['Hourly Site Traffic'],
    data: [13, 24, 15, 22, 17, 14, 18]
},

{
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    label: ['Daily Site Traffic'],
    data: [75, 145, 95, 132, 102, 89, 112]
},

{
    labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    label: ['Weekly Site Traffic'],
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
},

{
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    label: ['Monthly Site Traffic'],
    data: [5000, 6350, 5100, 5550, 5250, 6550, 6750, 4800, 4950, 5850, 6750, 5650]
},
];

let platformUsers = [{
    labels: ['Desktop', 'Phones', 'Tablets'],
    label: ['Platform Type Usage'],
    data: [180, 392, 50]
}]

let myChart = new Chart(chartArea, {
    type: 'line', // Types of charts: line, bar, radar, doughnut & pie, polar area, bubble, scatter
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: 'Weekly Site Traffic',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 250
            },
        legend: {
            display: false,
                
        scales: {
            xAxes: [{
                offset: false
             }],             
             yAxes: [{
                ticks: {
                    beginAtZero: true
                    }
                }]
            }
    }}
})



let dailyChart = new Chart(dailyChartArea, {
    type: 'bar', // Types of charts: line, bar, radar, doughnut & pie, polar area, bubble, scatter
    data: {
        labels: timingTraffic[1].labels,
        datasets: [{
            label: '# of hits',
            data: timingTraffic[1].data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(54, 162, 235, 0.8)',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 250
            },
        legend: {
            display: false,
                
        scales: {
            xAxes: [{
                offset: false
             }],             
             yAxes: [{
                ticks: {
                    beginAtZero: true
                    }
                }]
            }
    }}
})


let mobileChart = new Chart(mobileChartArea, {
    type: 'pie', // Types of charts: line, bar, radar, doughnut & pie, polar area, bubble, scatter
    data: {
        labels: platformUsers[0].labels,
        datasets: [{
            label: platformUsers[0].label,
            data: platformUsers[0].data,
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 206, 86, 0.8)',
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 250
            },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontSize: 35
            },
        
        scales: {
            xAxes: [{
                offset: false
             }],             
             yAxes: [{
                ticks: {
                    beginAtZero: true
                    }
                }]
            }
    }}
})


function updateChart(arr, index) {
    myChart.data.datasets[0].data = arr[index].data
    myChart.data.datasets[0].label = arr[index].label
    myChart.data.labels = arr[index].labels
    myChart.update();
}


chartToggle.addEventListener('click', (e) => {
    const pButton = e.target;
    let selectedButton = pButton.textContent
    document.querySelector('.chartSelected').classList.remove('chartSelected')
    if (pButton.textContent === selectedButton && pButton.classList != "chartSelected") {
        pButton.classList.add('chartSelected');
        if (pButton.textContent === "Hourly") {
            updateChart(timingTraffic, 0)
        } else if (pButton.textContent === "Daily") {
            updateChart(timingTraffic, 1)
        } else if (pButton.textContent === "Weekly") {
            updateChart(timingTraffic, 2)
        } else if (pButton.textContent === "Monthly") {
            updateChart(timingTraffic, 3)
        }
}
});

chartTypeToggle.addEventListener('click', (e) => {
    const pButton = e.target;
    let selectedButton = pButton.textContent
    document.querySelector('.chartTypeselected').classList.remove('chartTypeselected')
    if (pButton.textContent === selectedButton && pButton.classList != "chartTypeselected") {
        pButton.classList.add('chartTypeselected');
        if (pButton.textContent === "pie") {
            myChart.config.type = pButton.textContent
        } else if (pButton.textContent === "bar") {
            myChart.config.type = pButton.textContent
        } else if (pButton.textContent === "line") {
            myChart.config.type = pButton.textContent
        }
    myChart.update()
}
});

