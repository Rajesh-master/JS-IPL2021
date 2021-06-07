
//function griding(id){
//    var team=document.getElementById("team-info");
//    var head= document.createElement("h1");
//    head.innerHTML=id;
//    team.appendChild(head);
//}
//for( var pos=0 ; pos<api.length; pos++){
//    griding( api[pos].fullName);
//    
//}
//
var file =document.getElementById("Form")
file.onsubmit= function(e){
    e.preventDefault();
}

var logoapi=[{"name":"Chennai Super Kings","logo":"https://dennisdoescricket.com/wp-content/uploads/2018/04/ipl-chennai-super-kings-logo-E534CFAF4A-seeklogo.com_.png","id":0,"url":"csk.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Royal Challengers Bangalore","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png","id":1,"url":"rcb.html"},
{"name":"Kolkata knight Riders","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/1200px-Kolkata_Knight_Riders_Logo.svg.png","id":2,"url":"kkr.html"},
{"name":"Punjab Kings","logo":"https://www.punjabkingsipl.in/static-assets/images/cssimages/logo.png","id":3,"url":"kx11p.html","color":"linear-gradient( to left,pink,white, skyblue);"},
{"name":"Delhi Capitals","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Delhi_Capitals_Logo.svg/1200px-Delhi_Capitals_Logo.svg.png","id":4,"url":"dc.html"},
{"name":"Sun Rises Hydrabad","logo":"https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sunrisers_Hyderabad.svg/1200px-Sunrisers_Hyderabad.svg.png","id":5,"url":"srh.html"},
{"name":"Rojasthan Royals","logo":"https://www.blenheimchalcot.com/wp-content/uploads/2018/07/rrlogo_with_whiteborder-1.png","id":6,"url":"rr.html"},
{"name":"Mumbai Indians","logo":"https://wtspdp.com/wp-content/uploads/2021/04/ipl-2021-3.png","id":7,"url":"mi.html"}
]


function teaming(logosrc,name,logoid,url,color){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogo.id="dot"+logoid
    teamlogoimg.className="teamimg"
    teamlogoimg.src=logosrc
    teamlogoimg.alt=logoid
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name"
    teamName.innerHTML=name.toUpperCase()
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    teamlogo.onclick=function(){
        window.location.href = url;
    };

    


    var home=document.getElementById("home");
    home.appendChild(teamlogo)

}
for (var pos=0;pos<logoapi.length;pos++){
    teaming(logoapi[pos].logo,logoapi[pos].name,logoapi[pos].id,logoapi[pos].url,logoapi[pos].color)
}


function buttonclick(){
 var Input=document.getElementById("inputName")
 var Input2=document.getElementById("inputName2")
 var InputValue=Input.value
 var InputValue2=Input2.value
 var obj={Name:InputValue,Url:InputValue2}
 var objList=localStorage.getItem("data")===null ? [] :JSON.parse(localStorage.getItem("data"))
                        
                            
 objList.push(obj);
 localStorage.setItem("data",JSON.stringify(objList));
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogoimg.className="teamimg"
    teamlogoimg.src=obj.Url
    teamlogoimg.alt="44"
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name-1"
    teamName.innerHTML=obj.Name
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    

    


    var Yourteam=document.getElementById("yourteam");
    Yourteam.appendChild(teamlogo);
    window.location.href = "index.html";
    console.log(JSON.parse(localStorage.getItem("data")));
    

}
localFile=JSON.parse(localStorage.getItem("data"));
console.log(localFile.Name)
for(i=0;i<localFile.length;i++){
    var teamlogo=document.createElement("div");
    var teamlogoimg=document.createElement("img");
    teamlogo.className="team-info"
    teamlogoimg.className="teamimg"
    teamlogoimg.src=localFile[i].Url
    teamlogoimg.alt="44"
    
    
    var teamName=document.createElement("h3");
    teamName.id="team-name-1"
    teamName.innerHTML=localFile[i].Name
    teamlogo.appendChild(teamlogoimg);
    teamlogo.appendChild(teamName)
    

    


    var Yourteam=document.getElementById("yourteam");
    Yourteam.appendChild(teamlogo);
    console.log(JSON.parse(localStorage.getItem("data")));
    

}



