// Feature 4
// This is a test feature for pull request 4

function feature4() {
  console.log('Feature 4 implementation');
  return {
    id: 4,
    name: 'Feature 4',
    description: 'Test feature for PR #4',
    createdAt: new Date().toISOString()
  };
}

module.exports = feature4;
