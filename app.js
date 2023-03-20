
const btnD =document.getElementById("btnClick");
btnD.addEventListener("click", clicked);

function clicked(){
       if(document.querySelector('#newTask input').value.length == 0){
              alert("Please add a task.");
       }
              else{
                     document.querySelector('#tasks').innerHTML += `
                     <div class="tasks">
                            <span id="taskname">
                                   ${document.querySelector("#newTask input").value}
                            </span>
                            <button class="compClick" onclick="return askq()">
                            <i class="fa-solid fa-circle-check"></i>
                            </button>
                            <button class="delClick" onclick="return ask()">
                            <i class="fa-solid fa-minus"></i>
                            </button>
                     </div>
                     `;

                   
                     
                     var completedTsk=document.querySelectorAll(".compClick"); //tum complclick butonlarının listesini olusturur(nodelist)
                     for(let j=0;j<completedTsk.length;j++){
                            completedTsk[j].onclick=function askq (){
                                   let  sty=this.parentNode.querySelector("#taskname") // burada parentNode kullanarak, tıklanan butonun ebeveyn öğesini seçiyoruz
                                   sty.style.cssText=" text-decoration:line-through; color:green;";
                                   // tıklanan butonun ebeveyn öğesini seçer ve bu öğenin altında #taskname öğesini arar.
                                   let btnsty=this.parentNode.querySelector(".compClick")
                                   btnsty.style.cssText="color:green;";
                                   this.parentNode.style.backgroundColor = "gray"; //div ogesi seçildi
                                   this.parentNode.style.border= "gray";
                            }
                         
                     }


        
                     var currentTsk=document.querySelectorAll(".delClick");
                     for(let i=0;i<currentTsk.length;i++){
                            currentTsk[i].onclick=function ask (){
                                   if(confirm("Remove task ?, Are you confirm?")){}
                                   else{ return false; }
                                   this.parentNode.remove();
                                   document.querySelector("#newTask input").focus(); //textbox ı fokuslar
                            }
                         
                     }
              }
              document.querySelector('#newTask input').value=''; //remove textbox content after clicked after button

             
       } 

       document.querySelector('#removeAlign').innerHTML = `
       <span id="rmvspan">Remove All</span>
       <button class="rmvAllbtn" id="rClck" onclick="return ask3()">
       <i class="fa-solid fa-trash"></i>
       </button>
       `;

       const rmvC =document.getElementById('rClck');
       rmvC.onclick=function clear(){
      
             var items = tasks.children;
             while (items.length > 0) {
                 items.item(0).remove();
             }
            
             document.querySelector("#newTask input").focus(); 
             document.querySelector('#newTask input').value='';
         }
