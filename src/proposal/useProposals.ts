import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { Proposal } from '../types';

export const GET_PROPOSALS = gql`
  query Proposals(
    $limit: Int!
    $page: Int!
    $collectionSlug: String!
    $sortBy: String
    $sortDirection: Int
    $proposalStatus: [String!]
  ) {
    proposals(
      limit: $limit
      page: $page
      collectionSlug: $collectionSlug
      sortBy: $sortBy
      sortDirection: $sortDirection
      proposalStatus: $proposalStatus
    ) {
      collectionSlug
      docs {
        network
        status
        title
        proposalId
        proposer
        ask
        description
        entityId
        communityProfile(collectionSlug: $collectionSlug) {
          username
          profilePicture
        }
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

type IResponse = {
  proposals: { docs: Array<Proposal> };
};

export const useProposals = (args: { page?: number; limit?: number; slug: string }) => {
  const { fetcher } = useCollective();
  const { page = 1, limit = 10, slug } = args;

  const { data, error, mutate } = useSWR<IResponse>(
    [GET_PROPOSALS, { page, limit, collectionSlug: slug }],
    { fetcher }
  );

  return {
    proposals: data?.proposals?.docs,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
