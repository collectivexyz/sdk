export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GovernanceStatus: any;
  JSON: any;
};

export type Achievement = {
  /** Custom achievement data eg: rankings data */
  data?: Maybe<Scalars['JSON']>;
  origin: Scalars['String'];
  showIcon?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  tooltip?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ActiveListing = {
  auctionType?: Maybe<Scalars['String']>;
  blockchain?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  eventType?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  marketplace?: Maybe<Marketplace>;
  network?: Maybe<Scalars['String']>;
  notional?: Maybe<NotionalValue>;
  seller?: Maybe<Scalars['String']>;
  settlementCurrency?: Maybe<Scalars['String']>;
  startingPrice?: Maybe<NotionalValue>;
  txid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Aesthetics = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type AlignmentStats = {
  numAgreed?: Maybe<Scalars['Float']>;
  numDisagreed?: Maybe<Scalars['Float']>;
  percentAgreed?: Maybe<Scalars['Float']>;
};

export type Answer = {
  questionId: Scalars['String'];
  /** User answer */
  text: Scalars['String'];
};

export type Attachment = {
  data?: Maybe<Scalars['JSON']>;
  type?: Maybe<Scalars['String']>;
};

export type AttachmentInput = {
  data?: InputMaybe<Scalars['JSON']>;
  type?: InputMaybe<Scalars['String']>;
};

export type AuthorUrls = {
  main?: Maybe<Scalars['String']>;
};

export type BaseRankings = {
  percentile?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type BasicGovBreakdown = {
  onChainCount?: Maybe<Scalars['Float']>;
  prophouseCount?: Maybe<Scalars['Float']>;
};

export type BasicProposalMetadata = {
  collectionSlug?: Maybe<Scalars['String']>;
  proposalId?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
};

export type BuilderRankings = {
  executedProposals?: Maybe<BaseRankings>;
};

export type BuilderStats = {
  funding?: Maybe<FundingStats>;
  projects?: Maybe<ProjectStats>;
  proposals?: Maybe<ProposalStats>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Community = {
  /** DEPRECATED: we used this to block access to communities while keeping them visible */
  access?: Maybe<CommunityAccessEnum>;
  aesthetics: CommunityAesthetics;
  announcementFeedId?: Maybe<Scalars['String']>;
  banned: CommunityMembers;
  claimed?: Maybe<Scalars['Boolean']>;
  communityId: Scalars['String'];
  contentful?: Maybe<ContentfulCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  delegateQuestions?: Maybe<Array<DelegateQuestion>>;
  description?: Maybe<Scalars['String']>;
  disablePostDownVotes?: Maybe<Scalars['Boolean']>;
  disablePostUpvotes?: Maybe<Scalars['Boolean']>;
  discordChannelId?: Maybe<Scalars['String']>;
  extSnapshot?: Maybe<SnapshotExtension>;
  feeds: Array<Feed>;
  fractionalProject?: Maybe<FractionalProject>;
  governanceEntityIds?: Maybe<Array<Scalars['String']>>;
  imageUrl?: Maybe<Scalars['String']>;
  lastPostedAt?: Maybe<Scalars['DateTime']>;
  members: CommunityMembers;
  membersCount?: Maybe<Scalars['Float']>;
  membership: CommunityMembership;
  membershipPolicies: MembershipPoliciesConfig;
  name?: Maybe<Scalars['String']>;
  notionEmbedUrl?: Maybe<Scalars['String']>;
  palette?: Maybe<Palette>;
  permissions?: Maybe<CommunityPermissions>;
  platformUrl: Scalars['String'];
  /** number of posts in a community, not including comments */
  postCount?: Maybe<Scalars['Float']>;
  project: Project;
  recentAuthors: Array<Suggestion>;
  slug?: Maybe<Scalars['String']>;
  socialConnections: Array<GeneralSocial>;
  twitterUsername?: Maybe<Scalars['String']>;
  type: CommunityTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  visibility: CommunityVisibilityEnum;
};

export enum CommunityAccessEnum {
  Private = 'Private',
  Public = 'Public',
}

export type CommunityActivity = {
  badgeLabel?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  raw?: Maybe<Scalars['JSON']>;
  tooltip: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type CommunityActivityPaginated = {
  docs: Array<CommunityActivity>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CommunityAesthetics = {
  coverImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logoImageUrl?: Maybe<Scalars['String']>;
  palette?: Maybe<CommunityPalette>;
  symbol?: Maybe<Scalars['String']>;
};

export type CommunityAestheticsInput = {
  coverImageUrl?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  logoImageUrl?: InputMaybe<Scalars['String']>;
  palette?: InputMaybe<CommunityPaletteInput>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type CommunityMember = {
  imageUrl?: Maybe<Scalars['String']>;
  roles: Array<CommunityMemberRoleEnum>;
  status?: Maybe<CommunityMemberStatusEnum>;
  userId: Scalars['String'];
  username: Scalars['String'];
};

export enum CommunityMemberRoleEnum {
  Admin = 'Admin',
  Member = 'Member',
  Moderator = 'Moderator',
  Owner = 'Owner',
}

export enum CommunityMemberStatusEnum {
  Approved = 'Approved',
  Banned = 'Banned',
  Invited = 'Invited',
  Requested = 'Requested',
}

export type CommunityMembers = {
  docs: Array<CommunityMember>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Float']>;
  nextPage?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  prevPage?: Maybe<Scalars['Float']>;
  totalDocs?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type CommunityMembership = {
  isBanned?: Maybe<Scalars['Boolean']>;
  isGlobalAdmin?: Maybe<Scalars['Boolean']>;
  isInModerationTeam?: Maybe<Scalars['Boolean']>;
  isInvited?: Maybe<Scalars['Boolean']>;
  isMember?: Maybe<Scalars['Boolean']>;
};

export type CommunityPalette = {
  darkContrast?: Maybe<Scalars['String']>;
  darkPrimary?: Maybe<Scalars['String']>;
  darkSecondary?: Maybe<Scalars['String']>;
  lightContrast?: Maybe<Scalars['String']>;
  lightPrimary?: Maybe<Scalars['String']>;
  lightSecondary?: Maybe<Scalars['String']>;
};

export type CommunityPaletteInput = {
  darkContrast?: InputMaybe<Scalars['String']>;
  darkPrimary?: InputMaybe<Scalars['String']>;
  darkSecondary?: InputMaybe<Scalars['String']>;
  lightContrast?: InputMaybe<Scalars['String']>;
  lightPrimary?: InputMaybe<Scalars['String']>;
  lightSecondary?: InputMaybe<Scalars['String']>;
};

export type CommunityPermissions = {
  canManageCommunityAdmins?: Maybe<Scalars['Boolean']>;
  canManageCommunityMembers?: Maybe<Scalars['Boolean']>;
  canManageCommunityModerators?: Maybe<Scalars['Boolean']>;
  canPostInCommunity?: Maybe<Scalars['Boolean']>;
  canUpdateCommunity?: Maybe<Scalars['Boolean']>;
  canUpdateCommunityGovernance?: Maybe<Scalars['Boolean']>;
  canUpdateCommunityVisibility?: Maybe<Scalars['Boolean']>;
  canViewCommunity?: Maybe<Scalars['Boolean']>;
};

export type CommunityProfile = {
  achievements?: Maybe<Array<Achievement>>;
  address?: Maybe<Scalars['String']>;
  alignmentStats?: Maybe<AlignmentStats>;
  builderStats?: Maybe<BuilderStats>;
  communityId?: Maybe<Scalars['String']>;
  delegate?: Maybe<GovernanceAccount>;
  delegators?: Maybe<Array<GovernanceAccount>>;
  engagementStats?: Maybe<EngagementStats>;
  ensAvatar?: Maybe<EnsAvatar>;
  firstTransfer?: Maybe<FirstTransfer>;
  governanceStats?: Maybe<GovernanceStats>;
  hasDelegated: Scalars['Boolean'];
  isDelegate: Scalars['Boolean'];
  labels?: Maybe<Array<MemberLabel>>;
  ownershipStats?: Maybe<OwnershipStats>;
  /** Custom community profile data like skills bio etc */
  profile?: Maybe<Scalars['JSON']>;
  profilePicture: Scalars['String'];
  rankings?: Maybe<MemberRankings>;
  socialConnections?: Maybe<Array<SocialConnection>>;
  twitter?: Maybe<TwitterProfile>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  usernameUpdatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommunityProfileAlignmentStatsArgs = {
  governanceEntityId: Scalars['String'];
  sourceEthAddress: Scalars['String'];
};

export type CommunityProfileDelegateArgs = {
  governanceEntityId: Scalars['String'];
};

export type CommunityProfileDelegatorsArgs = {
  governanceEntityId: Scalars['String'];
};

export type CommunityProfileHasDelegatedArgs = {
  governanceEntityId: Scalars['String'];
};

export type CommunityProfileIsDelegateArgs = {
  governanceEntityId: Scalars['String'];
};

export type CommunityProfileProfilePictureArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  fallback?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityProfileUserArgs = {
  fallback?: InputMaybe<Scalars['Boolean']>;
};

export type CommunityProfilePaginated = {
  docs: Array<CommunityProfile>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CommunityProfilesSetCommunityInput = {
  /** Answers to questions */
  answers?: InputMaybe<Array<Answer>>;
  /** Bio for this member for this community */
  bio?: InputMaybe<Scalars['String']>;
  /** Collection slug (formerly projectId) */
  collectionSlug?: InputMaybe<Scalars['String']>;
  /** Community ID */
  communityId?: InputMaybe<Scalars['String']>;
  /** Community profile JSON object */
  data?: InputMaybe<Scalars['JSON']>;
  /** Answers to questions */
  numAnswers?: InputMaybe<Scalars['Float']>;
  /** Array of skills (as strings) */
  skills?: InputMaybe<Array<Scalars['String']>>;
};

export enum CommunityTypeEnum {
  OfficialProjectCommunity = 'OfficialProjectCommunity',
  UserCreatedCommunity = 'UserCreatedCommunity',
}

export enum CommunityVisibilityEnum {
  Hidden = 'Hidden',
  Listed = 'Listed',
}

export type ConnectedAccount = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type ContentfulCollection = {
  blockchain: Scalars['String'];
  category: Scalars['String'];
  description?: Maybe<ContentfulRichText>;
  dropDistribution: ContentfulRichText;
  eventsTimelineCollection?: Maybe<ContentfulEvents>;
  foundersCollection?: Maybe<ContentfulPeople>;
  guide?: Maybe<ContentfulRichText>;
  linksCollection: ContentfulLinks;
  mintDate: Scalars['String'];
  mintPrice: Scalars['String'];
  mission?: Maybe<ContentfulRichText>;
  name: Scalars['String'];
  notableHoldersCollection?: Maybe<ContentfulPeople>;
  relatedCollection: ContentfulRelatedCollections;
  slug: Scalars['String'];
  tagline: Scalars['String'];
};

export type ContentfulDiscussion = {
  author: ContentfulPerson;
  createdAt: Scalars['DateTime'];
  numComments: Scalars['Float'];
  source: Scalars['String'];
  summary: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ContentfulDiscussions = {
  items: Array<ContentfulDiscussion>;
};

export type ContentfulEvent = {
  endDate?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulImage>;
  startDate: Scalars['String'];
  summary?: Maybe<ContentfulRichText>;
  title: Scalars['String'];
  twitterUrls?: Maybe<Array<Scalars['String']>>;
};

export type ContentfulEvents = {
  items: Array<ContentfulEvent>;
};

export type ContentfulImage = {
  url: Scalars['String'];
};

export type ContentfulLink = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export type ContentfulLinks = {
  items: Array<ContentfulLink>;
};

export type ContentfulPeople = {
  items: Array<ContentfulPerson>;
};

export type ContentfulPerson = {
  bio?: Maybe<ContentfulRichText>;
  ethAddress?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  shortBio?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type ContentfulProposal = {
  authorCollection: ContentfulPeople;
  discussionLinksCollection?: Maybe<ContentfulDiscussions>;
  proposalId: Scalars['String'];
  slug: Scalars['String'];
  summary: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type ContentfulRelatedCollection = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type ContentfulRelatedCollections = {
  items: Array<ContentfulRelatedCollection>;
};

export type ContentfulRichText = {
  json: Scalars['JSON'];
};

export type CreateFeedInput = {
  postingAccess?: InputMaybe<FeedPostingAccessEnum>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreatePostInput = {
  actingAsProjectId?: InputMaybe<Scalars['String']>;
  attachments?: InputMaybe<Array<AttachmentInput>>;
  content?: InputMaybe<Scalars['String']>;
  extSnapshotProposal?: InputMaybe<SnapshotInput>;
  labels?: InputMaybe<Array<PostLabel>>;
  markdown?: InputMaybe<Scalars['String']>;
  parentFeedId?: InputMaybe<Scalars['String']>;
  parentPostId?: InputMaybe<Scalars['String']>;
  rootPostId?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<ScopeInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type CreateSubprojectInput = {
  communityIds: Array<Scalars['String']>;
  images: Array<Scalars['String']>;
  logoUrl: Scalars['String'];
  name: Scalars['String'];
  ownerEthAddress: Scalars['String'];
  proposalIds?: InputMaybe<Array<Scalars['String']>>;
  tagline: Scalars['String'];
  tags: Array<Scalars['String']>;
  videoUrl?: InputMaybe<Scalars['String']>;
  website: Scalars['String'];
};

export type Delegate = {
  address: Scalars['String'];
  blockchain: Scalars['String'];
  communityProfile: CommunityProfile;
  creation: GovernanceDelegateCreation;
  entityId: Scalars['String'];
  governanceContract: Scalars['String'];
  network: Scalars['String'];
  stats: GovernanceWalletStats;
  tokenContract: Scalars['String'];
  totalVotes: Scalars['Float'];
  type: Scalars['String'];
  votes?: Maybe<Array<Vote>>;
};

export type DelegateCommunityProfileArgs = {
  communityId?: InputMaybe<Scalars['String']>;
  communitySlug?: InputMaybe<Scalars['String']>;
};

export type DelegateQuestion = {
  id: Scalars['String'];
  text: Scalars['String'];
};

export type DelegateRankings = {
  onChain?: Maybe<BaseRankings>;
};

export type DelegateStatus = {
  totalDelegatedVotes?: Maybe<Scalars['Float']>;
  totalVotes?: Maybe<Scalars['Float']>;
  uniqueHoldersRepresented?: Maybe<Scalars['Float']>;
};

export type DeleteFeedMutationResult = {
  deletedId?: Maybe<Scalars['String']>;
};

export type DeletePostMutationResult = {
  deletedId?: Maybe<Scalars['String']>;
};

export type DiscordAuthor = {
  bio?: Maybe<Scalars['String']>;
  connectedAccounts?: Maybe<Array<ConnectedAccount>>;
  hasGuildAvatar?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type DiscordExtension = {
  author: DiscordAuthor;
  messageId: Scalars['String'];
  project?: Maybe<DiscordProject>;
};

export type DiscordProject = {
  collectionSlug?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DiscordStats = {
  discriminator?: Maybe<Scalars['String']>;
  joinedDate?: Maybe<Scalars['String']>;
  messagesCount?: Maybe<Scalars['Float']>;
  totalDaysEngaged?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};

export type DiscourseStats = {
  badgeCount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  daysVisited?: Maybe<Scalars['Float']>;
  lastPostedAt?: Maybe<Scalars['String']>;
  lastSeenAt?: Maybe<Scalars['String']>;
  postcount?: Maybe<Scalars['Float']>;
  postsRead?: Maybe<Scalars['Float']>;
  recentTimeRead?: Maybe<Scalars['Float']>;
  timeRead?: Maybe<Scalars['Float']>;
  totalDaysEngaged?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};

export type EngagementStats = {
  discord?: Maybe<DiscordStats>;
  discourse?: Maybe<DiscourseStats>;
};

export type EnsAvatar = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type EntityBreakdown = {
  onChain?: Maybe<Scalars['Float']>;
  prophouse?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type ExternalData = {
  opensea?: Maybe<ExternalDataOpensea>;
};

export type ExternalDataOpensea = {
  slug: Scalars['String'];
  verified: Scalars['Boolean'];
};

export type ExternalLinks = {
  discordUrl?: Maybe<Scalars['String']>;
  openseaUrl?: Maybe<Scalars['String']>;
  telegramUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type Feed = {
  editable?: Maybe<Scalars['Boolean']>;
  /** feed identifier */
  feedId?: Maybe<Scalars['String']>;
  lastPostedAt?: Maybe<Scalars['DateTime']>;
  /** permissions that session user has for this specific feed */
  permissions?: Maybe<FeedPermissions>;
  /** number of pinned posts in this feed */
  pinnedCount?: Maybe<Scalars['Float']>;
  /** number of posts in a feed, not including comments */
  postCount?: Maybe<Scalars['Float']>;
  /** who can post in the feed or project moderation team */
  postingAccess?: Maybe<FeedPostingAccessEnum>;
  posts?: Maybe<PaginatedPosts>;
  /** number of reported posts in this feed */
  reportedCount?: Maybe<Scalars['Float']>;
  /** to which entity this feed is attached, e.g. annoucement feed under a project */
  scope?: Maybe<Scope>;
  title?: Maybe<Scalars['String']>;
  /** is it platform created or user created (platform created cannot be edited by users) */
  type?: Maybe<FeedTypeEnum>;
};

export type FeedPostsArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  excludeLabels?: InputMaybe<Array<PostLabel>>;
  hasAnyOfLabels?: InputMaybe<Array<PostLabel>>;
  page?: InputMaybe<Scalars['Float']>;
  period?: InputMaybe<Scalars['String']>;
  skipCommentsPreloading?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type FeedPermissions = {
  canPostInFeed?: Maybe<Scalars['Boolean']>;
  canUpdateFeed?: Maybe<Scalars['Boolean']>;
  canUpdateFeedOrder?: Maybe<Scalars['Boolean']>;
  canViewFeed?: Maybe<Scalars['Boolean']>;
};

export enum FeedPostingAccessEnum {
  Everyone = 'Everyone',
  ModerationTeam = 'ModerationTeam',
}

export enum FeedTypeEnum {
  Announcement = 'Announcement',
  Discussion = 'Discussion',
  PlatformCreated = 'PlatformCreated',
  UserCreated = 'UserCreated',
}

export type FirstPurchase = {
  stillOwns: Scalars['Boolean'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FirstTransfer = {
  blockNumber?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type FractionalProject = {
  entityId: Scalars['String'];
  governanceEntityId: Scalars['String'];
  networkAddress: Scalars['String'];
  relatedEntities?: Maybe<Array<Scalars['String']>>;
  vaultAddress: Scalars['String'];
};

export type FundingRankings = {
  onChainFunding?: Maybe<BaseRankings>;
  prophouseFunding?: Maybe<BaseRankings>;
  totalFunding?: Maybe<BaseRankings>;
};

export type FundingStats = {
  grants?: Maybe<Scalars['Float']>;
  onChain?: Maybe<Scalars['Float']>;
  prophouse?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type GeneralSocial = {
  type?: Maybe<SocialTypes>;
  username?: Maybe<Scalars['String']>;
};

export type GeneralSocialInput = {
  type: SocialTypes;
  username: Scalars['String'];
};

export type GlobalListing = {
  _id?: Maybe<Scalars['String']>;
  blockchain: Scalars['String'];
  collectionSlug: Scalars['String'];
  createdDate?: Maybe<Scalars['DateTime']>;
  marketplace?: Maybe<ListingMarketplace>;
  memo?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  networkAddress: Scalars['String'];
  notional?: Maybe<NotionalValue>;
  price?: Maybe<NotionalValue>;
  projectId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  sellerAddress?: Maybe<Scalars['String']>;
  settlementCurrency?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  tokenId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GovernanceAccount = {
  _id: Scalars['ID'];
  address: Scalars['String'];
  blockchain: Scalars['String'];
  communityProfile: CommunityProfile;
  delegate: Scalars['String'];
  entityId: Scalars['String'];
  network: Scalars['String'];
  totalTokens?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type GovernanceAccountCommunityProfileArgs = {
  communityId: Scalars['String'];
};

export type GovernanceDelegateCreation = {
  block: Scalars['Float'];
  date: Scalars['String'];
};

export type GovernanceDelegatesGraphPaginated = {
  docs: Array<Delegate>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type GovernanceEntity = {
  blockchain: Scalars['String'];
  communityId: Scalars['String'];
  entityId: Scalars['String'];
  metadata: GovernanceEntityMetadataGraph;
  name?: Maybe<Scalars['String']>;
  network: Scalars['String'];
  type: Scalars['String'];
};

export type GovernanceEntityMetadataGraph = {
  currentDelegate?: Maybe<Scalars['String']>;
  currentNounDelegate?: Maybe<Scalars['String']>;
};

export type GovernanceStats = {
  delegateStatus?: Maybe<DelegateStatus>;
  totalProposalsVoted?: Maybe<Scalars['Float']>;
  voting?: Maybe<VotingStats>;
};

export type GovernanceWalletStats = {
  totalProposalsVoted: Scalars['Float'];
};

export type HistoricalDiscordStats = {
  messages?: Maybe<Scalars['Float']>;
};

export type HistoricalStats = {
  address?: Maybe<Scalars['String']>;
  communityId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  discord?: Maybe<HistoricalDiscordStats>;
};

export type HistoricalStatsPaginated = {
  docs: Array<HistoricalStats>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ImageUrls = {
  main?: Maybe<Scalars['String']>;
};

export type Link = {
  name?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ListingMarketplace = {
  name?: Maybe<Scalars['String']>;
  networkAddress?: Maybe<Scalars['String']>;
};

export type ListingStats = {
  floor?: Maybe<ListingStatsFloor>;
};

export type ListingStatsFloor = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<ListingValue>;
};

export type ListingValue = {
  change?: Maybe<ListingValueChange>;
  eth?: Maybe<Scalars['Float']>;
};

export type ListingValueChange = {
  change_1d?: Maybe<Scalars['Float']>;
  change_1hr?: Maybe<Scalars['Float']>;
  change_1mo?: Maybe<Scalars['Float']>;
  change_1w?: Maybe<Scalars['Float']>;
  change_3d?: Maybe<Scalars['Float']>;
  change_3mo?: Maybe<Scalars['Float']>;
  change_6hr?: Maybe<Scalars['Float']>;
  change_30min?: Maybe<Scalars['Float']>;
  change_all?: Maybe<Scalars['Float']>;
};

export type ListingsIndexed = {
  cheapestListingPrice?: Maybe<NotionalValue>;
  isListed?: Maybe<Scalars['Boolean']>;
  latestListingDate?: Maybe<Scalars['DateTime']>;
  numListings?: Maybe<Scalars['Int']>;
};

export type MarketCapNotionalValue = {
  change?: Maybe<Scalars['Int']>;
  eth?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['String']>;
  rank?: Maybe<Scalars['Int']>;
  usd?: Maybe<Scalars['Int']>;
};

export type Marketplace = {
  name?: Maybe<Scalars['String']>;
  networkAddress?: Maybe<Scalars['String']>;
};

export type Me = {
  announcements?: Maybe<PaginatedPosts>;
  canActAs?: Maybe<Array<Project>>;
  communities?: Maybe<Array<Community>>;
  enabledNotifications?: Maybe<Array<NotificationRule>>;
  imageURL?: Maybe<Scalars['String']>;
  proposals?: Maybe<PaginatedPosts>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type MeAnnouncementsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type MeProposalsArgs = {
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type Media = {
  audioUrls?: Maybe<AuthorUrls>;
  imageUrls?: Maybe<ImageUrls>;
  videoUrls?: Maybe<VideoUrls>;
};

export type MemberLabel = {
  colors?: Maybe<Scalars['String']>;
  /** Custom label data */
  data?: Maybe<Scalars['JSON']>;
  label: Scalars['String'];
  origin: MemberLabelOrigin;
  subtitle?: Maybe<Scalars['String']>;
  tooltip?: Maybe<Scalars['String']>;
  type: MemberLabelType;
};

export enum MemberLabelOrigin {
  Autogenerated = 'autogenerated',
  Custom = 'custom',
}

export enum MemberLabelType {
  Builder = 'Builder',
  Governance = 'Governance',
  Ownership = 'Ownership',
}

export type MemberRankings = {
  builder?: Maybe<BuilderRankings>;
  delegate?: Maybe<DelegateRankings>;
  funding?: Maybe<FundingRankings>;
  votingParticipation?: Maybe<BaseRankings>;
};

export type MembershipPoliciesConfig = {
  logic?: Maybe<Scalars['String']>;
  rules: Array<MembershipPolicyTypeEnum>;
};

export enum MembershipPolicyTypeEnum {
  OwnershipGate = 'OwnershipGate',
}

export type Mutation = {
  addEnsDomain: Community;
  addPostReaction: Post;
  banMember: CommunityMember;
  changeRole: CommunityMember;
  createCommunityFeed: Feed;
  createPost: Post;
  createSubproject: Subproject;
  deleteFeed: DeleteFeedMutationResult;
  deletePost: DeletePostMutationResult;
  deletePostReaction: Post;
  editProposalField: Proposal;
  markAllUserNotificationsAsRead?: Maybe<Scalars['Boolean']>;
  markNotificationAsRead?: Maybe<Notification>;
  markNotificationAsUnread?: Maybe<Notification>;
  pinPost: Post;
  removeMember: RemoveMember;
  reportPost: Post;
  setCommunityProfile: SetCommunityProfileDto;
  setMainSpaceUrl: Community;
  signPost: Post;
  toggleDownvote: Post;
  toggleSubprojectVote: Subproject;
  toggleUpvote: Post;
  unBanMember: CommunityMember;
  unpinPost: Post;
  updateCommunity: Community;
  updateCommunityFeedsOrder: Community;
  updateFeed: Feed;
  updatePost: Post;
};

export type MutationAddEnsDomainArgs = {
  communityId: Scalars['String'];
  subdomainName: Scalars['String'];
};

export type MutationAddPostReactionArgs = {
  postId: Scalars['String'];
  reaction: Scalars['String'];
};

export type MutationBanMemberArgs = {
  communityId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationChangeRoleArgs = {
  communityId: Scalars['String'];
  role: CommunityMemberRoleEnum;
  userId: Scalars['String'];
};

export type MutationCreateCommunityFeedArgs = {
  communityId: Scalars['String'];
  feedData: CreateFeedInput;
};

export type MutationCreatePostArgs = {
  postData: CreatePostInput;
};

export type MutationCreateSubprojectArgs = {
  createSubprojectData: CreateSubprojectInput;
};

export type MutationDeleteFeedArgs = {
  feedId: Scalars['String'];
};

export type MutationDeletePostArgs = {
  postId: Scalars['String'];
};

export type MutationDeletePostReactionArgs = {
  postId: Scalars['String'];
  reaction: Scalars['String'];
};

export type MutationEditProposalFieldArgs = {
  entityId: Scalars['String'];
  field: Scalars['String'];
  operation: Scalars['String'];
  proposalId: Scalars['String'];
  value: Scalars['String'];
};

export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['String'];
};

export type MutationMarkNotificationAsUnreadArgs = {
  id: Scalars['String'];
};

export type MutationPinPostArgs = {
  postId: Scalars['String'];
};

export type MutationRemoveMemberArgs = {
  communityId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationReportPostArgs = {
  postId: Scalars['String'];
  reason: Scalars['String'];
};

export type MutationSetCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communityProfile: CommunityProfilesSetCommunityInput;
  communitySlug?: InputMaybe<Scalars['String']>;
};

export type MutationSetMainSpaceUrlArgs = {
  communityId: Scalars['String'];
  mainSpaceUrl: Scalars['String'];
};

export type MutationSignPostArgs = {
  address: Scalars['String'];
  postId: Scalars['String'];
  signature: Scalars['String'];
};

export type MutationToggleDownvoteArgs = {
  postId: Scalars['String'];
};

export type MutationToggleSubprojectVoteArgs = {
  slug: Scalars['String'];
};

export type MutationToggleUpvoteArgs = {
  postId: Scalars['String'];
};

export type MutationUnBanMemberArgs = {
  communityId: Scalars['String'];
  userId: Scalars['String'];
};

export type MutationUnpinPostArgs = {
  postId: Scalars['String'];
};

export type MutationUpdateCommunityArgs = {
  communityData: UpdateCommunityInput;
  communityId: Scalars['String'];
};

export type MutationUpdateCommunityFeedsOrderArgs = {
  communityId: Scalars['String'];
  feedsOrder: Array<Scalars['String']>;
};

export type MutationUpdateFeedArgs = {
  feedData: UpdateFeedInput;
  feedId: Scalars['String'];
};

export type MutationUpdatePostArgs = {
  postData: UpdatePostInput;
  postId: Scalars['String'];
};

export type Nft = {
  _id?: Maybe<Scalars['String']>;
  aesthetics?: Maybe<Aesthetics>;
  blockchain?: Maybe<Scalars['String']>;
  collectionSlug?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  eth?: Maybe<Scalars['JSON']>;
  flow?: Maybe<Scalars['JSON']>;
  listings?: Maybe<Array<ActiveListing>>;
  listingsIndexed?: Maybe<ListingsIndexed>;
  media?: Maybe<Media>;
  network?: Maybe<Scalars['String']>;
  networkAddress?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  schema?: Maybe<Scalars['String']>;
  sol?: Maybe<Solana>;
  stats?: Maybe<Scalars['JSON']>;
  tokenId?: Maybe<Scalars['String']>;
  traits?: Maybe<Array<Trait>>;
  traitsIndexed?: Maybe<Array<TraitsIndexed>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  valuations?: Maybe<Scalars['JSON']>;
};

export type Notification = {
  _id: Scalars['ID'];
  communityId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  imageUrl?: Maybe<Scalars['String']>;
  isAcknowledged: Scalars['Boolean'];
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: NotificationTypeEnum;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  userId: Scalars['String'];
};

export type NotificationRule = {
  scope: Scope;
  type: NotificationTypeEnum;
};

export enum NotificationTypeEnum {
  PostMention = 'PostMention',
  PostReply = 'PostReply',
  ProposalNew = 'ProposalNew',
}

export type NotionalValue = {
  change?: Maybe<Scalars['Int']>;
  eth?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['String']>;
  usd?: Maybe<Scalars['Int']>;
};

export type OwnershipStats = {
  firstPurchase?: Maybe<FirstPurchase>;
  numOwned?: Maybe<Scalars['Float']>;
};

export type PaginatedComments = {
  docs?: Maybe<Array<Post>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Float']>;
  nextPage?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  pagingCounter?: Maybe<Scalars['Float']>;
  parentPostId?: Maybe<Scalars['String']>;
  prevPage?: Maybe<Scalars['Float']>;
  totalDocs?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type PaginatedGlobalListings = {
  docs: Array<GlobalListing>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  nextPage: Scalars['Int'];
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginatedNfts = {
  docs: Array<Nft>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginatedNotifications = {
  docs: Array<Notification>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginatedPosts = {
  docs?: Maybe<Array<Post>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Float']>;
  nextPage?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  pagingCounter?: Maybe<Scalars['Float']>;
  prevPage?: Maybe<Scalars['Float']>;
  totalDocs?: Maybe<Scalars['Float']>;
  totalPages?: Maybe<Scalars['Float']>;
};

export type PaginatedSubprojects = {
  docs: Array<Subproject>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PaginatedVotes = {
  docs: Array<Vote>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Palette = {
  darkMuted?: Maybe<Scalars['String']>;
  darkVibrant?: Maybe<Scalars['String']>;
  lightMuted?: Maybe<Scalars['String']>;
  lightVibrant?: Maybe<Scalars['String']>;
  muted?: Maybe<Scalars['String']>;
  vibrant?: Maybe<Scalars['String']>;
};

export type Post = {
  actingAs?: Maybe<Project>;
  attachments?: Maybe<Array<Attachment>>;
  author?: Maybe<UserAccount>;
  childrenCount?: Maybe<Scalars['Float']>;
  communityProfile?: Maybe<CommunityProfile>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  downvotes?: Maybe<Array<Scalars['String']>>;
  extDiscord?: Maybe<DiscordExtension>;
  extProposal?: Maybe<ProposalExtension>;
  extSnapshotProposal?: Maybe<SnapshotProposal>;
  fromDiscord?: Maybe<Scalars['Boolean']>;
  isProposal?: Maybe<Scalars['Boolean']>;
  labels?: Maybe<Array<PostLabel>>;
  markdown?: Maybe<Scalars['String']>;
  parentFeedId?: Maybe<Scalars['String']>;
  parentPostId?: Maybe<Scalars['String']>;
  permissions?: Maybe<PostPermissions>;
  platformUrl?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  preloadedComments?: Maybe<PaginatedComments>;
  project?: Maybe<Project>;
  reactions?: Maybe<Reactions>;
  rootPostId?: Maybe<Scalars['String']>;
  scope?: Maybe<Scope>;
  signatures?: Maybe<Array<Signature>>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PostTypeEnum>;
  upvotes?: Maybe<Array<Scalars['String']>>;
  userVotes?: Maybe<Array<UserVote>>;
  voteScore?: Maybe<Scalars['Float']>;
};

export type PostCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
};

export enum PostLabel {
  Announcement = 'Announcement',
  Pinned = 'Pinned',
  Reported = 'Reported',
}

export type PostPermissions = {
  canDeletePost?: Maybe<Scalars['Boolean']>;
  canInteractWithPost?: Maybe<Scalars['Boolean']>;
  canManagePost?: Maybe<Scalars['Boolean']>;
  canUpdatePost?: Maybe<Scalars['Boolean']>;
  canViewPost?: Maybe<Scalars['Boolean']>;
  canViewPostDownvoteAction?: Maybe<Scalars['Boolean']>;
  canViewPostUpvoteAction?: Maybe<Scalars['Boolean']>;
};

export enum PostTypeEnum {
  Announcement = 'Announcement',
  Discussion = 'Discussion',
}

export type Project = {
  aesthetics?: Maybe<ProjectAesthetics>;
  blockchain?: Maybe<Scalars['String']>;
  collectionSlug?: Maybe<Scalars['String']>;
  community?: Maybe<Community>;
  communityId?: Maybe<Scalars['String']>;
  contentful?: Maybe<ContentfulCollection>;
  contracts?: Maybe<Array<ProjectContract>>;
  coverImageUrl?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  externalData?: Maybe<ExternalData>;
  externalLinks?: Maybe<ExternalLinks>;
  listingStats?: Maybe<ListingStats>;
  logoImageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  platformUrl?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
  salesStats?: Maybe<SalesStats>;
  supplyStats?: Maybe<SupplyStats>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type ProjectAesthetics = {
  coverImageUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logoImageUrl?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type ProjectContract = {
  address?: Maybe<Scalars['String']>;
  blockchain?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
};

export type ProjectStats = {
  contributed?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['Float']>;
  shipped?: Maybe<Scalars['Float']>;
};

export type Proposal = {
  _id: Scalars['ID'];
  absentees: Array<Delegate>;
  ask?: Maybe<Scalars['String']>;
  auctionId?: Maybe<Scalars['String']>;
  blockchain: Scalars['String'];
  calldatas?: Maybe<Array<Scalars['String']>>;
  communityProfile?: Maybe<CommunityProfile>;
  contentful?: Maybe<ContentfulProposal>;
  creation?: Maybe<ProposalCreation>;
  customFields?: Maybe<ProposalCustomFields>;
  description?: Maybe<Scalars['String']>;
  endBlock?: Maybe<Scalars['Float']>;
  entityId: Scalars['String'];
  linkedPostId?: Maybe<Scalars['String']>;
  linkedSubprojectSlug?: Maybe<Scalars['String']>;
  metadata?: Maybe<ProposalMetadata>;
  network: Scalars['String'];
  options: Array<ProposalOption>;
  platformUrl?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  proposalId: Scalars['String'];
  proposer: Scalars['String'];
  quorumVotes?: Maybe<Scalars['String']>;
  quorumVotesDecimal?: Maybe<Scalars['Float']>;
  signatures?: Maybe<Array<Scalars['String']>>;
  startBlock?: Maybe<Scalars['Float']>;
  status: Scalars['GovernanceStatus'];
  strategy?: Maybe<ProposalStrategy>;
  targets?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  tokenContract?: Maybe<Scalars['String']>;
  totalUniqueVotes?: Maybe<Scalars['Int']>;
  totalVotes?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  uniqueId: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
  votes: Array<Vote>;
};

export type ProposalCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
};

export type ProposalContentfulArgs = {
  collectionSlug: Scalars['String'];
};

export type ProposalVotesArgs = {
  reason?: InputMaybe<Scalars['String']>;
};

export type ProposalChoice = {
  name?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['Float']>;
};

export type ProposalCreation = {
  block?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['DateTime']>;
  transactionHash?: Maybe<Scalars['String']>;
};

export type ProposalCustomFields = {
  labels?: Maybe<Array<Scalars['String']>>;
  links?: Maybe<Array<Link>>;
};

export type ProposalExtension = {
  author?: Maybe<CommunityProfile>;
  choices?: Maybe<Array<ProposalChoice>>;
  contract?: Maybe<Scalars['String']>;
  endBlock?: Maybe<Scalars['Float']>;
  endTimeStamp?: Maybe<Scalars['DateTime']>;
  project?: Maybe<ProposalProject>;
  proposalId: Scalars['String'];
  proposalThreshold?: Maybe<Scalars['Float']>;
  proposer: Scalars['String'];
  quorumVotes?: Maybe<Scalars['Float']>;
  startBlock?: Maybe<Scalars['Float']>;
  startTimeStamp?: Maybe<Scalars['DateTime']>;
  status: Scalars['String'];
};

export type ProposalMetadata = {
  endBlock?: Maybe<Scalars['Float']>;
  startBlock?: Maybe<Scalars['Float']>;
};

export type ProposalOption = {
  name?: Maybe<Scalars['String']>;
  optionId: Scalars['String'];
  presetVoteType?: Maybe<Scalars['String']>;
  uniqueVotes?: Maybe<Scalars['Float']>;
  voteCount?: Maybe<Scalars['Float']>;
};

export type ProposalPaginated = {
  collectionSlug?: Maybe<Scalars['String']>;
  docs: Array<Proposal>;
  entityId?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ProposalProject = {
  collectionSlug?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  projectId?: Maybe<Scalars['String']>;
};

export type ProposalStats = {
  breakdown?: Maybe<BasicGovBreakdown>;
  created?: Maybe<Scalars['Float']>;
  executed?: Maybe<Scalars['Float']>;
  executedRate?: Maybe<Scalars['Float']>;
  finalized?: Maybe<Scalars['Float']>;
};

export type ProposalStrategy = {
  proposalThreshold?: Maybe<Scalars['Float']>;
  quorumVotes?: Maybe<Scalars['Float']>;
};

export type Query = {
  absentees?: Maybe<Array<Delegate>>;
  accountDelegate?: Maybe<Scalars['String']>;
  /** Get all proposal metadata for static site generation. */
  allProposalUrls?: Maybe<Array<BasicProposalMetadata>>;
  blockNumber: Scalars['String'];
  commentAncestryTree?: Maybe<Post>;
  comments?: Maybe<PaginatedComments>;
  community: Community;
  communityBySlug: Community;
  communityMembers: CommunityMembers;
  communityProfile?: Maybe<CommunityProfile>;
  communityProfiles?: Maybe<CommunityProfilePaginated>;
  communityProfilesByUser?: Maybe<Array<CommunityProfile>>;
  communitySuggestions: Array<Community>;
  delegate?: Maybe<Delegate>;
  delegates?: Maybe<GovernanceDelegatesGraphPaginated>;
  entities?: Maybe<Array<GovernanceEntity>>;
  feed?: Maybe<Feed>;
  /** Get listings; currently supports only Solana. */
  getGlobalListings?: Maybe<PaginatedGlobalListings>;
  /** Get NFTS; currently supports only Solana. */
  getNfts?: Maybe<PaginatedNfts>;
  /** Get NFTs by address; currently supports only Solana. */
  getNftsByAddress?: Maybe<PaginatedNfts>;
  /** Get unread notifications count. */
  getUnreadNotificationsCount?: Maybe<Scalars['Int']>;
  historicalSocialEngagements?: Maybe<HistoricalStatsPaginated>;
  me: Me;
  memberActivity?: Maybe<CommunityActivityPaginated>;
  /** Get notifications for user. */
  notifications?: Maybe<PaginatedNotifications>;
  /** Get unread user notifications count. */
  notificationsUnreadCount: Scalars['Int'];
  post?: Maybe<Post>;
  posts?: Maybe<PaginatedPosts>;
  project?: Maybe<Project>;
  proposal?: Maybe<Proposal>;
  proposals?: Maybe<ProposalPaginated>;
  proposalsByCommunitySlug?: Maybe<Array<Proposal>>;
  subproject?: Maybe<Subproject>;
  subprojects?: Maybe<PaginatedSubprojects>;
  suggestionsByPhrase: Array<Suggestion>;
  suggestionsByScope: Array<Suggestion>;
  todoList: TodoList;
  topDelegatesWithVotes?: Maybe<Array<Delegate>>;
  votes?: Maybe<PaginatedVotes>;
};

export type QueryAbsenteesArgs = {
  entityId: Scalars['String'];
  proposalId: Scalars['String'];
};

export type QueryAccountDelegateArgs = {
  address: Scalars['String'];
  entityId: Scalars['String'];
};

export type QueryCommentAncestryTreeArgs = {
  postId: Scalars['String'];
};

export type QueryCommentsArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  parentPostId?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryCommunityArgs = {
  communityId: Scalars['String'];
};

export type QueryCommunityBySlugArgs = {
  slug: Scalars['String'];
};

export type QueryCommunityMembersArgs = {
  communityId: Scalars['String'];
  hasAnyOfRoles?: InputMaybe<Array<CommunityMemberRoleEnum>>;
  limit?: InputMaybe<Scalars['Float']>;
  page?: InputMaybe<Scalars['Float']>;
  search?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<CommunityMemberStatusEnum>;
};

export type QueryCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySlug?: InputMaybe<Scalars['String']>;
  ethAddress?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type QueryCommunityProfilesArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySlug?: InputMaybe<Scalars['String']>;
  ethAddressIn?: InputMaybe<Array<Scalars['String']>>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  skillsQuery?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['Int']>;
};

export type QueryCommunitySuggestionsArgs = {
  term: Scalars['String'];
};

export type QueryDelegateArgs = {
  address: Scalars['String'];
  entityId: Scalars['String'];
  type: Scalars['String'];
};

export type QueryDelegatesArgs = {
  entityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  type: Scalars['String'];
};

export type QueryEntitiesArgs = {
  entityIds: Array<Scalars['String']>;
};

export type QueryFeedArgs = {
  feedId: Scalars['String'];
};

export type QueryGetGlobalListingsArgs = {
  blockchain: Scalars['String'];
  filters?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Scalars['String']>;
  networkAddress?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
};

export type QueryGetNftsArgs = {
  blockchain: Scalars['String'];
  filters?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Scalars['String']>;
  networkAddress?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

export type QueryGetNftsByAddressArgs = {
  address: Scalars['String'];
  blockchain?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Scalars['String']>;
  networkAddress?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  projectId?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
  time?: InputMaybe<Scalars['String']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

export type QueryHistoricalSocialEngagementsArgs = {
  address: Scalars['String'];
  communityId: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
};

export type QueryMemberActivityArgs = {
  address?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySlug?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type QueryNotificationsArgs = {
  communityId?: InputMaybe<Scalars['String']>;
  isAcknowledged?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryPostArgs = {
  postId: Scalars['String'];
};

export type QueryPostsArgs = {
  authorId?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  excludeLabels?: InputMaybe<Array<PostLabel>>;
  feedId?: InputMaybe<Scalars['String']>;
  hasAnyOfLabels?: InputMaybe<Array<PostLabel>>;
  page?: InputMaybe<Scalars['Float']>;
  period?: InputMaybe<Scalars['String']>;
  skipCommentsPreloading?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
};

export type QueryProjectArgs = {
  blockchain: Scalars['String'];
  collectionSlug: Scalars['String'];
};

export type QueryProposalArgs = {
  collectionSlug: Scalars['String'];
  entityId: Scalars['String'];
  proposalId: Scalars['String'];
};

export type QueryProposalsArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  entityId?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
  nameIncludes?: InputMaybe<Scalars['String']>;
  page: Scalars['Int'];
  proposalStatus?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<Scalars['Int']>;
};

export type QueryProposalsByCommunitySlugArgs = {
  communitySlug: Scalars['String'];
  status?: InputMaybe<Scalars['String']>;
};

export type QuerySubprojectArgs = {
  slug: Scalars['String'];
};

export type QuerySubprojectsArgs = {
  address?: InputMaybe<Scalars['String']>;
  communityIds: Array<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type QuerySuggestionsByPhraseArgs = {
  phrase: Scalars['String'];
  types: Array<SearchTypeEnum>;
};

export type QuerySuggestionsByScopeArgs = {
  communityId: Scalars['String'];
  rootPostId: Scalars['String'];
};

export type QueryTopDelegatesWithVotesArgs = {
  entityId: Scalars['String'];
};

export type QueryVotesArgs = {
  entityIds?: InputMaybe<Array<Scalars['String']>>;
  ethAddress?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  proposalId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
};

export type Reactions = {
  byCount?: Maybe<Scalars['JSON']>;
  byUser?: Maybe<Scalars['JSON']>;
};

export type RecentVotingActivity = {
  total?: Maybe<Scalars['Float']>;
  votesCount?: Maybe<Scalars['Float']>;
};

export type RemoveMember = {
  userId?: Maybe<Scalars['String']>;
};

export type SalesStats = {
  volume?: Maybe<SalesVolume>;
};

export type SalesVolume = {
  period_1d?: Maybe<SalesVolumePeriod>;
  period_1hr?: Maybe<SalesVolumePeriod>;
  period_1mo?: Maybe<SalesVolumePeriod>;
  period_1w?: Maybe<SalesVolumePeriod>;
  period_3d?: Maybe<SalesVolumePeriod>;
  period_3mo?: Maybe<SalesVolumePeriod>;
  period_6hr?: Maybe<SalesVolumePeriod>;
  period_30min?: Maybe<SalesVolumePeriod>;
  period_all?: Maybe<SalesVolumePeriod>;
};

export type SalesVolumePeriod = {
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<SalesVolumeValue>;
};

export type SalesVolumeValue = {
  change?: Maybe<Scalars['Float']>;
  eth?: Maybe<Scalars['Float']>;
};

export type Scope = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ScopeInput = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export enum SearchTypeEnum {
  Projects = 'Projects',
  Users = 'Users',
}

export type Signature = {
  address?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
};

export type SnapshotExtension = {
  mainSpaceUrl?: Maybe<Scalars['String']>;
  subdomainNames?: Maybe<Array<Scalars['String']>>;
};

export type SnapshotInput = {
  proposalId?: InputMaybe<Scalars['String']>;
  spaceUrl?: InputMaybe<Scalars['String']>;
};

export type SnapshotProposal = {
  author?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<Scalars['String']>>;
  created: Scalars['Float'];
  discussion?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  ipfs?: Maybe<Scalars['String']>;
  network?: Maybe<Scalars['String']>;
  plugins?: Maybe<Scalars['JSON']>;
  proposalId?: Maybe<Scalars['String']>;
  quorum: Scalars['Float'];
  scores?: Maybe<Array<Scalars['Float']>>;
  scores_by_strategy?: Maybe<Scalars['JSON']>;
  scores_state?: Maybe<Scalars['String']>;
  scores_total?: Maybe<Scalars['Float']>;
  scores_updated?: Maybe<Scalars['Int']>;
  snapshot?: Maybe<Scalars['Float']>;
  space?: Maybe<Scalars['JSON']>;
  spaceUrl?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  strategies?: Maybe<Array<SnapshotStrategy>>;
  symbol: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['String']>;
};

export type SnapshotStrategy = {
  name: Scalars['String'];
  network: Scalars['String'];
  params: Scalars['JSON'];
};

export type SocialConnection = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<SocialTypes>;
  username?: Maybe<Scalars['String']>;
};

export enum SocialTypes {
  Discord = 'DISCORD',
  Twitter = 'TWITTER',
}

export type Solana = {
  blockTime?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['JSON']>;
  mintAddress?: Maybe<Scalars['String']>;
  ownerPublicKey?: Maybe<Scalars['String']>;
  tokenAddress?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};

export type StatMarketCap = {
  ranking?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<MarketCapNotionalValue>;
};

export type StatNumber = {
  ranking?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['Float']>;
};

export type Subproject = {
  communityIds: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  funding?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  images: Array<Scalars['String']>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ownerEthAddress: Scalars['String'];
  proposalIds?: Maybe<Array<Scalars['String']>>;
  proposals?: Maybe<Array<Proposal>>;
  rank: Scalars['Float'];
  slug: Scalars['String'];
  tagline: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  videoUrl?: Maybe<Scalars['String']>;
  votes: Array<Scalars['String']>;
  votesCount: Scalars['Float'];
  website: Scalars['String'];
};

export type Suggestion = {
  data?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SupplyStats = {
  marketCap?: Maybe<StatMarketCap>;
  totalSupply?: Maybe<StatNumber>;
  uniqueOwners?: Maybe<StatNumber>;
  uniqueTraits?: Maybe<StatNumber>;
};

export type TodoList = {
  proposalsByCommunityId?: Maybe<Array<Proposal>>;
};

export type TodoListProposalsByCommunityIdArgs = {
  communitySlug: Scalars['String'];
};

export type Trait = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TraitsIndexed = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['JSON']>;
};

export type TwitterProfile = {
  avatar?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateCommunityInput = {
  access?: InputMaybe<CommunityAccessEnum>;
  aesthetics?: InputMaybe<CommunityAestheticsInput>;
  description?: InputMaybe<Scalars['String']>;
  disablePostDownvotes?: InputMaybe<Scalars['Boolean']>;
  disablePostUpvotes?: InputMaybe<Scalars['Boolean']>;
  discordChannelId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  socialConnections?: InputMaybe<Array<GeneralSocialInput>>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<CommunityVisibilityEnum>;
};

export type UpdateFeedInput = {
  feedId?: InputMaybe<Scalars['String']>;
  postingAccess?: InputMaybe<FeedPostingAccessEnum>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<FeedTypeEnum>;
};

export type UpdatePostInput = {
  actingAsProjectId?: InputMaybe<Scalars['String']>;
  attachments?: InputMaybe<Array<AttachmentInput>>;
  content?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<PostLabel>>;
  markdown?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  createdAt?: Maybe<Scalars['DateTime']>;
  ethAddresses?: Maybe<Array<Scalars['String']>>;
  flowAddresses?: Maybe<Array<Scalars['String']>>;
  imageURL?: Maybe<Scalars['String']>;
  networkAddress?: Maybe<Scalars['String']>;
  socialConnections?: Maybe<Array<SocialConnection>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type UserAccount = {
  communityProfile?: Maybe<CommunityProfile>;
  ethAddresses?: Maybe<Array<Scalars['String']>>;
  imageURL?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UserAccountCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
  communitySlug?: InputMaybe<Scalars['String']>;
};

export type UserVote = {
  type: VoteTypeEnum;
  voter: User;
};

export type VideoUrls = {
  main?: Maybe<Scalars['String']>;
};

export type Vote = {
  _id: Scalars['ID'];
  blockchain: Scalars['String'];
  communityProfile?: Maybe<CommunityProfile>;
  countedInProposal: Scalars['Boolean'];
  entity: GovernanceEntity;
  entityId: Scalars['String'];
  governanceContract: Scalars['String'];
  network: Scalars['String'];
  optionId: Scalars['String'];
  presetVoteType?: Maybe<Scalars['String']>;
  proposal: Proposal;
  proposalId: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  tokenContract: Scalars['String'];
  type: Scalars['String'];
  uniqueId: Scalars['String'];
  vote?: Maybe<Scalars['String']>;
  voteId: Scalars['String'];
  voter: Scalars['String'];
  votes: Scalars['String'];
  votesDecimal: Scalars['Float'];
  weight: Scalars['Float'];
};

export type VoteCommunityProfileArgs = {
  collectionSlug?: InputMaybe<Scalars['String']>;
  communityId?: InputMaybe<Scalars['String']>;
};

export enum VoteTypeEnum {
  Down = 'DOWN',
  Up = 'UP',
}

export type VotingPower = {
  percentQuorum?: Maybe<Scalars['Float']>;
  percentTotal?: Maybe<Scalars['Float']>;
  tokens?: Maybe<Scalars['Float']>;
};

export type VotingStats = {
  breakdown?: Maybe<VotingStatsBreakdown>;
  participatedInCount?: Maybe<EntityBreakdown>;
  participationRate?: Maybe<EntityBreakdown>;
  votingOpportunities?: Maybe<EntityBreakdown>;
  votingPower?: Maybe<VotingPower>;
};

export type VotingStatsBreakdown = {
  abstainCount?: Maybe<Scalars['Float']>;
  againstCount?: Maybe<Scalars['Float']>;
  forCount?: Maybe<Scalars['Float']>;
  onChainCount?: Maybe<Scalars['Float']>;
  prophouseCount?: Maybe<Scalars['Float']>;
  recentOnChainActivity?: Maybe<RecentVotingActivity>;
};

export type SetCommunityProfileDto = {
  acknowledged?: Maybe<Scalars['Boolean']>;
  matchedCount?: Maybe<Scalars['Float']>;
  modifiedCount?: Maybe<Scalars['Float']>;
  upsertedCount?: Maybe<Scalars['Float']>;
  upsertedId?: Maybe<Scalars['JSON']>;
};
