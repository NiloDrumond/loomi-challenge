function getTickAmount(data: number[]) {
  const top = Math.max(...data);
  return Math.ceil(top / 500) + 1;
}

export { getTickAmount };
