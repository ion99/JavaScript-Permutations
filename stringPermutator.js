function permutator (str) { //arr
  //var arr = str.split("");
  var permutations = [];
  if (str.length === 1) { //arr
    return [ str ];   //arr
  }

  for (var i = 0; i <  str.length; i++) { 
    // var subPerms = permutator((arr.slice(0, i).concat(arr.slice(i + 1))).join(""));
    var subPerms = permutator(str.substr(0, i).concat(str.substr(i + 1)));
    for (var j = 0; j < subPerms.length; j++) {
      //subPerms[j].unshift(arr[i]);
      var sub = str[i].concat(subPerms[j]);
      permutations.push(sub);
    }
  }
  return permutations;
  
}
permutator("abcd");