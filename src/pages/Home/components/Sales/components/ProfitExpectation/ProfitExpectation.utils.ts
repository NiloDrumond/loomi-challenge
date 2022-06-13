// Because there is no api for last year profit, I'll mock it

function generateMock() {
  const real: number[] = [];
  const expectation: number[] = [];
  for (let i = 0; i < 12; i++) {
    real.push(Math.random() * 5000);
    expectation.push(Math.random() * 5000);
  }

  return { real, expectation };
}

export { generateMock };
