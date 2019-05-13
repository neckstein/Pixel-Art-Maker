//Get canvas, color, and size element Ids
var pixelC = document.getElementById('pixelCanvas');
var colorP = document.getElementById('colorPicker');
var sizeP = document.getElementById('sizePicker');

function makeGrid() {
  //Get height and width element Ids
  const gWidth = document.getElementById('inputWidth').value;
  const gHeight = document.getElementById('inputHeight').value;
  //Clear Grid
  pixelC.innerHTML = null;
  //Create nested loop to create rows then columns to create grid
  for (let r = 1; r <= gHeight; r++){
    //Create tr element
    let row = document.createElement('tr');
    //Insert tr element into table createElement
    pixelC.appendChild(row);
    for (let c = 1; c <= gWidth; c++){
      //Create td elements
      let cell = document.createElement('td');
      //Insert td element into tr element
      row.appendChild(cell);
      //Create funtion to set background Color (color) pixels
      cell.addEventListener('click', function(event){
        cell.style.backgroundColor = colorP.value;
      });
    }
  }
}

//AddEventListener for Submit Button
sizeP.addEventListener('submit', function (event){
  event.preventDefault();
  makeGrid();
});
