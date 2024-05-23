

// function changeColor(event){
//     const selectedColor = event.target.value;
//     const coloredSection = document.getElementById("one");

//     coloredSection.style.backgroundColor= selectedColor;
//     localStorage.setItem('Selected Color', selectedColor);

// }

// const storedColor = localStorage.getItem('Selected Color');
// if (storedColor){
//     const coloredSection = document.getElementById('one');
// }


function changeColor(){
    const selectedColor = document.getElementById("change").value;
    const coloredSection = document.getElementById("one");

    if (selectedColor) {
        coloredSection.style.backgroundColor = selectedColor;

        localStorage.setItem('Selected Color', selectedColor);

    }
    else{
        alert("Please choose a color first")
    }
}
const storedColor = localStorage.getItem('Selected Color');
if (storedColor){
    const coloredSection = document.getElementById("one");
    coloredSection.style.backgroundColor = storedColor;
}
