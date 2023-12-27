import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class CompanyServices {


    static async get() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "companies/dashboard",
                    company_id: getUserCompanyId()
                }
            })
            // console.log({ CompanyInfo: data });

            return data

        } catch (error) {
            handleFetchError(error)
        }

    }

}