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
  SUBMIT_FLAG_LISTING,
  SUBMIT_FLAG_LISTING_SUCCESS,
  SUBMIT_FLAG_LISTING_ERROR,
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

export function submitFlagListing(flagListingMessage) {
  return {
    type: SUBMIT_FLAG_LISTING,
    flagListingMessage,
  };
}


export function submitFlagListingSuccess() {
  return {
    type: SUBMIT_FLAG_LISTING_SUCCESS,
  };
}

export function submitFlagListingError() {
  return {
    type: SUBMIT_FLAG_LISTING_ERROR,
  };
}
