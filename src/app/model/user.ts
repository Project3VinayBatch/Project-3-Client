import { Initiative } from "./initiative";
import { Files } from "./files";

export class User {
    id: number;
    username: string;
    password: string;
    role: string;
    initiatives: Initiative[];
    files: Files[];
}
