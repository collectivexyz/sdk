import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { QuerySubprojectArgs, Subproject } from '../types';

export const GET_SUBPROJECT = gql`
  query Subproject($slug: String!) {
    subproject(slug: $slug) {
      communityId
      createdAt
      funding
      id
      images
      logoUrl
      name
      ownerEthAddress
      rank
      slug
      tags
      tagline
      updatedAt
      videoUrl
      votes
      votesCount
      website
      proposals {
        title
        totalVotes
        totalUniqueVotes
        auctionId
        status
        type
        uniqueId
        ask
        platformUrl
        proposer
        proposalId
      }
    }
  }
`;

interface IResponse {
  subproject: Subproject;
}

export const useProject = (args: QuerySubprojectArgs) => {
  const { fetcher } = useCollective();
  const { slug } = args;

  const { data, error, mutate } = useSWR<IResponse>(slug ? [GET_SUBPROJECT, { slug }] : undefined, {
    fetcher,
  });

  return {
    project: data?.subproject,
    isLoading: !error && !data,
    isError: !!error,
    error,
    mutate,
  };
};
