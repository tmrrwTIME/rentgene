/*
 *
 * DetailView actions
 *
 */

import {
  DEFAULT_ACTION,
  LOADING,
  LOAD_ENTRY,
  LOAD_ENTRY_SUCCESS,
  LOAD_ENTRY_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function loadEntry(entryId) {
  return {
    type: LOAD_ENTRY,
    entryId,
  };
}

export function loadEntrySuccess(entry) {
  return {
    type: LOAD_ENTRY_SUCCESS,
    entry,
  };
}

export function loadEntryError(error) {
  return {
    type: LOAD_ENTRY_ERROR,
    error,
  };
}
