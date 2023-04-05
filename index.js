function stringLength(string) {
  if (string.length < 1) {
    throw new Error('string must be greater than 1 character');
  }
  if (string.length > 10) {
    throw new Error('string must be less than 10 characters');
  }
  return string.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const capitalize = (string) => {
  if (typeof string != 'string') {
    throw new Error('Please provide a string');
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = { stringLength, reverseString, capitalize };
