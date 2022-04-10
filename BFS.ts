// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        // Queue each node and its children for processing
        let queue: Node[] = [];

        // Start by pushing the root node
        queue.push(this);

        /* 
            While there are elements to process, keep going.
          1st node on the queue at a time and add its children to the queue
        */
        while (queue.length > 0) {
            let node = queue.shift();

            if (!!node) {
                array.push(node.name);
                node.children.forEach(child => queue.push(child));
            }
        }

        return array;
    }
}
