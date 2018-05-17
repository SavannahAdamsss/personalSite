var palette = document.querySelector('.palette')
var tileNumber = ''
var colorChoice = ''
var color = document.querySelector('.color')
var penColor = 'black';

function setPenColor(pen) {
    penColor = pen;
}

color.addEventListener('click', function(event) {
    var targetStyle = window.getComputedStyle(event.target)
    var color = targetStyle.getPropertyValue("background-color")
    colorChoice = color
  })

  palette.style.width=(cellcount*17) + "px"
  
  palette.addEventListener('click', function(event) {
    if (event.target.classList.contains('cell')) {
      event.target.style.backgroundColor = colorChoice;
    }
  })
  
  for (var i = 0; i < (cellcount * cellcount); i++) {
    var newCell = document.createElement('div')
    newCell.classList.add('cell')
    container.appendChild(newCell)
  }

function setPaletteColor(tile)
{
    pixel.style.backgroundColor = penColor;
}