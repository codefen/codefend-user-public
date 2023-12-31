import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class EndpointServices {

    static async getAll(mac_address) {
        console.log(mac_address.mac_address)
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/devices",
                    ac: "view_one",
                    mac_address: mac_address.mac_address,
                    //should work using device_id
                    company_id: getUserCompanyId()
                }
            })
            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async delete(enpId) {
        console.log(enpId)
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/devices",
                    ac: "del",
                    id: enpId,
                    company_id: getUserCompanyId()
                }
            })

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}