var cryptoObj = {};
async function getCrypto() {
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
    try {
        let res = await fetch(url);
        cryptoObj =await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

//THESE DATASETS WILL RUN WHEN SWITCH MODE IS CLICKED AT LEAST ONCE
function changeMode() {
    var btn = document.getElementById('modeBtn');
    if(modeBtn.className == 'lightMode btn effect01'){
        document.getElementById('chartLink').href='css/darkMode.css';
        document.getElementById('btnStyles').href='css/darkButtonStyles.css';
        modeBtn.className = 'darkMode btn effect01';
        config = {
            type: 'doughnut',
            data: {
                labels: [ 
                ],
                datasets: [{
                    label: 'My Crypto Portfolio (In USD)',
                    data: [],
                    backgroundColor: [colorOne,colorTwo,colorSeven,colorThree,colorFour,colorFive,colorSix,colorEight],
                    pointBackgroundColor: 'white',
                    borderWidth: 4,
                    borderColor: '#7d070a',
                }]
            },
            options: {
                responsive: true,
            maintainAspectRatio: true,
            animation: {
                easing: 'easeInOutQuad',
                duration: 250
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.05)',
                        lineWidth: 30
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: 'rgba(200, 200, 200, 0.08)',
                        lineWidth: 30
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.4
                }
            },
            legend: {
                display: false
            },
            point: {
                backgroundColor: 'white'
            },
            tooltips: {
                titleFontFamily: 'Open Sans',
                backgroundColor: 'rgba(0,0,0,0.3)',
                titleFontColor: 'red',
                caretSize: 5,
                cornerRadius: 2,
                xPadding: 1000,
                yPadding: 1000
            }
            }
          };
          document.getElementById('graphType').value='doughnut';
          change('line');
          change('doughnut');
         
      
    }
    else{
        document.getElementById('chartLink').href='css/lightMode.css';
        document.getElementById('btnStyles').href='css/btnStyle.css';
        modeBtn.className = 'lightMode btn effect01';
        config = {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    label: 'My Crypto Tracker',
                    data: [],
                    color:'white',
                     
                    backgroundColor: [
                    '#3BA9B2',
                    '#FF5733',
                    '#C70039',
                    '#900C3F',
                    '#DAF7A6',
                    '#FFC300',
                    '#581845',
                    '#3B5CB2',
                
                    ],
                hoverOffset:6
                }]
            },
            options: {
                
                borderWidth:5,
                tickWidth:20,
                responsive: true,
                scales: {
                    x: {
                        grid: {
                        color: 'white',
                        borderColor: 'white',
                        tickColor: 'white'
                        }
                    },
                    y: {
                        grid: {
                        color: 'white',
                        borderColor: 'white',
                        tickColor: 'white'
                        },
                        beginAtZero: true
                    }
                }
            }
        }
    }
    document.getElementById('graphType').value='doughnut';
    change('line');
    change('doughnut');
}








function changeSpanText() {
    let btn = document.getElementById('modeBtn');
    let span = document.getElementById('modeBtnText');
    if(btn.className == 'darkMode btn effect01') {
        span.innerHTML = 'Activate Dark Mode';
    }
    else {
        span.innerHTML = 'Activate Light Mode';
    }
}











//DATASET ONE FOR GRAPH (THIS IS THE DATASET THAT INITIALIZES THE GRAPH)
var ctx = document.getElementById('myChart').getContext('2d'),
gradient = ctx.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');;
//color 1
var ctx = document.getElementById('myChart').getContext('2d'),
colorOne = ctx.createLinearGradient(0, 0, 0, 450);

colorOne.addColorStop(0, 'rgba(255, 0,0, 0.5)');
colorOne.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
colorOne.addColorStop(1, 'rgba(255, 0, 0, 0)');;
//color 2
ctx = document.getElementById('myChart').getContext('2d'),
colorTwo = ctx.createLinearGradient(0, 0, 0, 450);

colorTwo.addColorStop(0, 'rgba(255, 255,255, 0.65)');
colorTwo.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)');
colorTwo.addColorStop(1, 'rgba(255, 255, 255, 0.15)');;
//color3
ctx = document.getElementById('myChart').getContext('2d'),
colorThree = ctx.createLinearGradient(0, 0, 0, 450);

colorThree.addColorStop(0, 'rgba(133, 65, 75, 0.65)');
colorThree.addColorStop(0.5, 'rgba(133, 65, 75, 0.4)');
colorThree.addColorStop(1, 'rgba(133, 65, 75, 0.15)');;
//color4
ctx = document.getElementById('myChart').getContext('2d'),
colorFour = ctx.createLinearGradient(0, 0, 0, 450);

colorFour.addColorStop(0, 'rgba(64, 27, 33, 0.65)');
colorFour.addColorStop(0.5, 'rgba(64, 27, 33, 0.4)');
colorFour.addColorStop(1, 'rgba(64, 27, 33, 0.15)');;
//color5
ctx = document.getElementById('myChart').getContext('2d'),
colorFive = ctx.createLinearGradient(0, 0, 0, 450);

colorFive.addColorStop(0, 'rgba(149, 20, 204, 0.65)');
colorFive.addColorStop(0.5, 'rgba(149, 20, 204, 0.4)');
colorFive.addColorStop(1, 'rgba(149, 20, 204, 0.15)');;
//color6
ctx = document.getElementById('myChart').getContext('2d'),
colorSix = ctx.createLinearGradient(0, 0, 0, 450);

colorSix.addColorStop(0, 'rgba(73, 0, 105, 0.65)');
colorSix.addColorStop(0.5, 'rgba(73, 0, 105, 0.4)');
colorSix.addColorStop(1, 'rgba(73, 0, 105, 0.15)');;
//color7
ctx = document.getElementById('myChart').getContext('2d'),
colorSeven = ctx.createLinearGradient(0, 0, 0, 450);

colorSeven.addColorStop(0, 'rgba(5, 0, 105, 0.65)');
colorSeven.addColorStop(0.5, 'rgba(5, 0, 105, 0.4)');
colorSeven.addColorStop(1, 'rgba(5, 0, 105, 0.15)');;
//color8
ctx = document.getElementById('myChart').getContext('2d'),
colorEight = ctx.createLinearGradient(0, 0, 0, 450);

colorEight.addColorStop(0, 'rgba(11, 0, 222, 0.65)');
colorEight.addColorStop(0.5, 'rgba(11, 0, 222, 0.4)');
colorEight.addColorStop(1, 'rgba(11, 0, 222, 0.15)');;

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [ 
        ],
        datasets: [{
            label: 'My Crypto Portfolio (In USD)',
            data: [],
            backgroundColor: [colorOne,colorTwo,colorSeven,colorThree,colorFour,colorFive,colorSix,colorEight],
            pointBackgroundColor: 'white',
            borderWidth: 4,
			borderColor: '#7d070a',
        }]
    },
    options: {
        responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 250
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 30
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 30
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 1000,
		yPadding: 1000
	}
    }
  });
//DATASET THAT WILL RUN WHEN SELECT GRAPH IS SWITCHED IN DARK MODE
var config = {
    type: 'doughnut',
    data: {
        labels: [ 
        ],
        datasets: [{
            label: 'My Crypto Portfolio (In USD)',
            data: [],
            backgroundColor: [colorOne,colorTwo,colorSeven,colorThree,colorFour,colorFive,colorSix,colorEight],
            pointBackgroundColor: 'white',
            borderWidth: 4,
			borderColor: '#7d070a',
        }]
    },
    options: {
        responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 250
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.05)',
				lineWidth: 30
			}
		}],
		yAxes: [{
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 30
			}
		}]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 1000,
		yPadding: 1000
	}
    }
  };
  

  
  document.getElementById('graphType').addEventListener('change', function() {
    change(this.value);
  });

  function change(newType) {
    var ctx = document.getElementById("myChart").getContext("2d");
  
    // Remove the old chart and all its event handles
    if (myChart) {
      myChart.destroy();
    }
  
    // Chart.js modifies the object you pass in. Pass a copy of the object so we can use the original object later
    var temp = jQuery.extend(true, {}, config);
    temp.type = newType;
    myChart = new Chart(ctx, temp);
  };


//INITIALIZES LOCALSTORAGE DATA IN GRAPH ON PAGE LOAD
for(var x=0; x< localStorage.length;x++){
    myChart.data.labels.push(JSON.parse(localStorage.getItem(localStorage.key(x))).id);
    myChart.data.datasets[0].data.push(JSON.parse(localStorage.getItem(localStorage.key(x))).total);
    
}
myChart.update();
//END OF INITIALIZATION


async function renderCrypto() {
    let crypto = await getCrypto();
   
//THIS IS WHERE I CREATE THE SELECT TAG WITH ALL THE TOP 100 COINS FOR THE USER TO SELECT FROM API
    let selectTag = '<input list="cryptoCoins" name="cryptoCoins" id="cryptoCoin"> <datalist id="cryptoCoins">';
    Object.values(crypto).forEach(val => {
        selectTag += '<option value="'+ val.symbol+' ">'
      });
    selectTag +='</datalist>';        
    let selectDiv = document.querySelector('.selectDiv');
    selectDiv.innerHTML= selectTag;
    return crypto;
//END OF SELECT TAG
}

function reset() {
    localStorage.clear();
    document.getElementById('usdCash').innerHTML ='';
    document.getElementById('btcCash').innerHTML ='';
    document.getElementById('arsCash').innerHTML ='';
}
//UPDATERIGHTPANEL FUNCTION START----------------------

//-------------------------------------------------------
function emptyCoinSelect() {
    document.getElementById('cryptoCoin').value = '';
}

function emptyAmountSelect(){
    document.getElementById('amount').value = '';
}

//-------------------------------------------------------

async function updateRightPanel() {
    
    let crypto = await getCrypto();
    let btcPrice = crypto[0].current_price;
    var usdCash=0,btcCash=0,arsCash = 0;
    for(var x=0; x< localStorage.length;x++){
        usdCash += JSON.parse(localStorage.getItem(localStorage.key(x))).total;
    }
    document.getElementById('usdCash').innerHTML ='$'+usdCash.toFixed(2);
    document.getElementById('btcCash').innerHTML =(usdCash/btcPrice).toFixed(3)+ ' BTC';
    document.getElementById('arsCash').innerHTML ='$'+((usdCash/btcPrice)* 5327323.793).toFixed(2);


}


//UPDATERIGHTPANEL FUNCTION START----------------------

//START OF UPDATEGRAPH()-------------------------------
function updateGraph() {
  
    var data = [];
    var label=[];
    

    for(var x=0; x< localStorage.length;x++){
        label.push(JSON.parse(localStorage.getItem(localStorage.key(x))).id);
        data.push(JSON.parse(localStorage.getItem(localStorage.key(x))).total);  
        usdCash += JSON.parse(localStorage.getItem(localStorage.key(x))).total;
    }

    myChart.data.datasets[0].data = data;
    myChart.data.labels = label;
    myChart.update();

}
//END OF UPDATEGRAPH()-----------------------------------


function addToPortfolio() {
     var selectedCoin = document.getElementById('cryptoCoin').value.trim();
     var selectedAmount = document.getElementById('amount').value;

     
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false") //1
  .then((response) => response.json()) //2

  .then((coins) => {
    for(var x=0;x<coins.length;x++){
 
        if(coins[x].symbol == selectedCoin){
            var newobj = {
                id:selectedCoin,
                total:selectedAmount*coins[x].current_price ,
               
            }
            if (localStorage.getItem(selectedCoin) === null) {
                console.log('did not exist, new item added')
                newobj = JSON.stringify(newobj);
                localStorage.setItem(selectedCoin,newobj)
              }
              else {
                  console.log('Item already existed, Item updated');
                  var storedItem =JSON.parse(localStorage.getItem(selectedCoin));
                  storedItem.total += newobj.total;

                  console.log(storedItem);
                  console.log(newobj.total);
                  localStorage.setItem(selectedCoin,JSON.stringify(storedItem));


              }
           
        }
   }
  });

  
}
function subtractFromPortfolio() {
     var selectedCoin = document.getElementById('cryptoCoin').value.trim();
     var selectedAmount = document.getElementById('amount').value;

     
fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false") //1
  .then((response) => response.json()) //2

  .then((coins) => {
    for(var x=0;x<coins.length;x++){
 
        if(coins[x].symbol == selectedCoin){
            var newobj = {
                id:selectedCoin,
                total:selectedAmount*coins[x].current_price ,
               
            }
            if (localStorage.getItem(selectedCoin) === null) {
                console.log('You dont own any of that coin')
              }
              else if( (localStorage.getItem(selectedCoin)!== null) && JSON.parse(localStorage.getItem(selectedCoin)).total>selectedAmount) {
                  console.log('Item already existed, Item updated');
                  let storedItem =JSON.parse(localStorage.getItem(selectedCoin));
                  storedItem.total -= newobj.total;
                  if(storedItem.total <=0){
                    console.log('Item removed')
                    localStorage.removeItem(selectedCoin);
                  }
                  else {
                  localStorage.setItem(selectedCoin,JSON.stringify(storedItem));
                  }
              }
              
           
        }
   }
  });

  
}
renderCrypto();


var intervalId = window.setInterval(updateGraph, 100);

