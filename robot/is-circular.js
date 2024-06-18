function isCircular(path)
{
  // Initialize starting
  // point for robot as
  // (0, 0) and starting
  // direction as N North
  let x = 0, y = 0;
  let dir = 0;

  // Traverse the path
  // given for robot
  for (let i = 0; i < path.length; i++)
  {

    // Find current move
    let move = path[i];

    // If move is left or
    // right, then change direction
    if (move == 'R')
      dir = (dir + 1) % 4;
    else if (move == 'L')
      dir = (4 + dir - 1) % 4;

      // If move is Go, then
      // change x or y according to
      // current direction
    // if (move == 'G')
    else
    {
      if (dir == 0)
        y++;
      else if (dir == 1)
        x++;
      else if (dir == 2)
        y--;
      else // dir == 3
        x--;
    }
  }

  // If robot comes back to
  // (0, 0), then path is cyclic
  return (x == 0 && y == 0);
}
