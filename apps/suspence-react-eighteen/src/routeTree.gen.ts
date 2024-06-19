/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as LayoutImport } from './routes/_layout';
import { Route as IndexImport } from './routes/index';
import { Route as UnhoistedIndexImport } from './routes/unhoisted.index';
import { Route as HoistedIndexImport } from './routes/hoisted.index';

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any);

const UnhoistedIndexRoute = UnhoistedIndexImport.update({
  path: '/unhoisted/',
  getParentRoute: () => rootRoute,
} as any);

const HoistedIndexRoute = HoistedIndexImport.update({
  path: '/hoisted/',
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    '/_layout': {
      id: '/_layout';
      path: '';
      fullPath: '';
      preLoaderRoute: typeof LayoutImport;
      parentRoute: typeof rootRoute;
    };
    '/hoisted/': {
      id: '/hoisted/';
      path: '/hoisted';
      fullPath: '/hoisted';
      preLoaderRoute: typeof HoistedIndexImport;
      parentRoute: typeof rootRoute;
    };
    '/unhoisted/': {
      id: '/unhoisted/';
      path: '/unhoisted';
      fullPath: '/unhoisted';
      preLoaderRoute: typeof UnhoistedIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  HoistedIndexRoute,
  UnhoistedIndexRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout",
        "/hoisted/",
        "/unhoisted/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "_layout.tsx"
    },
    "/hoisted/": {
      "filePath": "hoisted.index.tsx"
    },
    "/unhoisted/": {
      "filePath": "unhoisted.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
