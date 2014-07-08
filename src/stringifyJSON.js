// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj == "number"){
    return obj.toString();
  }
  else if(obj == null){
    return 'null';
  }
  else if(typeof obj == "boolean"){
    return obj.toString();
  }
  else if(typeof obj == "string"){
    return "\"" + obj + "\"";
  }
  else if(typeof obj == "object"){
  var string = "";
  var bracket = "{";
  var bracketEnd = "}";
  for(var key in obj){
    if(typeof obj[key] !== "string"){
    string += "\"" + key + "\":" + obj[key] + ",";
    } else {
    string += "\"" + key + "\":\"" + obj[key] + "\","; }
    }
  string = string.slice(0,-1);
  return bracket.concat(string, bracketEnd); }
};
