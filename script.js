document.getElementsByTagName('body')[0].style.margin = "0";

var i = 0;
while (i<99) {
  var tile  = document.createElement('div');
  tile.style.width = "11.1%";
  tile.style.float = "left"
  tile.style.margin = "0";
  tile.style.paddingBottom = "11.1%";
  var ranColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  tile.style.backgroundColor = ranColor;
  document.body.appendChild(tile);
  i++;
};

setInterval(function() {
  var d = 0;
  while(d<99){
  document.querySelectorAll('div')[d].style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  d++;
  }
}, 200);
