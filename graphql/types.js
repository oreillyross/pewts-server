export const typeDefs = `

type Scenario {
  id: ID! 
  title: String!
  description: String!
  indicators: [Indicator!]! 
}

type Category  {
  event: Event 
  id: ID! 
  name: String!
}

type Descriptors  {
  events: [Event!]! 
  id: ID! 
  tag: String!
}

type Event {
  categories: [Category!]! 
  category: String!
  crawlDate: DateTime!
  description: String!
  descriptorses: [Descriptors!]! 
  eventDate: DateTime!
  href: String
  id: ID! 
  indicators: [Indicator!]! 
  unread: Boolean
  source: String
  title: String!
}

type Indicator {
  events: [Event!]! 
  id: ID! 
  keyword: Keyword 
  scenarios: [Scenario!]! 
  title: String!
}

type Keyword {
  id: ID! 
  indicators: [Indicator!]! 
  searchterm: String! 
}

type Query {
    hello(name: String): String
}


scalar DateTime
`