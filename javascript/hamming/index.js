class Hamming {
  compute(strand1, strand2) {
    let dist = 0;
    if (strand1.length !== strand2.length) {
      throw 'DNA strands must be of equal length.';
    }

    if (strand1 === strand2) {
      return 0;
    }

    for (let i = 0; i < strand1.length; i += 1) {
      if (strand1[i] !== strand2[i]) dist += 1;
    }

    return dist;
  }
}

module.exports = Hamming;
