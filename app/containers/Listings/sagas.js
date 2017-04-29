import { put, call } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import {
  loading,
  loadingMore,
  entriesLoaded,
  entriesLoadedMore,
  entriesLoadError,
} from './actions';
import request, { buildOptions } from 'utils/request';
import { LOAD_ENTRIES, LOAD_MORE } from './constants';
import Bodybuilder from 'bodybuilder';
const BASE_URL = 'https://search-rentgene-yu3r6zygjgykk5mnhc5wffnl2u.us-west-2.es.amazonaws.com/entries/entry';
const requestURL = `${BASE_URL}/_search`;

function* loadEntries(action) {
  yield put(loading());
  const body = getElasticSearchBody(action, 'entries');
  console.log(body)
  const entries = yield call(request, requestURL, body);
  if (!entries.err) {
    let hits = [];
    if (entries.data.hits.total) {
      hits = entries.data.hits.hits.map(hit => hit._source); // eslint-disable-line
    }
    console.log(hits)
    yield put(entriesLoaded(hits, entries.data.hits.total));
    
  } else {
    yield put(entriesLoadError(entries.err));
  }
}


function* loadMore(action){
  yield put(loadingMore());
  const body = getElasticSearchBody(action, 'more');
  const entries = yield call(request, requestURL, body);
  if (!entries.err) {
    let hits = [];
    if (entries.data.hits.total) {
      hits = entries.data.hits.hits.map((hit) => {
        return hit._source
      }); // eslint-disable-line
    }
    yield put(entriesLoadedMore(hits));
  } else {
    yield put(entriesLoadError(entries.err));
  }
}

const getElasticSearchBody = function (action, type){
  const data = action.data;
  const body = new Bodybuilder();
  body.filter('term', 'type', data.listType);
  if (data.text) {
    body.query(
      'multiMatch',
      ['description', 'title', 'city', 'address'],
      data.text
    );
  }
  if (data.sortBy) {
    if (data.sortBy === 'priceLowToHigh') {
      body.sort('price', 'asc');
    } else if (data.sortBy === 'priceHighToLow') {
      body.sort('price', 'desc');
    } else {
      body.sort('createdAt', 'desc');
    }
  }
  if (Object.keys(data.filters)) {
    Object.keys(data.filters).map((key) => { // eslint-disable-line
      if (['beds', 'baths'].indexOf(key) !== -1) {
        body.filter('range', key, { gte: data.filters[key] });
      }
    });

    if (data.filters.furnished) {
      body.filter('term', 'furnished', data.filters.furnished);
    }

    if (data.filters.laundry) {
      body.filter('term', 'washerDryerInBuilding', data.filters.laundry);
    }

    if (data.filters.pets) {
      body.filter('term', 'pets', data.filters.pets);
    }

    if (data.filters.parking) {
      body.filter('term', 'pets', data.filters.parking);
    }

    if (data.filters.utilities) {
      body.filter('term', 'gas', true);
      body.filter('term', 'water', true);
      body.filter('term', 'electric', true);
      body.filter('term', 'trash', true);
    }

    if (data.filters.priceMin && data.filters.priceMax) {
      body.filter(
        'range',
        'price',
        {
          gte: parseInt(data.filters.priceMin, 10),
          lte: parseInt(data.filters.priceMax, 10),
          boost: 2,
        }
      );
    }

    if (data.filters.priceMax) {
      body.filter(
        'range',
        'price',
        {
          lte: parseInt(data.filters.priceMax, 10),
          boost: 2,
        }
      );
    }

    if (data.filters.squareFeet) {
      body.filter(
        'range',
        'squareFeet',
        {
          gte: parseInt(data.filters.squareFeet, 10),
          boost: 2,
        }
      );
    }
  }

  console.log("loading from: "+data.from)
  body.size(data.size);
  body.from(data.from);
  return Object.assign(body.build('v2'), {
    "_source": {
      "includes": [
        "images"
      ]
    }
  })
}

function* watcher() {
  yield [
    takeEvery(LOAD_ENTRIES, loadEntries),
    takeEvery(LOAD_MORE, loadMore),
  ];
}

// Individual exports for testing
export function* defaultSaga() {
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
  watcher,
];
