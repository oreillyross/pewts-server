import EventModel from '../db/models/event'
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export const resolvers = {
  
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value) // ast value is always in string format
      }
      return null;
    },
  }),
  
  
  Query: {
    allEvents: async() => {
      return (await EventModel.find({}))
    },
    getEvent: async(_, { id }) => {
      return (await EventModel.findById(id))
    }
  },
  Mutation: {
    createEvent: async(_, ...event) => {
      let dbEvent = new EventModel(event[0])
      const doc = (await EventModel.find({title: event[0].title}))
      if (!doc.length) {
        return (await dbEvent.save())
      }
    },
    updateEvent: async(_, {id, title, description, source, crawlDate, href}) => {
      return EventModel.findOneAndUpdate({_id: id}, {title, description, source, crawlDate, href}, {new: true})
    },
    deleteEvent: async(_, {id}) => {
      return EventModel.findByIdAndRemove(id)
    },
    markAsRead: async(_, {id, unread}) => {
      return EventModel.findOneAndUpdate({_id: id}, { unread }, {new: true})
    }
  }
}
