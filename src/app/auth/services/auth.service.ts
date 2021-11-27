import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { UserDto } from '../../user/dto/user.dto'
import { Observable } from 'rxjs'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(user: {email: $email, password: $password}) {
      accessToken {
        exp
        token
      }
      refreshToken {
        exp
        token
      }
      user {
        email
        role
      }
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  submitted = false
  constructor(private apollo: Apollo) { }

  onSubmit() {}

  login(payload: UserDto): Observable<any> {
    // @ts-ignore
    return this.apollo.mutate({
      mutation: LOGIN, variables: {
        ...payload,
      },
    }).subscribe(s => console.log(s))
  }

}

/**
 * .subscribe((result: any) => {
      this.rates = result?.data?.rates;
      this.loading = result.loading;
      this.error = result.error;
    });
 */
