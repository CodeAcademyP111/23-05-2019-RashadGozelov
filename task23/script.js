// var username=document.querySelector("#username");
// var surname=document.querySelector("#surname");

// username.addEventListener("focus",function(){
//     console.log("focus olundu")
// })
// surname.addEventListener("focus",function(){
//     console.log("focus olundu")
// })
// username.addEventListener("blur",function(){
//     if(this.value==""){
//        this.nextElementSibling.classList.remove("d-none")
//     }else{
//         this.nextElementSibling.classList.add("d-none")
//     }
// })

// username.addEventListener("keyup",function(){
//     if(this.value!=""){
//        if(this.nextElementSibling!=null){
//            this.nextElementSibling.remove();
//        }
//     }
// })

// city.addEventListener("change",function(){
//     if(this.value==2){
//         this.parentNode.nextElementSibling.classList.remove("d-none");
//     }else{
//         this.parentNode.nextElementSibling.classList.add("d-none");
//     }
// })

// var requireds=document.querySelectorAll(".required");

// for(var i=0;i<requireds.length;i++){
//     requireds[i].addEventListener("blur",function(){
//         if(this.value==""){
//             this.nextElementSibling.classList.remove("d-none")
//          }else{
//              this.nextElementSibling.classList.add("d-none")
//          }
//     })
// }

// for(var i=0;i<requireds.length;i++){
//     requireds[i].addEventListener("keyup",function(){
//         if(this.value!=""){
//            if(this.nextElementSibling!=null){
//                this.nextElementSibling.remove();
//            }
//         }
//     })
// }






/* TAPSIRIQ 23-05-2019 */
var username=document.querySelector("#username");


var requireds=document.querySelectorAll(".required");
for(var i=0;i<requireds.length;i++){
    requireds[i].addEventListener("blur",function(){
        if(this.value==""){
      var str=this.getAttribute("data-msg");
      if(this.nextElementSibling==null){
        var smal=alertText(str);
        this.parentNode.appendChild(smal);
      }
    }else{
        if(this.nextElementSibling!=null){
            this.nextElementSibling.remove();
        }
    }
    })
}

for(var i=0;i<requireds.length;i++){
    
    requireds[i].addEventListener("keyup",function(){
        var str=this.getAttribute("data-msg");
        if(this.value!=""){
            if(this.nextElementSibling!=null){
                this.nextElementSibling.remove();
            }
        }else{
        var smal=alertText(str);
        this.parentNode.appendChild(smal);
        }
    })
    
}

var city=document.querySelector("#city");
city.addEventListener("change",function(){
    
    if(this.value==2){
    this.parentNode.nextElementSibling.classList.remove("d-none");
    }else{
    this.parentNode.nextElementSibling.classList.add("d-none");
    }
})

function alertText(sr){
   var smal=document.createElement("small");
   smal.classList.add("text-danger");
   smal.innerText=sr;
   return smal;
}

var form=document.querySelector("#register");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i=0;i<requireds.length;i++){
        if(requireds[i].value==""){
            var str=requireds[i].getAttribute("data-msg");
            if(requireds[i].nextElementSibling==null){
              var smal=alertText(str);
              requireds[i].parentNode.appendChild(smal);
            }
          }else{
              if(requireds[i].nextElementSibling!=null){
                requireds[i].nextElementSibling.remove();
              }
          }
    }
})

var parol1=document.querySelector("#password1");
var parol2=document.querySelector("#password2");
if(parol1.value!=parol2.value){
    var msg1=parol2.getAttribute("data-msg1");
    if(parol2.nextElementSibling==null){
        smal=alertText(msg1);
        parol2.parentNode.appendChild(smal);
    }
}else
    if(parol2.nextElementSibling!=null){
        parol2.nextElementSibling.remove();
    
}