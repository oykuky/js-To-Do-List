

const btnD =document.getElementById("btnClick");
btnD.addEventListener("click", clicked);

function clicked(){
       if(document.querySelector('#newTask input').value.length == 0){
              alert("Lütfen görev ekleyiniz.");
       }
              else{
                     document.querySelector('#tasks').innerHTML += `
                     <div class="tasks">
                            <span id="taskname">
                                   ${document.querySelector("#newTask input").value}
                            </span>
                            <button class="del">
                            <i class="fa-solid fa-minus"></i>
                            </button>
                           
                     </div>
                     `;
                     
                     var currentTsk=document.querySelectorAll(".del");
                     for(var i=0;i<currentTsk.length;i++){
                            currentTsk[i].onclick=function(){
                                   this.parentNode.remove();
                            }

                     }
              }

              document.querySelector('#newTask input').value=''; //remove textbox content after clicked after button
       } 


