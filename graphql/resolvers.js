import EventModel from '../db/models/event'

export const resolvers = {
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
    }
  }
}
