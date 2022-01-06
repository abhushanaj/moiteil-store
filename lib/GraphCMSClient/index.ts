import { GraphQLClient } from 'graphql-request';

function initGraphCMSClient() {
	let client: undefined | GraphQLClient;

	if (!client) {
		if (!process.env.GRAPH_CMS_CONTENT_ENDPOINT) {
			throw new Error('GRAPH_CMS_CONTENT_ENDPOINT is not defined');
		} else {
			client = new GraphQLClient(process.env.GRAPH_CMS_CONTENT_ENDPOINT);
		}
	}

	return client;
}

export const graphCMSClient = initGraphCMSClient();
