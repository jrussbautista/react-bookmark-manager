export function truncate(words: string, maxLen = 20) {
  return words.length > maxLen ? words.substring(0, maxLen - 1) + '...' : words;
}
