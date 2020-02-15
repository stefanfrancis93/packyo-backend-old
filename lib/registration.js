'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  createdAt: {
    $type: Date,
    $default: new Date()
  },
  name: {
    $type: 'string',
    $required: true
  },
  email: {
    $type: 'string',
    $required: true
  },
  phone: {
    $type: 'string',
    $required: true
  },
  type: {
    $type: 'string',
    $required: true
  },
  count: {
    $type: 'string',
    $required: true
  }
}).compile('RegistrationType');
