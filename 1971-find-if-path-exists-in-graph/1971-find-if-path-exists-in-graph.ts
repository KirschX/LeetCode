function validPath(
  n: number,
  edges: number[][],
  start: number,
  end: number
): boolean {
  if (start === end) {
    return true;
  }
  const neighbourMap: { [vertice: number]: Set<number> } = {};
  edges.forEach(([x, y]) => {
    neighbourMap[x] = neighbourMap[x] || new Set();
    neighbourMap[x].add(y);
    neighbourMap[y] = neighbourMap[y] || new Set();
    neighbourMap[y].add(x);
  });

  const visited = new Set<number>();
  const dfsSearch = (x: number, target: number): boolean => {
    if (visited.has(x) || !(x in neighbourMap)) {
      return false;
    }
    visited.add(x);
    const neighbours = neighbourMap[x];
    if (neighbours.has(target)) {
      return true;
    }
    return (
      Array.from(neighbours).find((neighbour) =>
        dfsSearch(neighbour, target)
      ) !== undefined
    );
  };
  return dfsSearch(start, end);
                      }