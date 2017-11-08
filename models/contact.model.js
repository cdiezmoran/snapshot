var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* Contacts can be thought of as "ContactCards" or business cards, 
a data model for contact information that belongs to a Person. 
A contact can be current or not current, based on whether or not there is an 
endDate. 
*/

var ContactSchema = new Schema({
  forPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person'
    },
  atOrganization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization'
    },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  title: {
    type: String
  },
  roleDescription: {
    type: String
  },
  atLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  directLine: {
    type: String
  },
  officeLine: {
    type: String
  }
});
ContactSchema.set('toObject', { virtuals: true });
module.exports = mongoose.model('Contact', ContactSchema);
