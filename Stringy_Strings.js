const stringy = (size) => (
    (size % 2) === 0
        ? ('10').repeat(size / 2)
        : ('10').repeat(size / 2) + '1'
)
