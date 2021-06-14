import { User } from './user';

export interface Initiative {
  initiativeId: number;
  createdBy: number;
  title: string;
  description: string;
  pointOfContactId: number;
  state: InitiativeState;
  members: User[];
}

enum InitiativeState {
  COMPLETE,
  ACTIVE,
  INACTIVE,
}
