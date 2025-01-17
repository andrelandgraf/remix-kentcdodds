module.exports = {
  cacheDirectory: './.cache/remix',
  routes(defineRoutes) {
    return defineRoutes(route => {
      if (process.env.ENABLE_TEST_ROUTES === 'true') {
        route('/__tests/login', '__test_routes__/login.tsx')
      }
    })
  },
}
