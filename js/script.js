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
                this.parentNode.remove();
            
                }
            }

        var current_tasks = document.querySelectorAll(".done");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.className = 'checked';
                
                }
            }

        // var current_tasks = document.querySelectorAll(".done");
        // for(var i=0; i<current_tasks.length; i++){
        //     current_tasks[i].onclick = function(){
        //         if (this.parentNode.className === ".close") {
        //             this.parentNode.classList.toggle('checked');
        //             this.innerHTML = "Undo";
        //           }
        //         else{
        //             this.parentNode.classList.toggle('close');
        //             this.innerHTML = "Done";
        //         }         
        //     }
        // }

    }
    
}