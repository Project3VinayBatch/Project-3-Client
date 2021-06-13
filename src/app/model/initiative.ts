import { Files } from "./files";
import { User } from "./user";

export class Initiative {
    initiativeId:number;
    createdBy: number;
    title: string;
    description: string;
    pointOfContactId: number;
    state: InitiativeState;
    members: User[];
    files: Files[]
}

enum InitiativeState {
    COMPLETE,
    ACTIVE,
    INACTIVE,
  }
  
