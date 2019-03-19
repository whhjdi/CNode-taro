export function formatDate(str: string): string {
  if (!str) {
    return;
  }
  str = str.replace("T", " ");
  let index = str.indexOf(".");
  str = str.substr(0, index);
  return str;
}
