export interface IAuthResponse {
   username: string 
   role?: string 
   token: string 
}

export interface IJwtPayload {
   id: number | string 
   sub: number 
   username: string 
   exp?: number
}