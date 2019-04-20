//Define variables
const pixelC = document.getElementById('pixelCanvas');
const colorP = document.getElementById('colorPicker');
const sizeP = document.getElementById('sizePicker');
const width = document.getElementById('inputWidth');
const height = document.getElementById('inputHeight');
//Create tr and td element
const row = document.createElement('tr')
const col = document.createElement('td')
//AddEventListener for Submit Button
sizeP.addEventListener('submit', function (event){
  event.preventDefault()
  makeGrid()
});

function makeGrid() {
  //Create nested loop to create rows then columns to create grid
  for (let r = 0; r < width.value; r++){
    //Create tr elements based on width value
    pixelC.appendChild(row)
    for (let c = 0; c < height.value; c++){
      //Create td elements based on height value
      row.appendChild(col)

      //AddEventListener to apply color value to a cell
      colorP.addEventListener('color', function(event){
        event.style.backgroundColor = colorP.value;
      });
    }
  }
}

makeGrid();
