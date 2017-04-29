/*
 *
 * Listings actions
 *
 */

import {
  DEFAULT_ACTION,
  LOADING,
  LOADING_MORE,
  ENTRIES_LOADED,
  ENTRIES_LOADED_MORE,
  ENTRIES_LOADED_ERROR,
  LOAD_ENTRIES,
  LOAD_MORE,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadEntries(data) {
  return {
    type: LOAD_ENTRIES,
    data,
  };
}

export function loadMore(data) {
  return {
    type: LOAD_MORE,
    data,
  };
}


export function loading() {
  return {
    type: LOADING,
  };
}

export function loadingMore() {
  return {
    type: LOADING_MORE,
  };
}

export function entriesLoaded(entries, total) {
  return {
    type: ENTRIES_LOADED,
    entries,
    total
  };
}

export function entriesLoadedMore(entries) {
  return {
    type: ENTRIES_LOADED_MORE,
    entries,
  };
}

export function entriesLoadError(error) {
  return {
    type: ENTRIES_LOADED_ERROR,
    error,
  };
}
