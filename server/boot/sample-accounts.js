
// Boot script default accounts
// Not the same behaviour than my local work
// Here i'm throwing an error Role a=has already name developpers
module.exports = function (app) {
  console.log('Running sample-accounts.js')
  console.log(' ')


/*
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

      users.forEach((user, index) => {
        Account.findOrCreate({where: {email: user.email}}, user, (err, account) => {
            if (err) throw err;
            console.log('Account created for ', account.username);
            // I'am using findOrCreate not to have many records of developpers role
            Role.findOrCreate({where:{name: 'developpers'}}, {
              name: 'developpers',
              description: 'You are developpers'
            },(err, role) => {
              // At index 1
              // ValidationError: The `Role` instance is not valid.
              // Details: `name` already exists (value: "developpers")
              if (err) throw err;
              console.log('Developpers role created for ', account.username);
              role.principals.create({
                principalType: RoleMapping.USER,
                principalId: account.id
              }, (err, principal) => {
                if (err) throw err;
                console.log('Mapping role for ', account.username);
              });
              // so each boot i record 3 times relations mapping
            });
          });
      });
      // On my local work no error thrown for Role name
      // in result i've got 3 record of developpers roleName
      // I would like to have one only record
      // try using promise style same result
      //
      // ....
*/
};
