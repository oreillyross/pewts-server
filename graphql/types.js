export const typeDefs = ` 
  
  type Query {
    allEvents: [Event!]!
    allTags: [Tag!]!
    getTag(id: ID!): Tag 
    getEvent(id: ID!): Event
  }

 type Mutation {
    createEvent(input: InputEvent): Event!
    updateEvent(input: UpdateEvent): Event
    deleteEvent(id: ID!): Event
    markAsRead(id: ID!, unread: Boolean): Event
    addTagsToEvent(id: ID!, tags: [ID]): Event
    createTag(title: String!): Tag!
  }

  input InputEvent {
    id: ID!, 
    title: String!, 
    description: String!, 
    source: String!, 
    crawlDate: Float!, 
    href: URL!
    unread: Boolean = True
  }
  
  input UpdateEvent {
    id: ID!, 
    title: String, 
    description: String, 
    source: String, 
    crawlDate: Float,
    href: URL
  }

  type Event {
    id: ID!
    title: String
    description: String
    source: String
    crawlDate: Date
    href: URL
    unread: Boolean
    tags: [Tag!]!
  }
  
  type Tag {
    id: ID!
    title: String
    event: [Event]!
  }
  
 scalar Date
 scalar DateTime
 scalar URL
 
  
`
