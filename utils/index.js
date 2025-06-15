export const getData = async (key) => {
  switch (key) {
    case 'portfolio':
      return (await import('../data/portfolio.json')).default
    case 'articles':
      return (await import('../data/articles.json')).default
    case 'brief':
      return (await import('../data/brief.json')).default
    case 'libraries':
      return (await import('../data/libraries.json')).default
    default:
      throw new Error(`Unknown data: ${key}`)
  }
}
