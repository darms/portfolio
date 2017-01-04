//variable for images that will link with the different projects -var images = [];
// day one constructor function
// function Project (projName, problemDomain, toolsUsed, solution, timeFrame) {
//   this.projName = projName;
//   this.problemDomain = problemDomain;
//   this.toolsUsed = toolsUsed;
//   this.solution = solution;
//   this.timeFrame = timeFrame;
// }

//refactored on day 2
//structure influenced by lab on day 2

var portfolioPieces = [];
function Project (info) {
  this.projName = info.projName;
  this.problemDomain = info.problemDomain;
  this.toolsUsed = info.toolsUsed;
  this.solution = info.solution;
  this.timeFrame = info.timeFrame;
}
