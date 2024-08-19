const { visit } = require("graphql");

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (var vertex of vertexArray)
      this.nodes.add(vertex);
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (var node of this.nodes)
      if (node.adjacent.has(vertex))
        node.adjacent.delete(vertex)
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const dfs = [];
    const visitList = new Set();

    function search(node) {
      if (node == null)
        return null;

      dfs.push(node.value);
      visitList.add(node);

      node.adjacent.forEach(adj => {
        if (visitList.has(adj) == false)
          return search(adj);
      });
    }

    search(start);
    return dfs;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const bfs = [];
    const visitList = new Set();
    const visitQueue = [];

    visitList.add(start);
    visitQueue.push(start);

    while (visitQueue.length) {
      let curr = visitQueue.shift();
      bfs.push(curr.value);

      curr.adjacent.forEach(adj => {
        if (visitList.has(adj) == false) {
          visitList.add(adj);
          visitQueue.push(adj);
        }
      });
    }
    return bfs;
  }
}

module.exports = { Graph, Node }