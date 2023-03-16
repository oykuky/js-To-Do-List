

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
                            <button class="delClick" onclick="return ask()">
                            <i class="fa-solid fa-minus"></i>
                            </button>
                           
                     </div>
                     `;
                     
                     var currentTsk=document.querySelectorAll(".delClick");
                     for(var i=0;i<currentTsk.length;i++){
                            currentTsk[i].onclick=function ask (){
                                   if(confirm("Task add to completed list ?, Are you confirm?")){}
                                   else{ return false; }
                                   this.parentNode.remove();
                                   document.querySelector('#completed-task').innerHTML += `
                                   <div id="completed-tasks">
  
                                          <span id="ctaskname">
                                                 ${document.querySelector('#ctaskname input').value}
                                          </span>
                                          

                                   </div>
                                   `;
                            }
                            
                            
                                  
                            
                     }
                    
              }

              document.querySelector('#newTask input').value=''; //remove textbox content after clicked after button
       } 






       // const btnDel=document.getElementById("delClick");
       // btnDel.addEventListener("click", delclicked);
       // function delclicked(){
       //        document.querySelector('#completed-task').innerHTML += `
       //               <div id="completed-tasks">

       //                      <span id="taskname">
       //                             ${document.querySelector('#newTask input').value}
       //                      </span>
       //                      <button class="delClick" onclick="return ask()">
       //                      <i class="fa-solid fa-minus"></i>
       //                      </button>

       //               </div>
       //               `;
       // }