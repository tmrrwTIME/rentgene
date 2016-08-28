// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/listings/:type',
      name: 'listings',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Listings/reducer'),
          System.import('containers/Listings/sagas'),
          System.import('containers/Listings'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('listings', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add/:type',
      name: 'listProperty',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ListProperty/reducer'),
          System.import('containers/ListProperty/sagas'),
          System.import('containers/ListProperty'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('listProperty', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/feedback',
      name: 'feedback',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Feedback/reducer'),
          System.import('containers/Feedback/sagas'),
          System.import('containers/Feedback'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('feedback', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/blog',
      name: 'blog',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Blog/reducer'),
          System.import('containers/Blog/sagas'),
          System.import('containers/Blog'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('blog', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add',
      name: 'add',
      getComponent(location, cb) {
        System.import('containers/Add')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
