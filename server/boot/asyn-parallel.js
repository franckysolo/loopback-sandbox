var async = require('async');

module.exports = function(app) {
  async.parallel({
    accounts: async.apply(createAccounts),
    roles: async.apply(createRoles)
  }, function(err, results) {
    if (err) throw err;

    createRoleMapping(results.accounts, results.roles, function(err) {
      if (err) throw err;
      console.log('> models created successfully');
    });
  });

  function createAccounts(callback) {

  }

  function createRoles(callback) {

  }

  function createRoleMapping(callback) {

  }
};
