// document.getElementById("alert-link").addEventListener("click", function (event) {
//     event.preventDefault(); 
//     alert("You clicked on the link!");
// });

// const mobileImages = document.querySelectorAll(".mobile-image");

// mobileImages.forEach(image => {
//     image.addEventListener("click", () => {
//         alert("Thanks for purchasing a phone from us!");
//     });
// });


// QUE3

// document.querySelectorAll(".delete-btn").forEach(button => {
//     button.addEventListener("click", function () {
//         const row = this.parentElement.parentElement;
//         row.remove();
//         updateIndexes();
//     });
// });

// function updateIndexes() {
//     const rows = document.querySelectorAll("#student-table tbody tr");
//     rows.forEach((row, index) => {
//         row.children[0].textContent = index; 
//     });
// }

// QUES4
// const image = document.getElementById("hover-image");
// image.addEventListener("mouseover", () => {
//     image.src = "f2.jpg"; 
// });


// image.addEventListener("mouseout", () => {
//     image.src = "f1.jpg";
// });

// //QUES5
// (function () {
//     let counter = 0;

//     const decrement = () => {
//         counter--;
//         updateCounter();
//     };


//     const increment = () => {
//         counter++;
//         updateCounter();
//     };


//     const updateCounter = () => {
//         document.getElementById("counter").innerHTML = counter;
//     };


//     const refresh = () => {
//         counter = 0;
//         updateCounter();
//     };
//     document.getElementById("increment").addEventListener("click", increment);
//     document.getElementById("decrement").addEventListener("click", decrement);
//     document.getElementById("refresh").addEventListener("click", refresh);
// })();
