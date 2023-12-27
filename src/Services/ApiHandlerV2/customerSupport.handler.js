import { getUser, getUserCompanyId } from "../../utils/helper";
import { fetchFromApi, handleFetchError } from "./fetch";


export class CustomerSupportServices {

    static async getAll() {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: "cs/index",
                    ac: 'view_all',
                    company_id: getUserCompanyId(),

                }
            })

            console.log({ allTickets: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async getOne(ticketId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'cs/index',
                    ac: "view_one",
                    company_id: getUserCompanyId(),
                    id: ticketId

                }
            })

            console.log({ getOneTicket: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




    static async add(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'cs/index',
                    ac: 'add',
                    // condicion:"",
                    // cs_header:"",
                    // cs_body:"",
                    //dad_id:"",
                    user_id: getUser().id,
                    company_id: getUserCompanyId(),
                    ...params

                }
            })

            console.log({ addTicket: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




    static async modify(params) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'cs/index',
                    ac: "mod",
                    dad_id: "",
                    id: "",
                    user_id: getUser().id,
                    // condicion:"",
                    // cs_header:"",
                    // cs_body,dad_id:""
                    company_id: getUserCompanyId(),
                    ...params


                }
            })

            console.log({ modifyTicket: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }



    static async delete(ticketId) {
        try {
            const { data } = await fetchFromApi({
                params: {
                    model: 'cs/index',
                    ac: 'del',
                    id: ticketId,
                    company_id: getUserCompanyId()
                }
            })

            console.log({ deleteTicket: data });

            return data
        } catch (error) {
            handleFetchError(error)
        }

    }




}