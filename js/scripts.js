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

function Viewer(name, showTime, age) {
  this.name = name;
  this.showTime = showTime;
  this.age = age;
}

Ticket.prototype.findViewer = function(id) {
  if (this.viewers[id] !== undefined) {
    return this.viewers[id];
  }
  return false;
};