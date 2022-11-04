import { gql } from 'graphql-request';
import useSWR from 'swr';
import { useCollective } from '../context';
import { Subproject } from '../types';

export const GET_SUBPROJECT = gql`
  query Subproject($slug: String!) {
    subproject(slug: $slug) {
      name
      coverImageUrl
      createdAt
      description
      ethAddresses
      feedId
      funding
      isFunded
      isMarkdown
      ownerEthAddress
      slug
      status
      tagline
      tags
      updatedAt
      updatesCount
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
      }
    }
  }
`;

interface IResponse {
  subproject: Subproject;
}

export const useProject = (args: { slug: string }) => {
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
