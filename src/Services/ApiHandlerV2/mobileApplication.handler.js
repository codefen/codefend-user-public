import toast from "solid-toast";
import { getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class MobileApplicationServices {


    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "view_all",
                    company_id: getUserCompanyId()



                }
            })

            // console.log({ mobileAppAllInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async getOne(mobileId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "view_one",
                    id: mobileId,
                    company_id: getUserCompanyId()


                }
            })

            // console.log({ mobileAppOneInfo: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "add",
                    // app_apple_link: "",
                    // app_android_link: "",
                    company_id: getUserCompanyId(),
                    ...params
                }
            })

            // console.log({ addMobileApp: data })

            if (data?.android_error || data?.apple_error) {
                toast.error(data.android_info)
                throw new error(data.android_info)

            }

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }

    static async modify(mobileId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "mod",
                    id: mobileId,
                    company_id: getUserCompanyId()

                }
            })

            // console.log({ modifyMobileApp: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }


    static async delete(mobileId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "resources/mobile",
                    ac: "del",
                    id: mobileId,
                    company_id: getUserCompanyId()
                }
            })

            // console.log({ deleteMobile: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}