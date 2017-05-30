import { ApolloClient, createNetworkInterface } from 'apollo-client'
import 'isomorphic-fetch'

// Created with Graphcool - https://www.graph.cool/
const API_ENDPOINT = 'https://api.graph.cool/simple/v1/cj35uwa1l0b0j0196j6wptxc3'
// wss://subscriptions.graph.cool/v1/cj35uwa1l0b0j0196j6wptxc3

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: API_ENDPOINT,
    transportBatching: true
  })
})

export default apolloClient
