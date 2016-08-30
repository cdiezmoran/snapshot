var mongoose = require('mongoose');
var Person = require('./person.model');
var Organization = require('./organization.model')

var person = new Person({called: 'Brook',
  givenName: 'Brook',
  surName: 'Bisrat',
  birthDate: new Date ('01/14/1983')
});

console.log('creating person');
person.save(function (e) {
  if (e) {
    console.log(e);
    process.exit(1);
  }
  console.log('success');
  mongoose.connection.close();
});
