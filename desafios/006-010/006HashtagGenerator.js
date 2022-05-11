// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
  if (!str) {
    return false;
  }

  let hashtag = str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  ).join('');
  hashtag = `#${hashtag}`;
  if (hashtag.length <= 1 || hashtag.length > 140) {
    return false;
  }
  return hashtag;
};

module.exports = {
  generateHashtag,
};