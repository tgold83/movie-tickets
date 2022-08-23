Describe Ticket();

Test 1: It should return an empty array
Code:
  let ticket = new Ticket();
Expected Output:
undefined

Describe Viewer();

Test 1: It should return our object with the correct values in the object keys
Code:
  let viewer = new Viewer("Thomas", "Noon", "63");
  viewer();
Expected Output:
  Viewer("Thomas", "Noon", "63");

Describe addViewer();

Test 1: It should add viewer to our empty ticket array
Code:
  let ticket = new Ticket();
  let viewer = new Viewer("Thomas", "Noon", "63");
  viewer();
  ticket.addViewer();
  ticket.viewer
Expected Output:
  ("Thomas", "Noon", "63");

Describe: assignId()

Test 1: It should assign an Id
Code:
  let ticket = new Ticket();
  let viewer = new Viewer("Thomas", "Noon", "63");
  viewer();
  ticket.addViewer();
  ticket.viewer

Expected Output:
  have viewer 1 with an Id 1
  have viewer 2 with an Id 2

Describe: findViewer();

Test 1: It should find viewer based off Id 
Code:
  let ticket = new Ticket();
  let viewer = new Viewer("Thomas", "Noon", "63");
  viewer();
  ticket.addViewer();
  ticket.findViewer(1)
Expected Output:
  (Viewer: "Thomas", "Noon", "63");


Describe deleteViewer();
Test 1:
Code:
Expected Output: