// Feature 5
// This is a test feature for pull request 5

function feature5() {
  console.log('Feature 5 implementation');
  return {
    id: 5,
    name: 'Feature 5',
    description: 'Test feature for PR #5',
    createdAt: new Date().toISOString()
  };
}

module.exports = feature5;
