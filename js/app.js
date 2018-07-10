// Select color input
// Select size input

//Declaring variables
const formData = document.querySelector('form');


//form submit function
formData.submit(function(event){

  const tableRow = document.querySelector('tr');
  const tableData = document.querySelector('td');

  //Remove current rows and columns when the form uis sumbitted
  tableRow.remove();
  tableData.remove();

  //call function to make the grid
  makeGrid();
  event.preventDefault();
});


function makeGrid() {

  

}
