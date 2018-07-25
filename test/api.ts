import {
  assert,
} from 'chai';

import {
  suite,
  test,
} from 'mocha-typescript'

import { Network } from '../src/types'
import { OpenSeaAPI } from '../src/api'

const mainApi = new OpenSeaAPI({
  networkName: Network.Main
})

const rinkebyApi = new OpenSeaAPI({
  networkName: Network.Main
})

suite('api', () => {

  test('API has correct base url', () => {
    assert.equal(mainApi.apiBaseUrl, 'https://api.opensea.io')
    assert.equal(rinkebyApi.apiBaseUrl, 'https://rinkeby-api.opensea.io')
  })

})
