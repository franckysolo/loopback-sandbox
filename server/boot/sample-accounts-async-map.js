
// Boot script default accounts
var async = require('async');

module.exports = function (app) {

/*
console.log('Test with async map');
console.log(' fail ');

  var Account = app.models.Account,
      Role = app.models.Role,
      RoleMapping = app.models.RoleMapping;

      // default developpers
      var users = [{
          username: 'tom',
          email: 'tom@test.com',
          password: 'xxxx',
          roleName: 'developpers'
        }, {
          username: 'jerry',
          email: 'jerry@test.com',
          password: 'xxxx',
          roleName: 'developpers'
        }, {
          username: 'mickey',
          email: 'mickey@test.com',
          password: 'xxxx',
          roleName: 'developpers'
        }];

        async.map(users, findOrCreateAccount, function(error, result) {
           if (error) throw error;
        });

        function findOrCreateAccount(user, callback) {
          Account.findOrCreate(
            {where: {email: user.email}},
            user,
            function(error, account) {
              if (error) callback(error, null);
              console.log('Account created for ', account.username);
              // Create role if not exist
              Role.findOrCreate(
                {
                  where:{
                    name: 'developpers'
                  }
                },
                {
                  name: 'developpers',
                  description: 'You are developpers'
                },
                function(error, role, created) {
                  if (error) callback(error);
                  if (created) {
                    console.log('Role developpers is created ');
                  } else {
                    console.log('Role developpers is read ');
                  }
                  // Error is thrown at 2nd item
                  // ValidationError: The `Role` instance is not valid.
                  // Details: `name` already exists (value: "developpers")
                  callback(null, role);
                }
              );
              return account;
            }
          );
        }
        */
};
