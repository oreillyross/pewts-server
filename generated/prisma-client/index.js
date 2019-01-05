"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Descriptor",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Indicator",
    embedded: false
  },
  {
    name: "Keyword",
    embedded: false
  },
  {
    name: "Scenario",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://horizon-on-heroku-4a01aace27.herokuapp.com/`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Descriptor",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Indicator",
    embedded: false
  },
  {
    name: "Keyword",
    embedded: false
  },
  {
    name: "Scenario",
    embedded: false
  }
];
