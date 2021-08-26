const accum = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  return input
    .split('')
    .reduce((output, letter, index) => {
      const trailingLetter = letter.toLowerCase().repeat(index);
      const mumble = `${letter.toUpperCase()}${trailingLetter}`;
      return [...output, mumble];
    }, [])
    .join('-');
};

module.exports = {
  accum,
};
