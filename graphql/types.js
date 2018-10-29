export const typeDefs = ` 
  
  type Event {
    id: ID!
    title: String
    description: String
    source: String
    crawlDate: Float
    href: String
  }
  
  type Query {
    allEvents: [Event!]!
    getEvent(id: ID!): Event
  }
  
  type Mutation {
    createEvent(title: String!, description: String!, source: String!, crawlDate: Float!, href: String!): Event
    updateEvent(id: ID!, title: String!, description: String!, source: String!, crawlDate: Float!, href: String!): Event
    deleteEvent(id: ID!): Event
  }
  
`
