const { routes } = require('../config/routes.config')
const i18n = require('i18n')

const routeHelper = (req, res, next) => {
  res.locals.routePath = (nameOrObj) => {
    if (typeof nameOrObj === 'string') {
      nameOrObj = routes[nameOrObj]
    }
    return nameOrObj.path[i18n.getLocale()]
  }

  res.locals.nextRoute = () => {
    // get next route
    // how do I get current route?
  }

  next()
}

module.exports = {
  routeHelper,
}

/*

const getNextRoute = (name, routes = defaultRoutes) => {
  const route = getRouteWithIndexByName(name, routes)

  if (!routeHasIndex(route) && process.env.NODE_ENV !== 'production') {
    throw new Error(`Next route error can't find => "${name}"`)
  }

  const nextRoute = routes[Number(route.index) + 1]
    ? routes[Number(route.index) + 1]
    : false

  if (!nextRoute) {
    return DefaultRouteObj
  }

  return nextRoute
}

const getNextRouteURL = (name, req) => {

  const nextRoute = getNextRoute(name)

if (!nextRoute.path) {
  throw new Error(`[POST ${req.path}] 'redirect' missing`)
}

return url.format({
  pathname: nextRoute.path,
  query: req.query,
})
}
*/