export function resolveAssetUrl(input?: string): string {
  if (!input) return ''
  if (/^(https?:)?\/\//i.test(input) || input.startsWith('data:') || input.startsWith('blob:')) {
    return input
  }

  const normalized = input.replace(/^\/+/, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
