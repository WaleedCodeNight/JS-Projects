// select the target 
const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// for toggle btn 

toggleBtn.addEventListener("click", function(){
//    if(sidebar.classList.contains("show-sidebar")){
//     sidebar.classList.remove('show-sidebar')}
//     else{
//         sidebar.classList.add('show-sidebar')
//     }
sidebar.classList.toggle("show-sidebar");
});

// for close btn 
closeBtn.addEventListener("click", function(){
sidebar.classList.remove("show-sidebar");
});