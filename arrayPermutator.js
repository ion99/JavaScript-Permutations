function permutator (arr) {
  
  let permutations = [];
  if (arr.length === 1) {
    return [arr];
  }
  for (let i = 0; i < arr.length; i++) { 
    let subPerms = permutator(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (let j = 0; j < subPerms.length; j++) {
      subPerms[j].unshift(arr[i]);
      permutations.push(subPerms[j]);
    }
  }
  return permutations; 
}

//permutator(["a", "b", "c", "d"]);