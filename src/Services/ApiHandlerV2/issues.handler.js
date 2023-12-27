import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class IssuesServices {




    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "issues/index",
                    company_id: getUserCompanyId(),
                    resource_address_domain: "clarin.com"


                }
            })

            console.log({ allIssuesInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async getOne(issueId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'issues/view',
                    issue_id: issueId,
                    company_id: getUserCompanyId()

                }
            })

            // console.log({ getIssue: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async addCSMessage(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'issues/cs',
                    ac: "add",
                    company_id: getUserCompanyId(),
                    ...params

                }
            })

            console.log({ addCSMessageResponse: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }
    }



    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'issues/add',
                    company_id: getUserCompanyId(),
                    ...params

                }
            })

            console.log({ addIssue: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async modify(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'issues/mod',
                    // id:3,
                    // risk_score=2,
                    //  name:"name",
                    //  main_desc:"descripcion",
                    resource_id: 1,
                    company_id: getUserCompanyId(),
                    resource_address_domain: "clarin.com"
                },
                body: {
                    ...params
                }
            })

            console.log({ modifyIssue: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async delete(issueId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'issues/del',
                    company_id: getUserCompanyId(),
                    id: issueId
                }
            })

            console.log({ deleteIssue: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }
}