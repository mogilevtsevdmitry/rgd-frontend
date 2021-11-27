export class JwtResponse {
  accessToken: {
    exp: number
    token: string
  } | undefined

  refreshToken: {
    exp: number
    token: string
  } | undefined

  user: {
    email: string
    role: string
  } | undefined
}
