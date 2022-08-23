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