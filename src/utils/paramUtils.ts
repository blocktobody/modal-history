import qs, { IParseOptions, IStringifyOptions, parse, ParsedQs } from 'qs';
import isString from 'lodash/isString';

export type ParsedParamType = string | ParsedQs | string[] | ParsedQs[];

export const stringifyOption = {
  encodeValuesOnly: true,
  skipNulls: true,
  arrayFormat: 'brackets',
  addQueryPrefix: true,
} as IStringifyOptions;

export const defaultOptions = {
  comma: true,
  ignoreQueryPrefix: true,
} as IParseOptions;

export function getParsedSearchParams(parameter?: {
  search?: string;
  parseOptions?: qs.IParseOptions;
}) {
  const { search, parseOptions } = parameter || {};

  const searchString = search ?? window.location.search;

  return parse(searchString, { ...defaultOptions, ...parseOptions });
}

export function getStringListParam(value: ParsedParamType) {
  if (!Array.isArray(value)) {
    return [];
  }

  if (value.length && !value.some((v: any) => !isString(v))) {
    return value as string[];
  }

  return [];
}
