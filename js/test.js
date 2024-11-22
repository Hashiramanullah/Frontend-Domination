console.log(this);
let btn = document.('btn');
btn.addEventListener('click',(()=>{
    alert('helo')
}))
console.log(btn,'dfjj');

let obj = {
    name:function(){
        console.log(this,'fdkjf');
        
         const myName =()=>{
            console.log(this);
            
         }
         myName()
    }
}
obj.name()