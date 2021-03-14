var wrap = document.body.querySelector(".wrap");
var list =[
  {
    name:"Bob",
    damage:2,
    health:10,
    warrior:true
  },
  {
    
    name:"Mavis",
    damage:2,
    health:10,
    warrior:true
  },
  {
    
    name:"Morty",
    damage:4,
    health:10,
    warrior:true
  }
];

for(var i=0; i<list.length; i++){
  var ele =document.createElement("div");
  var nameEle =document.createElement("h1");
  var damageEle =document.createElement("h2");
  var healthEle =document.createElement("h4");
  ele.innerHTML=list[i].name;
  damageEle.innerHTML="damage: "+list[i].damage;
  healthEle.innerHTML="health: "+list[i].health;
  ele.appendChild(nameEle);
  ele.appendChild(damageEle);
  ele.appendChild(healthEle);
  if(list[i].name==="Mavis"){
    ele.style.color="red";
  }
  wrap.appendChild(ele);
  
}