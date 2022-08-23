//Business Logic for Ticket
function Ticket() {
  this.viewers = {};
  this.currentId = 0;
}

Ticket.prototype.addViewer = function(viewer) {
  viewer.id = this.assignId()
  this.viewers[viewer.id] = viewer;
}

Ticket.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Viewer(nameMovie, showTime, age) {
  this.nameMovie = nameMovie;
  this.showTime = showTime;
  this.age = parseInt(age);
}

Ticket.prototype.findViewer = function(id) {
  if (this.viewers[id] !== undefined) {
    return this.viewers[id];
  }
  return false;
};

Ticket.prototype.costViewer = function(id) {
  if (viewer.age >= 65) {
  return "$15"
  } else if (viewer.age <= 5) {
  return "free"
  } else {
  return "$20"
  }
}
