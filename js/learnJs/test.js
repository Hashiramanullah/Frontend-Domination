// console.log('hello');
// const obj = {
//     name:function(){
//         console.log(this);
        
//         const myName = ()=>{
//             console.log(this);
            
//         }
//         myName
//     },
//     age:'hloeo',
// }
// obj.name()

// // acha agr ap es6 use karty ho na to ap method ka andar apny this ki value ko check karo ga to ap
// // ko this ki value ak obj mili gi jo ka ap ka hi ob ho ga 


// const obj2 = {
//     userName:function(){
//         function checkName()
//         {
//             console.log(this);
            
//         }
//         checkName()
//     }
// }

// obj2.userName()

// aur yehi kam agr ap es5 ma karty ho to this ki value ap ko ak window mily gi 


// call apply,bind,

// ye teeen tareeka ha func ko call karne ke kisi object
// ko this mann kar 


// call history
// var obj = {
//     name:'hshir'
// }

// function meraNA(){
//     console.log(this);
    
// }
// meraNA.call(obj)
// agr call ka use is lia hota ha ka agr ap na this ki value jo ha wo window ni rakhny apni marzi ki bhjni
// ha to app call ka use karty ho callak func ha ap call ka andar jo b object dall do ga wo ap ka function ma access ho 
// jay ga

// apply,history

// var obj1 = {
//     name:'fm'
// }
// const yehApply = (a,b,c)=>{
//     console.log(this,a,b,c);
    
// }
// function yehApply(a,b,c){
//     console.log(this,a,b,c);

// }
// yehApply.apply(obj1,[1,3,6])

// apply is lia use hota ha ka jo agr ap this value ka ilawa kch aur parameter ma bhjna chahty ho to app apply
// ka use karo ga apply apny argument ma ak array ma kch chezy leta ha phir func ka parameter ma accesss ho jaty ha


// bind , histroy \


// var obj = {name1:'hashir'
//     ,age:23}
// function bindKaro()
// {
// console.log(this);

// }
// const badmaChalaLena = bindKaro.bind(obj)
// badmaChalaLena()

// bind yeh karta ha ka jo ap na this ki value decide karny ho wo ap jesy call ma add 
// karty thy ab ap wo bind ma kar do bind ap ko direct value ni de ga bind method ap ko
// ak function deta ha jis ko a ap ak variable ma store karty ho phir ap us ko badd ma chalaty ho 



// 11))) prototypal inheritance

//  hum objects create karte hai and kisi parent constructor function ke prototpe mein kch add kar dety hai and
//  jab b add hota ha to wo parent se banny waly sabhi children instances ko wo properties jo parent ko 
//  prototpe mein di gyi thy wo milti hai sugaat mein.

// function makeHuman(name,age){
//     this.name = name,
//     this.age=age
// }

// makeHuman.prototype.printNAme = function(){
//     console.log(this.name);
    
// };

// const human1 = new makeHuman('hashir',34);
// const human2 = new makeHuman('hahsi',134);



// console.log(h    );

// aisa koi b function jisme app kisi b trha this ka use karo aur function call karny se pehly 
// new keyword ka use kary to , yeh ak construtor func ban jata ha 
// ab jab b ap func call karty waqt new ka use karty ho to new ap ko ak {blank-object}provide 
// karta ha aur jha jha ap na function ka andar this ka use kia ho wha pa this ki value blank-object ho jaty 
// ha 
// prtotypal inheritance usi ko kehty ha matlab jo apny children ko kch value de jesa ka ham na function dia 
// ha human 1 aur huma2 ko jo ka dono ma accessable ha 


//12))))))))))) closures
// ek asa function jo return kare apny andar koi dosra func , aur use kary apny parent func ka 
// variable ko , yeh sara seen agr create ho rha ho to is ko ham kahty ha closures

// function abcd(){
//     let x =12 ;
//     return function(){
//         x++;
//         console.log(x);
        
//     }
// }
// const ans = abcd();

// ab hota kch asa ha ka jab ap abcd func ko call karty ho aur wo function chalta ha memory se remove b ho jata 
// ha lekin ab usy function ka andar abcd func ka variable ka use kia gya ha to interprator yeh check pehly
// hi kar leta ha agr to func ma kahi parent func ka variable ka use ho rha ha to wo un variable ko 
// pehly hi side ma rakh leta ha aur badd ma use kar leta jab us ko zarrorat ho

// 133)))))))))
// event delegation = jab app event listener se kai sare different elements ke events ko handel kar sake
// evenet listener ko parent par lgao and unki id,classs ya phir tag ke basis par diffenentiate karke
// different task karo

// const pr = document.querySelector('#parent');
// console.log(pr);

// pr.addEventListener("click",function(){
//     console.log('work');
    
// })

// acha ab yeh jo ma ne kia ha na ma ne select parent ko kia ha lekin ma parent ka children ko 
// click kar rha ho jo ka children ma ne select hi ni kia to phir b mera event chal rha ha is ko 
// event bubbling kehty ha 
// 


// Event Delegation aur Event Bubbling donon JavaScript ma DOM events handle karne ke concepts hain. Yahan dono ka farq to the point:

// 1. Event Delegation:
// Iska matlab hai ke ek parent element pe event listener lagana, taake uske child elements ke events ko handle kiya ja sake.
// Yeh efficient hai, kyunki har child element ke liye alag listener lagane ki zarurat nahi hoti.
// Kaam karta hai event bubbling ki wajah se.
// 2. Event Bubbling:
// Yeh ek mechanism hai jisme event sabse pehle target element pe trigger hota hai, aur phir parent elements tak bubble karta hai.
// Sequence: Target → Parent → Grandparent → ... (Root)
// Example for Clarity:
// Event Delegation:

// javascript
// Copy code
// document.getElementById('parent').addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         console.log('Button clicked:', event.target.textContent);
//     }
// });
// Sirf parent pe listener laga, magar child buttons ka click handle ho raha hai.
// Event Bubbling:

// javascript
// Copy code
// document.querySelector('button').addEventListener('click', () => {
//     console.log('Button clicked!');
// });
// Button pe click hone ke baad event bubble karta hai aur parent listeners tak ja sakta hai.
// Summary:

// Event Delegation: Parent ke through child events ko handle karte hain.
// Event Bubbling: Event target se root tak propagate karta hai.

let play = document.querySelector('#parent');
let plybtn = document.querySelector("#play")
console.log(plybtn.textContent);
play.addEventListener("click",function(dets){
    console.log(dets);
    
    let ply = dets.target.id == "play";
    console.log(ply);
    
     if(play){
               plybtn.textContent = 'playing SOng ..'
     }
      setTimeout(()=>{
                  plybtn.textContent = 'play'
      },2000)
})
