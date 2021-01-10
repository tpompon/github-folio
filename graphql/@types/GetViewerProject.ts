/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetViewerProject
// ====================================================

export interface GetViewerProject_viewer_repository_languages_edges_node {
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

export interface GetViewerProject_viewer_repository_languages_edges {
  __typename: "LanguageEdge";
  node: GetViewerProject_viewer_repository_languages_edges_node;
  /**
   * The number of bytes of code written in the language.
   */
  size: number;
}

export interface GetViewerProject_viewer_repository_languages {
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
  edges: (GetViewerProject_viewer_repository_languages_edges | null)[] | null;
}

export interface GetViewerProject_viewer_repository_object_Commit {
  __typename: "Commit" | "Tag" | "Tree";
}

export interface GetViewerProject_viewer_repository_object_Blob {
  __typename: "Blob";
  /**
   * UTF8 text data or null if the Blob is binary
   */
  text: string | null;
}

export type GetViewerProject_viewer_repository_object = GetViewerProject_viewer_repository_object_Commit | GetViewerProject_viewer_repository_object_Blob;

export interface GetViewerProject_viewer_repository {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
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
  languages: GetViewerProject_viewer_repository_languages | null;
  /**
   * A Git object in the repository
   */
  object: GetViewerProject_viewer_repository_object | null;
}

export interface GetViewerProject_viewer {
  __typename: "User";
  id: string;
  /**
   * Find Repository.
   */
  repository: GetViewerProject_viewer_repository | null;
}

export interface GetViewerProject {
  /**
   * The currently authenticated user.
   */
  viewer: GetViewerProject_viewer;
}

export interface GetViewerProjectVariables {
  projectName: string;
}
