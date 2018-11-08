export const typeDefs = ` 
  
  scalar Date
  
  type Event {
    id: ID!
    title: String
    description: String
    source: String
    crawlDate: Date
    href: String
    unread: Boolean
  }
  
  type Query {
    allEvents: [Event!]!
    getEvent(id: ID!): Event
  }
  
  type Mutation {
    createEvent(id: ID!, title: String!, description: String!, source: String!, crawlDate: Float!, href: String!): Event!
    updateEvent(id: ID!, title: String, description: String, source: String, crawlDate: Float, href: String): Event
    deleteEvent(id: ID!): Event
    markAsRead(id: ID!, unread: Boolean): Event
  }
  
`
