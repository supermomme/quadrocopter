'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('control service', function() {
  it('registered the controls service', () => {
    assert.ok(app.service('controls'));
  });
});
