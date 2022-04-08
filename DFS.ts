function dfs(related, visitedNodes, row) {
    for (var col = 0; col < related.length; col++){
        if(related[row][col] == 1 && visitedNodes[col] == undefined){
            visitedNodes[col] = 1;
            dfs(related, visitedNodes, col);
        }
    }
}

function countGroups(related) {
    // Row = subscriber
    // M[i][j] = j received a book from i
    // if i == j (book from self)
    let groups = 0;
    // treat it as a graph - use DFS to traverse it
    let visitedNodes = [];
    
    // O (V+E) Vertices + Edges
    // O (V) Space because we count the nodes (Vertices)
    for (var row = 0; row < related.length; row++){
        
        console.log(visitedNodes[row])
        if(visitedNodes[row] == undefined){
            dfs(related, visitedNodes, row);
            groups++;
        }
    }
    
    return groups;
}

// AlgoExpert
export class Node {
    name: string;
    children: Node[];
  
    constructor(name: string) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name: string) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array: string[]) {
          // Add current node to array
          array.push(this.name);
          this.children.forEach(child => child.depthFirstSearch(array));
      return array;
    }
  }