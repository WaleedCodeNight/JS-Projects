//  set the initial value to zero
let count = 0;

//  select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// when i click the buttons (separately) the class of the button show in the console etc 
// so i create the btns for as a variables so that every click button will store in it 
// creating loop ...
// in it add a event listener (click)..
// target the click which will click and store any click in variable name is styles
// then apply the if condition for decrease button with condition....
// the else if condition for increase ...
// in last else condition for reset.....
// apply conditon for color changes when the our count in dec, inc and reset....
// in last every increment , decrement and reset we target thw actual value where we change counting 


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;   
        } 
        else if (styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        // for color change
        if (count > 0){
            value.style.color= 'green';
        }
        if (count < 0){
            value.style.color = 'red';
        } 
        if (count === 0){
            value.style.color = 'black'
        }

        // where the value change according to our if, else and if conditions
        value.textContent = count;

    });
});
