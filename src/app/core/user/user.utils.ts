import { UserType } from "./user.types";

export function isSuperAdmin(type: UserType){
    return type===UserType.superadmin
}

export function isAdmin(type: UserType){
    return type===UserType.admin
}

export function isMember(type: UserType){
    return type===UserType.member
}
