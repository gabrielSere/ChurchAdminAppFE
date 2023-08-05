export interface User
{
    id: string;
    name: string;
    email: string;
    avatar?: string;
    status?: string;
    type: UserType
}

export enum UserType

{
    superadmin = `superadmin`,
    admin = `admin`,
    member =  `member`
}


