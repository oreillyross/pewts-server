import { GraphQLServer} from 'graphql-yoga'
import events from './db/models/event'
import mongoose from 'mongoose'
import mlab from './constants'
import { typeDefs } from './graphql/types'
import { resolvers } from './graphql/resolvers'

//TODO check if you need to put this in callback to server.start
const db = mongoose.connect(mlab, { useNewUrlParser: true });

const opts = {
  endpoint: '/graphql'
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  opts
})

server.start(() => {
  console.log('server started')
})