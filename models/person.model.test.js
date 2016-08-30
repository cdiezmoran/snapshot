var mongoose = require('mongoose');
var Person = require('./person.model');

var person = new Person({called: 'Minko',
  givenName: 'Minko',
  surName: 'Gechev',
  birthDate: new Date ('02/11/1990')
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
