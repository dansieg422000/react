// To organise the Test, wrap it inside the describe
describe('To organise the Test', () => {
  // Test the integer
  const totalCount = 10
  test('Check the integer value', () => {
    expect(totalCount).toBe(10);
  });

  // Test the string with regular expressions using toMatch
  const teamName = 'Performance'
  test('Check the string value', () => {
    expect(teamName).toMatch(/Performance/);
  });
});

// Test the Arrays
const topic = ['React', 'Redux'];

test('Check the value of an array topic', () => {
  expect(['React', 'Redux']).toEqual(expect.arrayContaining(topic));
});
