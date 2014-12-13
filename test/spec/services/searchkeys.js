'use strict';

describe('Service: searchKeys', function () {

  // load the service's module
  beforeEach(module('storytimeApp'));

  // instantiate service
  var searchKeys;
  beforeEach(inject(function (_searchKeys_) {
    searchKeys = _searchKeys_;
  }));

  it('should do something', function () {
    expect(!!searchKeys).toBe(true);
  });

});
