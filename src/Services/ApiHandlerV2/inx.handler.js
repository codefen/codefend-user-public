import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";



export class InxServices {


    static async getPreviousSearches() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "offensive/inx",
                    ac: "view_previous",
                    company_id: getUserCompanyId()
                }
            })
            console.log({ InxPreviousSearches: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }
    }

    static async initializeSearch(term) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "offensive/inx",
                    ac: "init_search",
                    term: term,
                    company_id: getUserCompanyId()
                }
            })
            console.log({ InxPreviousSearches: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }
    }

    static async search(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "offensive/inx",
                    ac: "search",
                    company_id: getUserCompanyId(),
                    ...params
                }
            })
            console.log({ InxPreviousSearches: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }
    }

    static async preview(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "offensive/inx",
                    ac: "preview",
                    company_id: getUserCompanyId(),
                    ...params
                }
            })
            console.log({ InxPreviousSearches: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }
    }

    static async read(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "offensive/inx",
                    ac: "read",
                    company_id: getUserCompanyId(),
                    ...params
                }
            })
            console.log({ InxPreviousSearches: data });
            return data
        } catch (error) {
            handleFetchError(error)
        }
    }
}