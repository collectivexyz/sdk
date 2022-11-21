import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { QuerySubprojectsArgs, Subproject } from '../types';

export const GET_SUBPROJECTS = gql`
  query Subprojects($limit: Int!, $page: Int!, $communityIds: [String!]!) {
    subprojects(limit: $limit, page: $page, communityIds: $communityIds) {
      docs {
        name
        slug
        tagline
        logoUrl
        tags
        ownerEthAddress
        votesCount
        votes
      }
      hasNextPage
      hasPrevPage
      limit
      nextPage
      page
      prevPage
      totalDocs
      totalPages
    }
  }
`;

type PartialSubproject = Pick<
  Subproject,
  'name' | 'slug' | 'tagline' | 'logoUrl' | 'tags' | 'votesCount' | 'ownerEthAddress'
>;

interface IResponse {
  subprojects: { docs: PartialSubproject[] };
}

export const useProjects = (args: QuerySubprojectsArgs) => {
  const { fetcher } = useCollective();
  const { page = 1, limit = 10, communityIds } = args;

  const { data, error, mutate } = useSWR<IResponse>(
    communityIds ? [GET_SUBPROJECTS, { page, limit, communityIds }] : undefined,
    {
      fetcher,
    }
  );

  return {
    projects: data?.subprojects?.docs,
    isLoading: !error && !data,
    isError: !!error,
    error,
    mutate,
  };
};
