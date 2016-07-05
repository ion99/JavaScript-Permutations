function permutator (str) { 

  var permutations = [];
  if (str.length === 1) { 
    return [ str ];
  }

  for (var i = 0; i <  str.length; i++) { 
    var subPerms = permutator(str.substr(0, i).concat(str.substr(i + 1)));
    for (var j = 0; j < subPerms.length; j++) {
      var sub = str[i].concat(subPerms[j]);
      permutations.push(sub);
    }
  }
  return permutations; 
}

//permutator("abcd");