import { Initiative } from './initiative';
import { Files } from './files';
import { R3PartialDeclaration } from '@angular/compiler';

export class User {
  id: number;
  username: string;
  role: Role;
  initiatives: Initiative[];
  files: Files[];
}

enum Role {
  ADMIN,
  USER,
}
