/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ActionsInvocationMetadata {
  creatingWorkspaceFilePath: string;
  uniqueIdentifier: string;
  schemeIdentifier?: EntityIdentifier;
}
export interface EntityIdentifier {
  entityName: string;
  containerName: string;
  entityType: string;
  sharedState: string;
}
