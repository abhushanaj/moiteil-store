import { gql } from 'graphql-request';

export const IMAGE_FRAGMENT = gql`
	fragment ImageDetails on Asset {
		url
	}
`;
