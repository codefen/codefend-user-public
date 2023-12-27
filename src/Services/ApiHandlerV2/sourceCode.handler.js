import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class SourceCodeServices {


    static async getAll() {

        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/source",
                    ac: "view_all",
                    company_id: getUserCompanyId()
                }
            })

            console.log({ sourceCodeAll: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async getOne(sourceId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/source",
                    ac: "view_one",
                    id: sourceId,
                    company_id: getUserCompanyId()


                }
            })

            console.log({ getOneSocial: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/source",
                    ac: "add",
                    // name:"",
                    // access_link:"",
                    // source_code:"",
                    // is_public:""


                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            console.log({ addSourceCode: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async modify(sourceId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/source",
                    ac: "mod",
                    id: sourceId,
                    company_id: getUserCompanyId()

                }
            })

            console.log({ modifySource: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async delete(sourceId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "del",
                    id: sourceId,
                    company_id: getUserCompanyId()
                }
            })

            console.log({ deleteSource: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}