// test because of strange behaviour on sample-accounts.js

module.exports = function (app) {
  var Account = app.models.Account,
      Role = app.models.Role,
      RoleMapping = app.models.RoleMapping;

console.log('Running test.js')
console.log(' ')


 for (var i = 1; i <= 3; i++) {
   Role.findOrCreate({where:{name: 'developpers'}}, {
     name: 'developpers',
     description: "Développeur de l'application"
   }, function (err, role, created) {
       if (err) throw err;
       console.log('role name : ' + role.name);
       console.log('created : ' + created);
   });
 }



};
