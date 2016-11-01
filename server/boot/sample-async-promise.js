
// test with promise

module.exports = function(app) {
  /*
  var Account = app.models.Account,
      Role = app.models.Role,
      RoleMapping = app.models.RoleMapping;

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

        users.forEach(function(user, index) {
          Account.findOrCreate({where: {email: user.email}}, user)
            .then(function (accounts) {
              var account =  accounts[0],
                  created =  accounts[1];
                  console.log('Create account for ', account.username);
                  console.log('Confirm creation ', created);
              Role.findOrCreate(
                {where:{name: 'developpers'}},
                {name: 'developpers', description: 'You are developpers'}
              ).then(function(roles) {
                var role    =  roles[0],
                    created =  roles[1]
                console.log('Create role ', role.name);
                console.log('Confirm creation ', created);
                // Error thrown @see README.md in bin directory
              }).catch(function (error) {
                  console.log('Error ' + error);
                  if (error) throw error;
              });

            }).catch(function (error) {
              if (error) throw error;
            });
        });
*/
};
