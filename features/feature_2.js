// Feature 2
// This is a test feature for pull request 2

function feature2() {
  console.log('Feature 2 implementation');
  return {
    id: 2,
    name: 'Feature 2',
    description: 'Test feature for PR #2',
    createdAt: new Date().toISOString()
  };
}

module.exports = feature2;
