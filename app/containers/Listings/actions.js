/*
 *
 * Listings actions
 *
 */

import {
  DEFAULT_ACTION,
  LOADING,
  ENTRIES_LOADED,
  ENTRIES_LOADED_ERROR,
  LOAD_ENTRIES,
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

export function loading() {
  return {
    type: LOADING,
  };
}

export function entriesLoaded(entries) {
  return {
    type: ENTRIES_LOADED,
    entries,
  };
}

export function entriesLoadError(error) {
  return {
    type: ENTRIES_LOADED_ERROR,
    error,
  };
}
