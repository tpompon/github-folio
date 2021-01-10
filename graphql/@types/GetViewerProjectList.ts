/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewerProjectList
// ====================================================

export interface GetViewerProjectList_viewer_repositories_edges_node_languages_edges_node {
  __typename: "Language";
  /**
   * The name of the current language.
   */
  name: string;
  id: string;
  /**
   * The color defined for the current language.
   */
  color: string | null;
}

export interface GetViewerProjectList_viewer_repositories_edges_node_languages_edges {
  __typename: "LanguageEdge";
  node: GetViewerProjectList_viewer_repositories_edges_node_languages_edges_node;
  /**
   * The number of bytes of code written in the language.
   */
  size: number;
}

export interface GetViewerProjectList_viewer_repositories_edges_node_languages {
  __typename: "LanguageConnection";
  /**
   * The total size in bytes of files written in that language.
   */
  totalSize: number;
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of edges.
   */
  edges: (GetViewerProjectList_viewer_repositories_edges_node_languages_edges | null)[] | null;
}

export interface GetViewerProjectList_viewer_repositories_edges_node {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount: number;
  /**
   * The description of the repository.
   */
  description: string | null;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt: any;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: GetViewerProjectList_viewer_repositories_edges_node_languages | null;
}

export interface GetViewerProjectList_viewer_repositories_edges {
  __typename: "RepositoryEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetViewerProjectList_viewer_repositories_edges_node | null;
}

export interface GetViewerProjectList_viewer_repositories_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetViewerProjectList_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of edges.
   */
  edges: (GetViewerProjectList_viewer_repositories_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetViewerProjectList_viewer_repositories_pageInfo;
}

export interface GetViewerProjectList_viewer {
  __typename: "User";
  id: string;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetViewerProjectList_viewer_repositories;
}

export interface GetViewerProjectList {
  /**
   * The currently authenticated user.
   */
  viewer: GetViewerProjectList_viewer;
}

export interface GetViewerProjectListVariables {
  after?: string | null;
}
