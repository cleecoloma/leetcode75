'use strict';

function updateMatrix(mat) {
  let i, l, j, m;

  let q = [];

  // Find all zeroes in the matrix
  for (i = 0, l = mat.length; i < l; i++) {
    for (j = 0, m = mat[0].length; j < m; j++) {
      if (mat[i][j] === 0) {
        // Note the third param here, a zero to keep track of which "level" we're at.
        // The zeroes are obviously at zero.
        // Later in the bfs we will increase this for each unvisited neighbor
        q.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }

  // little helper array to find neighbors in a quick forEach loop.
  let dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  // Start BFS. BFS is the right choice so we minimize attempted double visits
  // BFS is like a stain that spreads, while DFS is like tendrils reaching out.
  while (q.length) {
    let pos = q.shift();

    // write value if we find it's lower than current (like those infinities)
    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2];
    }

    // Look at all neighbor positions. Are they on the board? Are they not yet visited?
    // If yes to both, add to the q, with an increased "level" param at pos [2]
    dir.forEach(function (d) {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
      // valid next coordinates?
      if (
        next[0] > -1 &&
        next[0] < mat.length &&
        next[1] > -1 &&
        next[1] < mat[0].length
      ) {
        // not yet marked?
        if (mat[next[0]][next[1]] === Infinity) {
          // add to q, but with increased index, which we stored at pos[2]
          q.push(next);
        }
      }
    });
  }
  return mat;
}

// Big O Notation
// Time - O (m x n)
// Space - O (m x n)
