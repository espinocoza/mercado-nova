const cache = new Map()

export async function translateToSpanish(text) {
  if (!text) return text
  const key = `es:${text}`
  if (cache.has(key)) return cache.get(key)
  try {
    const res = await fetch('https://libretranslate.com/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ q: text, source: 'en', target: 'es', format: 'text' })
    })
    if (!res.ok) throw new Error('Translation failed')
    const data = await res.json()
    const out = data?.translatedText || text
    cache.set(key, out)
    return out
  } catch (e) {
    return text
  }
}
