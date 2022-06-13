import { kebabToCamel } from 'utils/kebabToCamel';
import { UsersResumeData } from './UsersProfile.types';

function parseResponse(raw: unknown): UsersResumeData {
  const arr = Object.entries(raw as Record<string, unknown>);
  const parsed = arr.map(r => [kebabToCamel(r[0]), r[1]]);
  return Object.fromEntries(parsed);
}

export { parseResponse };
