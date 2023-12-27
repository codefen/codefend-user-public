import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class SocialsServices {


    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/se",
                    ac: "view_all",
                    company_id: getUserCompanyId()
                }
            })

            console.log({ socialsInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async getOne(socialId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/se",
                    ac: "view_one",
                    id: socialId,
                    company_id: getUserCompanyId()


                }
            })

            console.log({ socialInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/se",
                    ac: "add",
                    // member_fname: "chris",
                    // member_lname: "russo",
                    // member_email: "chrisrusso@codefend.com",
                    // member_phone: "5491139393710",
                    // member_role: "developer",
                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            console.log({ addSocial: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async delete(socialId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/se",
                    ac: "del",
                    id: socialId,
                    company_id: getUserCompanyId()
                }
            })

            console.log({ deleteSocial: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}