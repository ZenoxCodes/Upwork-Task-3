// Feature 3
// This is a test feature for pull request 3

function feature3() {
  console.log('Feature 3 implementation');
  return {
    id: 3,
    name: 'Feature 3',
    description: 'Test feature for PR #3',
    createdAt: new Date().toISOString()
  };
}

module.exports = feature3;
