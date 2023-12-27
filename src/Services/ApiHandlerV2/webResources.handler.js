import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class WebResources {


    static async get() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'resources/web/index',
                    childs: 'yes',
                    resource_address_domain: "clarin.com",
                    company_id: getUserCompanyId()
                }
            })

            // console.log({ webResources: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async deleteResource(resourceId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'resources/web/del',
                    resource_id: resourceId
                }
            })

            // console.log({ deleteResource: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async addResource(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'resources/web/add',
                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            // console.log({ addResource: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async addSubResource(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'resources/web/add/child',
                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            // console.log({ addResource: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async delete(issueId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'resources/web/del',
                    //company_id: getUserCompanyId(),
                    resource_id: issueId
                }
            })

            // console.log({ deleteIssue: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }
}