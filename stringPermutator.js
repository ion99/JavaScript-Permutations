function permutator (str) { 

  let permutations = [];
  if (str.length === 1) { 
    return [ str ];
  }

  for (let i = 0; i <  str.length; i++) { 
    let subPerms = permutator(str.substr(0, i).concat(str.substr(i + 1)));
    for (let j = 0; j < subPerms.length; j++) {
      let sub = str[i].concat(subPerms[j]);
      permutations.push(sub);
    }
  }
  return permutations; 
}

//permutator("abcd");