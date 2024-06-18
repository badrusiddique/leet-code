const dfs = function (start, target) {
  console.log("Visiting Node " + start.value);
  if (start.value === target) {
    // We have found the goal node we we're searching for
    console.log("Found the node we're looking for!");
    return start;
  }

  // Recurse with all children
  for (var i = 0; i < start.children.length; i++) {
    var result = dfs(start.children[i], target);
    if (result != null) {
      // We've found the goal node while going down that child
      return result;
    }
  }

  // We've gone through all children and not found the goal node
  console.log("Went through all children of " + start.value + ", returning to it's parent.");
  return null;
};
