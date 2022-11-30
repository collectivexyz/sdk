import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { QuerySubprojectsArgs, Subproject } from '../types';

export const GET_SUBPROJECTS = gql`
  query Subprojects(
    $limit: Int!
    $page: Int!
    $communityIds: [String!]!
    $period: String
    $sortBy: String
  ) {
    subprojects(
      limit: $limit
      page: $page
      communityIds: $communityIds
      period: $period
      sortBy: $sortBy
    ) {
      docs {
        name
        slug
        tagline
        logoUrl
        tags
        team
        votes
        votesCount
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
  'name' | 'slug' | 'tagline' | 'logoUrl' | 'tags' | 'team' | 'votes' | 'votesCount'
>;

interface IResponse {
  subprojects: { docs: PartialSubproject[] };
}

export const useProjects = (args: QuerySubprojectsArgs) => {
  const { fetcher } = useCollective();
  const { page = 1, limit = 10, communityIds, sortBy, period } = args;

  const { data, error, mutate } = useSWR<IResponse>(
    communityIds ? [GET_SUBPROJECTS, { page, limit, communityIds, sortBy, period }] : undefined,
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
