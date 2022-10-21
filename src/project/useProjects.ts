import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { Subproject } from '../types';

export const GET_SUBPROJECTS = gql`
  query Subprojects($limit: Int!, $page: Int!, $slug: String!) {
    subprojects(limit: $limit, page: $page, slug: $slug) {
      docs {
        name
        slug
        status
        tagline
        funding
        coverImageUrl
        tags
        updatesCount
        ownerEthAddress
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
  | 'name'
  | 'slug'
  | 'status'
  | 'tagline'
  | 'funding'
  | 'coverImageUrl'
  | 'tags'
  | 'updatesCount'
  | 'ownerEthAddress'
>;

interface IResponse {
  subprojects: { docs: PartialSubproject[] };
}

export const useProjects = (args: { page?: number; limit?: number; slug: string }) => {
  const { fetcher } = useCollective();
  const { page = 1, limit = 10, slug } = args;

  const { data, error, mutate } = useSWR<IResponse>([GET_SUBPROJECTS, { page, limit, slug }], {
    fetcher,
  });

  return {
    projects: data?.subprojects?.docs,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
