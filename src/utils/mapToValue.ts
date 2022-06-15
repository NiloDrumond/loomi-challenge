export type WithValue<T> = {
  value: T;
};

function mapToValue<T = unknown>(raw: unknown): T[] {
  return (raw as WithValue<T>[]).map((r) => r.value);
}

export { mapToValue };
