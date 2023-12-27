import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class PreferencesService {

    static async getAll(resourcesId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "companies/preferences",
                    company_id: getUserCompanyId(),
                }
            })

            console.log({ allPreferencesInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

}



