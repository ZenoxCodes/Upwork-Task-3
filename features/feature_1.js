// Feature 1
// This is a test feature for pull request 1

function feature1() {
  console.log('Feature 1 implementation');
  return {
    id: 1,
    name: 'Feature 1',
    description: 'Test feature for PR #1',
    createdAt: new Date().toISOString()
  };
}

module.exports = feature1;
