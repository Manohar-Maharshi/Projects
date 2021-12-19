import { request,gql } from 'graphql-request';

const graphqlAPI = "https://api-ap-south-1.graphcms.com/v2/ckxbg1c6t33ny01yz3mk66i1r/master";

export const getProjects = async () => {
	const query = gql`
		query MyQuery {
		  projects {
		    title
		    techStack
		    repoUrl
		    id
		    deployLink
		    description
		    framework
		    thumb {
		      url
		    }
		  }
		}
	`;

	const result = await request(graphqlAPI,query)

	return result?.projects
}