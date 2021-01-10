/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewer
// ====================================================

export interface GetViewer_viewer_status {
  __typename: "UserStatus";
  /**
   * An emoji summarizing the user's status.
   */
  emoji: string | null;
  /**
   * A brief message describing what the user is doing.
   */
  message: string | null;
}

export interface GetViewer_viewer_repositories_nodes_languages_edges_node {
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

export interface GetViewer_viewer_repositories_nodes_languages_edges {
  __typename: "LanguageEdge";
  node: GetViewer_viewer_repositories_nodes_languages_edges_node;
  /**
   * The number of bytes of code written in the language.
   */
  size: number;
}

export interface GetViewer_viewer_repositories_nodes_languages {
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
  edges: (GetViewer_viewer_repositories_nodes_languages_edges | null)[] | null;
}

export interface GetViewer_viewer_repositories_nodes {
  __typename: "Repository";
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages: GetViewer_viewer_repositories_nodes_languages | null;
}

export interface GetViewer_viewer_repositories {
  __typename: "RepositoryConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetViewer_viewer_repositories_nodes | null)[] | null;
}

export interface GetViewer_viewer {
  __typename: "User";
  id: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The HTTP URL for this user
   */
  url: any;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The user's description of what they're currently doing.
   */
  status: GetViewer_viewer_status | null;
  /**
   * A list of repositories that the user owns.
   */
  repositories: GetViewer_viewer_repositories;
}

export interface GetViewer {
  /**
   * The currently authenticated user.
   */
  viewer: GetViewer_viewer;
}
