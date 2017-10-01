def compute(strand1, strand2):
    if len(strand1) != len(strand2):
        raise ValueError('The Hamming distance is only defined for sequences '
                         'of equal length.')

    if strand1 == strand2:
        return 0

    return sum(1 for n1, n2 in zip(strand1, strand2) if n1 != n2)
