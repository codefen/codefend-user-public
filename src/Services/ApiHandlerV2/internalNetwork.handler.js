import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class InternalNetworkServices {

    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/lan",
                    ac: "view_all",
                    company_id: getUserCompanyId()
                }
            })
            console.log({ internalNetworkAll: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async getOne(lanId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/lan",
                    ac: "view_one",
                    id: lanId,
                    company_id: getUserCompanyId()


                }
            })

            console.log({ getOneLan: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/lan",
                    ac: "add",

                    // device_name:"",
                    // device_version:"",
                    // access_username:"",
                    // access_password:"",

                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            console.log({ addInternalNetwork: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async modify(lanId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/lan",
                    ac: "mod",
                    id: lanId,
                    company_id: getUserCompanyId()

                }
            })

            console.log({ modifyInterNetwork: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async delete(lanId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/lan",
                    ac: "del",
                    id: lanId,
                    company_id: getUserCompanyId()
                }
            })

            console.log({ deleteInternalNetwork: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}