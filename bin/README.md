# Notes

## Different result on local work and sandbox

Running sample-accounts.js on server/boot directory in local work  
Result of console log :

```
Account created for  tom
Account created for  jerry
Account created for  mickey
Developpers role created for  tom
Developpers role created for  jerry
Mapping role for  tom
Mapping role for  jerry
Developpers role created for  mickey
Mapping role for  mickey
```

Running sample-accounts.js on server/boot directory in loopback-sandbox  
Result of console log :
```
Account created for  tom
Account created for  mickey
Account created for  jerry
Developpers role created for  mickey
Mapping role for  mickey

/home/franckysolo/workatom/loopback-sandbox/node_modules/mongodb/lib/utils.js:98
    process.nextTick(function() { throw err; });
                                  ^
ValidationError: The `Role` instance is not valid. Details: `name` already exists (value: "developpers").
```

Running sample-accounts-promise.js

```
Create account for  tom
Confirm creation  true
Create account for  mickey
Confirm creation  true
Create account for  jerry
Confirm creation  true
Create role  developpers
Confirm creation  true
Create role  developpers
Confirm creation  true
Error ValidationError: The `Role` instance is not valid. Details: `name` already exists (value: "developpers").
```
