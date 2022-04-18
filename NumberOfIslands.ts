function numIslands(grid: string[][]): number {
  // Array to keep track of visited items so they're checked only once
  // Initializing the visitedItems matrix to avoid undefined issues
  let visitedItems: boolean[][] = grid.map((row) => row.map((value) => false));
  let islandCount: number = 0;

  // Iterate thru each and every row
  for (var i = 0; i < grid.length; i++) {
    // And every column. It's O(n^2) but it gets minimized with the BFS logic
    for (var j = 0; j < grid[i].length; j++) {
      // If the item is visited or 0, ensure it's marked as visited for 0's and go to next iteration
      // Otherwise perform iteration on the neighboring nodes in a BFS graph-style
      if (visitedItems[i][j] == true || grid[i][j] == "0") {
        visitedItems[i][j] = true;
        continue;
      } else {
        /* Here we mark nodes that are part of the island as visited so they won't
         * count as an island once a new island is found
         */
        countIslandBFS(i, j, grid, visitedItems);
        islandCount++;
      }
    }
  }

  return islandCount;
}

// Checks the current island for all its members and mark them as visited to not be re-iterated
function countIslandBFS(
  x: number,
  y: number,
  grid: string[][],
  visitedItems: boolean[][]
): void {
  // Create a stack with the indexes to be visited
  let stack: [number, number][] = [[x, y]];

  // while there are items on the stack to iterate (1's), keep processing
  while (stack.length) {
    let currentNode: [number, number] = stack.pop()!;

    // Get coordinates from item on the stack
    x = currentNode[0];
    y = currentNode[1];

    // If the node is visited already, ignore it
    if (visitedItems[x][y]) continue;
    // Otherwise mark it as visited so we only iterate thru it once
    visitedItems[x][y] = true;
    // Also ignore further processing if the node is 0
    if (grid[x][y] == "0") continue;

    // Get the node's neigbors and add them to the stack to be processed next
    getNeighbors(x, y, grid, visitedItems).forEach((node) => stack.push(node));
  }
}

// Retrieves neighboring "lands" around a given item that haven't been visited
function getNeighbors(
  x: number,
  y: number,
  grid: string[][],
  visitedItems: boolean[][]
): [number, number][] {
  let neighbors: [number, number][] = [];

  // left
  if (x > 0 && !visitedItems[x - 1][y]) neighbors.push([x - 1, y]);
  // right
  if (x < grid.length - 1 && !visitedItems[x + 1][y])
    neighbors.push([x + 1, y]);
  // above
  if (y > 0 && !visitedItems[x][y - 1]) neighbors.push([x, y - 1]);
  // right
  if (y < grid[0].length - 1 && !visitedItems[x][y + 1])
    neighbors.push([x, y + 1]);

  return neighbors;
}
