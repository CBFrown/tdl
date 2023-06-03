var add = document.getElementById('submit');
var input = document.getElementById('input').value;
var li = document.createElement("li");

document.querySelector('#add').onclick = function(){
    if(document.querySelector('#input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `<li>${document.getElementById('input').value}<button class="done">Done</button><button class="delete">Delete</button></li>`;
        document.getElementById('input').value = '';

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove().fadeout;
            
                }
            }

        var current_tasks = document.querySelectorAll(".done");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.className = 'checked';
                
                }
            }

        // var current_tasks = document.querySelectorAll(".checked");
        // for(var i=0; i<current_tasks.length; i++){
        //     current_tasks[i].onclick = function(){
        //         this.parentNode.className = 'done';
                    
        //         }
        //     }

    }
    
}





















// FAILED ATTEMPT




// add.addEventListener('click', function(){

//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);




// });

// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length == 0){
//         alert("Kindly Enter Task Name!!!!")
//     }

//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i>Delete</i>
//                 </button>
//                 <button class="done">
//                     <i>Done</i>
//                 </button>
//             </div>
//         `;

//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }