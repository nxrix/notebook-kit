export function unprefix(name: string, prefix: string): string {
  if (!name.startsWith(prefix)) throw new Error(`expected ${prefix}: ${name}`);
  return name.slice(prefix.length);
}
