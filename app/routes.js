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
          injectSagas('listings', sagas.default);
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
          injectSagas('feedback', sagas.default);
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
          injectSagas('blog', sagas.default);
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
      path: '/contact',
      name: 'contact',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Contact/reducer'),
          System.import('containers/Contact/sagas'),
          System.import('containers/Contact'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('contact', reducer.default);
          injectSagas('contact', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/v/:slug',
      name: 'detailView',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/DetailView/reducer'),
          System.import('containers/DetailView/sagas'),
          System.import('containers/DetailView'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('detailView', reducer.default);
          injectSagas('detailView', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add/us',
      name: 'listUs',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ListUs/reducer'),
          System.import('containers/ListUs/sagas'),
          System.import('containers/ListUs'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('listUs', reducer.default);
          injectSagas('listUs', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add/rooms',
      name: 'listRooms',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ListRooms/reducer'),
          System.import('containers/ListRooms/sagas'),
          System.import('containers/ListRooms'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('listRooms', reducer.default);
          injectSagas('listRooms', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/add/apartment',
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
          injectSagas('listProperty', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/terms-and-conditions',
      name: 'termsAndConditionsPage',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/TermsAndConditionsPage/reducer'),
          System.import('containers/TermsAndConditionsPage/sagas'),
          System.import('containers/TermsAndConditionsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('termsAndConditionsPage', reducer.default);
          injectSagas('termsAndConditionsPage', sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
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
