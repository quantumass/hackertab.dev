import cachedRequest from './cachedRequest'

const getArticles = async (tag) => {
  const url = `/data/freecodecamp/${tag}.json`
  const data = await cachedRequest(url)
  return data
}

export default {
  getArticles: getArticles,
}
