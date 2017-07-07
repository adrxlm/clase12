/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule BooksListItem_book.graphql
 * @generated SignedSource<<d692ec1fc9dd7ddd66e96bdd38a7dde4>>
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type BooksListItem_book = {|
  +id: string;
  +title: ?string;
  +author: ?string;
  +image: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BooksListItem_book",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "title",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "author",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Book"
};

module.exports = fragment;
