function zip(strand1, strand2) {
  const s1 = Array.from(strand1);
  const s2 = Array.from(strand2);
  return s1.map((el, idx) => [el, s2[idx]]);
}

class Hamming {
  compute(strand1, strand2) {
    let dist = 0;
    if (strand1.length !== strand2.length) {
      throw 'DNA strands must be of equal length.';
    }

    if (strand1 === strand2) {
      return 0;
    }

    zip(strand1, strand2)
      .forEach((pair) => { if (pair[0] !== pair[1]) dist += 1; });

    return dist;
  }
}

module.exports = Hamming;
