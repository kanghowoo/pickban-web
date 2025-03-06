export enum ErrorCode {
    ENTITY_NOT_FOUND = "C002",
    NOT_VERIFIED_USER = "U001",
    TOKEN_EXPIRED = "AU004",
    LOGIN_AUTHENTICATION_FAILED= 'AU003',    

}


export const ErrorMessage = {
    [ErrorCode.NOT_VERIFIED_USER]: "이메일 인증이 완료되지 않았습니다.",

}