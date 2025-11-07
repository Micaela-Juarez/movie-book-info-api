const cache = new Map();

export const cacheMiddleware = (duration) => (req, res, next) => {
  const key = req.originalUrl;
  if (cache.has(key)) {
    const cached = cache.get(key);
    const isExpired = Date.now() - cached.timestamp > duration * 1000;
    if (!isExpired) {
      console.log("Serving from cache:", key);
      return res.json(cached.data);
    }
    cache.delete(key);
  }
  res.sendResponse = res.json;
  res.json = (body) => {
    cache.set(key, { data: body, timestamp: Date.now() });
    res.sendResponse(body);
  };
  next();
};