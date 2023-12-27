import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class EndpointServices {

    static async getAll(mac_address) {
        console.log(mac_address.mac_address)
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "local_network/enp",
                    ac: "get_enp",
                    mac_address: mac_address.mac_address,
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
                    model: "local_network/enp",
                    ac: "delete_enp",
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