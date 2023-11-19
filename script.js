//variable to store all 5 panels
//All is needed because we have more than 1 div with
//class 'panel', and in that case only the first div
//will be selected.
//Now all 5 divs are selected within a node list 
//similar to array.
const panels = document.querySelectorAll('.panel')

//looping through a nodelist
//foreach => high order array method
panels.forEach(panel => { //arrow function
    //add event listeners to each .panel class
    //activate each click with an arrow function:
    panel.addEventListener('click', () => { //function with no parameters
        //first calls a functiom that removes any active classes
        removeActiveClasses()
        //gives a list of the classes then adds a specific class
        //to a .panel div when it is clicker (eventListener registers a click)
        panel.classList.add('active') 
    })
}) 

function removeActiveClasses() {
    //iterates through nodelist
    panels.forEach(panel => {
        //removes class active from class list
        panel.classList.remove('active')
    })
}