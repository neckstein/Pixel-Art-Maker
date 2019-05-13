//Get canvas, color, and size element Ids
var pixelC = document.getElementById('pixelCanvas');
var colorP = document.getElementById('colorPicker').value;
var sizeP = document.getElementById('sizePicker');

function makeGrid() {
  //Get height and width element Ids
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  //Clear Grid
  pixelC.innerHTML = null;
  //Create nested loop to create rows then columns to create grid
  for (let r = 1; r <= height; r++){
    //Create tr element
    const row = document.createElement('tr');
    //Insert tr element into table createElement
    pixelC.appendChild(row);
    for (let c = 1; c <= width; c++){
      //Create td elements
      const cell = document.createElement('td');
      //Insert td element into tr element
      row.appendChild(cell);
      //Create funtion to set background Color (color) pixels
      cell.addEventLister('mousedown', function(){
        this.style.backgroundColor = colorP
      });
    }
  }
}

//AddEventListener for Submit Button
sizeP.addEventListener('click', function (event){
  event.preventDefault();
  makeGrid();
});
