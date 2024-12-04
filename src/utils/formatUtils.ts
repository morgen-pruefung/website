export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}

export function formatStringArray(arr: string[]): string {
  return arr.join(", ");
}
