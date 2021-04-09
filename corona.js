
let states=document.querySelector(".box")
let searchBtn=document.getElementById("search-btn");
let selectValue=document.getElementById("select-value")


searchBtn.addEventListener("click",()=>{
    corona();
})

function corona(){

   let today=new Date(Date.now()-86400000-86400000);
   let year=today.getFullYear();
   let date=today.getDate();
   let month=today.getMonth()+1;

   console.log(today,year,date,month);

    let url=`https://api.covid19api.com/live/country/india/status/confirmed/date/${year}-${month}-${date}T13:13:30Z`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        let html="";
        console.log(data)
        if(stateName=="All" || stateName==undefined){
            html="";
            data.forEach((element,index) => {

                    html+=`
                    <div class="state-box">
                    <div class="card  mb-3 state-card ">
                    <div class="card-header ">
                    <img src="pic/museum.png" class="d-inline-block align-text-center virus-img">
                    ${element.Province}
                    </div>
                    <div class="card-body text-dark">
                    <h5><img src="pic/temperature.png" class="virus-img"> Total Cases : ${element.Confirmed} </h5>
                    <h5><img src="pic/boy.png" class="virus-img"> Active Cases : ${element.Active}</h5>
                    <h5><img src="pic/health-report.png" class="virus-img"> Total Recovered :  ${element.Recovered}</h5>
                    <h5><img src="pic/virus.png" class="virus-img"> Total Deaths : ${element.Deaths}</h5>
                    </div>
                    </div>
                    </div>
                    `        
            }); 
        }else{
            html="";
            data.forEach((element,index) => {
                if(element.Province==stateName){
                    html+=`
                    <div class="state-box">
                    <div class="card  mb-3 state-card ">
                    <div class="card-header ">
                    <img src="pic/museum.png" class="d-inline-block align-text-center virus-img">
                    ${element.Province}
                    </div>
                    <div class="card-body text-dark">
                    <h5><img src="pic/temperature.png" class="virus-img"> Total Cases : ${element.Confirmed} </h5>
                    <h5><img src="pic/boy.png" class="virus-img"> Active Cases : ${element.Active}</h5>
                    <h5><img src="pic/health-report.png" class="virus-img"> Total Recovered :  ${element.Recovered}</h5>
                    <h5><img src="pic/virus.png" class="virus-img"> Total Deaths : ${element.Deaths}</h5>
                    </div>
                    </div>
                    </div>
                    `         
                }
                
            });
        }

            
        states.innerHTML=html;
        
    })
}

corona()




// https://api.covid19api.com/world/total
// https://api.covid19api.com/live/country/india/status/confirmed/date/2021-04-04T13:13:30Z