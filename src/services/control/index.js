'use strict';

const service = require('feathers-memory');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  let options = {
    paginate: {
      default: 6,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/controls', service(options));

  // Get our initialize service to that we can bind hooks
  const controlService = app.service('/controls');

  // Set up our before hooks
  controlService.before(hooks.before);

  // Set up our after hooks
  controlService.after(hooks.after);

  let controls = ['elev','aile','thro','rudd','aux1','aux2']
  for (var key in controls) {
    controlService.create({
      type: controls[key],
      value: 0
    })
  }

};
