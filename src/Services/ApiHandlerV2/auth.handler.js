import { fetchFromApi, handleFetchError } from "./fetch";
import jwt_decode from "jwt-decode";
import createUser from "../../Store/user";
import { setAuth } from "../../utils/helper";



const { setUser } = createUser;

export class AuthService {

    static async sessionHandler(loginParams) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'users/access',
                    ...loginParams
                }
            })
            const token = data.session
            if (token) {
                const decodedToken = jwt_decode(token)
                const userData = { ...data.user, exp: decodedToken.exp ?? 0 }
                console.log('here in singin now...');

                setAuth(token, userData)
                setUser(userData);
                console.log('here in singin now here');

                console.log({ decodedToken, userData });


                return { userData, data }
            }



        } catch (error) {
            handleFetchError(error)
        }
    }

    static async registerHandler(signUpParams) {


        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'users/new',
                    ...signUpParams
                }
            })
            console.log({ registrationData: data });

            return data


        } catch (error) {
            handleFetchError(error)
        }
    }

    static async registerFinishHandler(signUpParams) {
        try {
            const { data, status } = await fetchFromApi({
                params: {
                    model: 'users/new',
                    phase: 2,
                    ...signUpParams
                }
            })

            console.log({ registrationData: data });

            return { data, status }


        } catch (error) {
            if (error.response) {
                const { data, status } = error.response
                return { data, status }
            }

            return handleFetchError(error)
        }
    }


}
