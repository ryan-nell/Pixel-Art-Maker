
//Select button element and add a click listener to it.
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', makeGrid);



// Function to create the grid
function makeGrid(event) {
  // Call function to clear the grid
  clearGrid();
  const gridTable = document.querySelector('.table-grid');

  let rowSizeTR = document.querySelector('#width-input').value;
  let columnSizeTD = document.querySelector('#height-input').value;

  //nested loop to create rows and cloumns according to user input size
  for(let rows = 0; rows < rowSizeTR; rows++){
    //create new TR element
    const newRowTR = document.createElement('tr');
    for(let columns = 0; columns < columnSizeTD; columns++){
      //create new TD element
      const newColumnTD = document.createElement('td');
      //add table data to table row
      newRowTR.appendChild(newColumnTD);
    }
    //add table row to the grid table
    gridTable.appendChild(newRowTR);

    //Call the colour function.
    selectColour();
    event.preventDefault();
  }
}

//Select colour functions
function selectColour(){
  let selectTile = document.getElementsByTagName('td');
  //loop to iterate through each TD element
  for(let i =0; i < selectTile.length; i++){
    //event listener that allows each TD elements background colour to change using a click
    selectTile[i].addEventListener('click', function(){
      let chosenColour = document.querySelector('#colour-picker-id').value;
      selectTile[i].style.backgroundColor = chosenColour;
    });
  }
}

//Function to clear the generated grid
function clearGrid(){
  const removeRow = document.querySelectorAll('tr');
  for(let i = 0; i < removeRow.length; i++){
    removeRow[i].remove();
  }
}
