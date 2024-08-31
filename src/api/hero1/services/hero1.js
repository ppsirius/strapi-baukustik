'use strict';

/**
 * hero1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hero1.hero1');
