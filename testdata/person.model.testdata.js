var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Person = require('./person.model');
var Organization = require('./organization.model')
var uri = 'mongodb://localhost/snapshotTest';
var db = mongoose.connect(uri);

var michael = new Person({called: 'Michael',
  givenName: 'Michael',
  surName: 'Staton',
  birthDate: new Date ('07/01/1980'),
  hasUserAccount: true,
  isTeamMember: true,
});

console.log('creating person');
michael.save(function (e) {
  if (e) {
    console.log(e);
    process.exit(1);
  }
  console.log('success');
  mongoose.connection.close();
});

var minko = new Person({called: 'Minko',
  givenName: 'Minko',
  surName: 'Gechev',
  birthDate: new Date ('02/11/1990')
});

console.log('creating person');
minko.save(function (e) {
  if (e) {
    console.log(e);
    process.exit(1);
  }
  console.log('success');
  mongoose.connection.close();
});

var brook = new Person({called: 'Brook',
  givenName: 'Brook',
  surName: 'Bisrat',
  birthDate: new Date ('01/14/1983')
});

console.log('creating person');
brook.save(function (e) {
  if (e) {
    console.log(e);
    process.exit(1);
  }
  console.log('success');
  mongoose.connection.close();
});
