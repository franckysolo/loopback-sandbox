// test one per one
module.exports = function(app) {

  var Account = app.models.Account,
      Role = app.models.Role,
      RoleMapping = app.models.RoleMapping;

  // user 1
  findOrCreateAccount({
    username: 'tom',
    email: 'tom@test.com',
    password: 'xxxx',
    roleName: 'developpers'
  });

  // user 2
  findOrCreateAccount({
    username: 'jerry',
    email: 'jerry@test.com',
    password: 'xxxx',
    roleName: 'developpers'
  });

  // user 3
  findOrCreateAccount({
    username: 'mickey',
    email: 'mickey@test.com',
    password: 'xxxx',
    roleName: 'developpers'
  });


 function findOrCreateAccount(user) {
    Account.findOrCreate(
      {where: {email: user.email}},
      user,
      function(error, account)  {
        if (error) throw error;
        console.log('Account created for ', account.username);
        Role.findOrCreate(
          {where:{name: 'developpers'}}, {
            name: 'developpers',
            description: 'You are developpers'
          }, function (error, role) {
            if (error) throw error;
            console.log('Role created  ', role.name);
            role.principals.create({
              principalType: RoleMapping.USER,
              principalId: account.id
            }, function(error, principal) {
              if (error) throw error;
              console.log('Mapping role for ', account.username);
            });
          }
        );
      }
    );
  }

};
