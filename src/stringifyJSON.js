// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var string = "";
  var emptyArr = '[]';
  var emptyObj = '{}';
  var bracket = "[";
  var bracketEnd = "]";
  var brace = "{";
  var braceEnd = "}";

  if (obj == null){
    return '' + obj + '';
  }
  if (typeof obj === "boolean"){
    return '' + obj + '';
  }
  if (typeof obj === "string"){
    return "\"" + obj + "\"";
  }
  if (typeof obj === "number"){
    return obj.toString();
  }

  if (Array.isArray(obj)){
    if(!obj.length){
    return emptyArr;
    }
    for(var i = 0; i < obj.length; i++){
      string += stringifyJSON(obj[i]) + ",";
    }
    string = string.slice(0, -1);
    return bracket.concat(string, bracketEnd);
  }

  if (typeof obj == "object"){
    if(Object.keys(obj).length === 0){
      return emptyObj;
    }
    for(var key in obj){
      if(typeof obj[key] == "function" || typeof obj[key] == undefined){
        return emptyObj;
      }
      string += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
      }
    string = string.slice(0,-1);
    return brace.concat(string, braceEnd);
  }
};
