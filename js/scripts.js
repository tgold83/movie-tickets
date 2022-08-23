function Ticket() {
  this.viewers = {};
}

Ticket.prototype.addViewer = function(viewer) {
  this.viewers[viewer.name] = viewer;
}

function Viewer(name, showTime, age) {
  this.name = name;
  this.showTime = showTime;
  this.age = age;
}
