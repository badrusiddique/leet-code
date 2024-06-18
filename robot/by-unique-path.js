/*
Brute force solution
Since we know from the description that 1) the robot is rooted in the upper left corner (row = 0, col = 0) and 2) its only possible steps are right (col + 1) or down (row + 1) we can imagine the problem as a binary tree and counting problem.

At this point we can already identify that the runtime will be T: O(2^r+c) - exponential because of the recursive branching needed for the 2 down/right steps and r+c because of the matrix that we need to step through (rows + columns).

Base cases
As we step through the matrix, we need to ask ourselves:

    Are we out of bound? Return 0.
    Have we reached the end? Return 1.

Recursive call
Make a recursive call for both the right step and the down step.

Count
Return the count of down + right.
 */

const uniquePath = function (m, n, r = 0, c = 0) {
  if (r >= m || c >= n) return 0;
  if (r === m - 1 && c === n - 1) return 1;

  const right = uniquePaths(m, n, r, c + 1,);
  const down = uniquePaths(m, n, r + 1, c,);

  return right + down;
};


/*
Optimized solution using Dynamic Programming + Memoization
If you draw out the possible steps using a binary tree and for example a 3 * 3 grid, you'll see that there are duplicate sub trees. The duplication will only increase the bigger the grid becomes, so an exponential runtime is not good enough.

By adding an optional object literal in the function call, we can store our return value for the current row and column. We'll add a base case checking if we've already checked the current cell, and if so we return the return value.

This will reduce runtime from exponential to linear by pruning out the duplicated subproblems. Our function's runtime will still be driven by the number of recursive calls that we make, but this time around we will only be making r * c recursive calls.
 */

const uniquePaths = function(m, n, r = 0, c = 0, memo = {}) {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  if (r >= m || c >= n) return 0;
  if (r === m - 1 && c === n - 1) return 1;
  const right = uniquePaths(m, n, r, c + 1, memo);
  const down = uniquePaths(m, n, r + 1, c, memo);
  memo[pos] = right + down;
  return right + down;
};
