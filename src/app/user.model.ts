export interface SimpleUser {
    id: number,
    nickname: string,
}

export interface User extends SimpleUser {
    email: string,
}

export interface UserVerifySendRequest {
    email: string,
}

export interface UserPasswordResetSendRequest {
    email: string,
}