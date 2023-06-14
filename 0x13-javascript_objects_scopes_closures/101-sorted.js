
const { dict } = require('./101-data');

// Create a new dictionary of user ids by occurrence
const occurrencesById = {};
for (const userId in dict) {
  const occurrences = dict[userId];
  
  if (occurrences in occurrencesById) {
    occurrencesById[occurrences].push(userId);
  } else {
    occurrencesById[occurrences] = [userId];
  }
}

// Print the new dictionary
console.log(occurrencesById);
