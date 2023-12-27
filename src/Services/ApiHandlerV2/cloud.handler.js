import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class CloudServices {



    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/cloud",
                    ac: "view_all",
                    company_id: getUserCompanyId()

                }
            })

            console.log({ cloudAllInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async getOne(cloudId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/cloud",
                    ac: "view_one",
                    id: cloudId,
                    company_id: getUserCompanyId()


                }
            })

            console.log({ cloudOneInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/cloud",
                    ac: "add",
                    // llave_3:"",
                    // llave_1:"",
                    // provider:"azure",
                    // name:"",
                    // desc:"",
                    // id:cloudId
                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            // console.log({ addCloud: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async modify(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/cloud",
                    ac: "mod",
                    // llave_3:"",
                    // llave_1:"",
                    // provider:"azure",
                    // name:"",
                    // desc:"",
                    // id:cloudId
                    company_id: getUserCompanyId(),
                    ...params

                }
            })

            console.log({ modifyCloud: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async delete(cloudId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/cloud",
                    ac: "del",
                    id: cloudId,
                    company_id: getUserCompanyId()
                }
            })

            // console.log({ deleteCloud: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}