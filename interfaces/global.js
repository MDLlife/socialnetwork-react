import React from 'react';

declare module CSSModule {
  declare module.exports: { [key: string]: string };
}

declare module OfflinePlugin {
  declare function install(): any;
}

declare interface System {
    import: (module: string) => Promise<{
        default: any,
        inc: number,
    }>
};

declare module 'react-router' {
  declare interface ReactRouter extends React.Component<*, *, *> {
    IndexRoute: React.Component<*, *, *>;
    Link: React.Component<*, *, *>;
    Redirect: React.Component<*, *, *>;
    IndexRedirect: React.Component<*, *, *>;
    Route: React.Component<*, *, *>;
    Router: React.Component<*, *, *>;
    browserHistory: any;
    hashHistory: any;
    useRouterHistory: (historyFactory: Function) => (options: ?Object) => Object;
    match: Function;
    RouterContext: React.Component<*, *, *>;
    createRoutes: (routes: React$Element<*>) => Array<Object>;
    formatPattern: (pattern: string, params: Object) => string;
    withRouter: any;
  }
  declare module.exports: ReactRouter;
}

declare module 'react-router/lib/PatternUtils' {
  declare module.exports: any;
}

declare module 'history/lib/createBrowserHistory' {
  declare module.exports: any;
}