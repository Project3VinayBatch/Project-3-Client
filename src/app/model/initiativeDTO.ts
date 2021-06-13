import { User } from './user';

export class InitiativeDTO {
  public constructor(
    createdBy: number,
    title: string,
    description: string,
    pointOfContact: number
  ) {
    this.createdBy = createdBy;
    this.title = title;
    this.description = description;
    this.pointOfContact = pointOfContact;
    this.state = InitiativeState.ACTIVE;
    this.members = null;
  }

  private createdBy: number;
  private title: string;
  private description: string;
  private pointOfContact: number;
  private members: User[];
  private state: InitiativeState;
}

enum InitiativeState {
  COMPLETE,
  ACTIVE,
  INACTIVE,
}
