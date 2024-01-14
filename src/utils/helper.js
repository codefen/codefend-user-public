import createUser from "../Store/user"

const { user } = createUser

/** Gets token in localStorage */
export const getToken = () => window.localStorage.getItem("token") ?? "";

/** Set token in localStorage */
export const setToken = (token) => window.localStorage.setItem("token", token);

/** custom baseApi */
export const getCustomBaseAPi = () => window.localStorage.getItem("baseApi") ?? "";

/** Set baseApi in localStorage */
export const setCustomBaseAPi = (baseApi) => window.localStorage.setItem("baseApi", baseApi);

/** delete custom base APi */
export const deleteCustomBaseAPi = (baseApi) => window.localStorage.removeItem("baseApi");



/** persist user data in localStorage */
export const persistUser = (userData = null) =>
    window.localStorage.setItem("user", JSON.stringify(userData));

/** persist user data in localStorage */
export const getUser = () => {
    const userData = window.localStorage.getItem("user");
    if (userData) return JSON.parse(userData);
    return userData;
};

/** set token and user data for Auth */
export const setAuth = (token, user) => {
    if (!(token && user)) return;
    setToken(token);
    persistUser(user);
};

/** clear token and user data for Auth */
export const clearAuth = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
};

/** Get resources  country locations and metric */
export const getCountryMetrics = (resources) => {
    if (!resources) return [];

    const domainsAndSubDomains = resources
        .reduce((acc, value) => {
            return value?.childs === null ? acc : acc.concat(value?.childs);
        }, [])
        .concat(resources);

    const countries = domainsAndSubDomains.reduce((acc, value) => {
        if (!value.server_pais_code || value.server_pais_code === "-") return acc;
        if (acc[value.server_pais_code]) {
            acc[value.server_pais_code].count++;
            return acc;
        } else {
            acc[value.server_pais_code] = {
                count: 1,
                country: value.server_pais,
                countryCode: value.server_pais_code,
                percentage: 1,
            };

            return acc;
        }
    }, {});

    const total = Object.keys(countries).reduce(
        (acc, value) => acc + countries[value].count,
        0
    );

    const data = Object.keys(countries).map((countryKey) => {
        return {
            ...countries[countryKey],
            percentage:
                Math.round((countries[countryKey].count / total) * 100 * 10) / 10,
        };
    });

    // console.log({ data, total });
    return data;
};

/** company metrics computation  */
export const getCompanyMetric = (resources = [], type) => {
    if (!resources) return "";
    if (type === "domain") {
        return resources.length;
    } else if (type === "subDomain") {
        return resources.reduce((acc, value) => {
            return value?.childs === null ? acc : value?.childs.length + acc;
        }, 0);
    } else if (type === "uniqueIp") {
        const domainsAndSubDomains = resources
            .reduce((acc, value) => {
                return value?.childs === null ? acc : acc.concat(value?.childs);
            }, [])
            .concat(resources);

        return domainsAndSubDomains.filter((resource, index, arr) => {
            return (
                arr.findIndex((r) => r.main_server === resource.main_server) === index
            );
        }).length;
    }

    return "";
};

/** Date formatter */
export const formatDate = (date, isNum) => {
    if (!date && typeof Date !== 'Date') return ''
    // const formattedDate = new Date(date).toLocaleDateString().replace(/\//ig, "-")
    const _date = isNum ? parseInt(date) * 1000 : date
    const formattedDate = new Date(_date).toISOString()
        .split("T")[0]
    return formattedDate


}

/** Get Auth User Company_id */

export const getUserCompanyId = () => {
    const userCompanyId = user().company_id
    return userCompanyId
}

/** Convert passed issue ID to params */

export const convertToIssueParams = (id) => {
    if (!id) return false
    // structure =>> issue_id_name_main_desc
    const idArr = id.split("_")

    return {
        issue_id: idArr[0],
        name: idArr[1],
        main_desc: idArr[2]
    }


}

/** group mobile Application data by name  */

export const getMobileDataGroup = (mobileData) => {
    if (!mobileData || mobileData.length === 0) return []

    const dataObj = mobileData.reduce((acc, data) => {
        const appName = data.app_name
        if (acc[appName]) {
            acc[appName].push(data)
        }
        else {
            acc[appName] = [data];
        }

        return acc
    }, {})


    return Object.values(dataObj)


}


/** calculate percentage  */

export const renderPercentage = (value, total) => {
    if (value === '0') {
        return "0%"
    }
    let percentValue = ((parseInt(value) / parseInt(total)) * 100).toFixed() + "%";

    return percentValue


}

/** Compute InternalNetwork OS And Count */
export const computeInternalNetworkOSAndCount = (internalNetwork) => {
    if (!Array.isArray(internalNetwork) || internalNetwork.length === 0) return {}



    const metrics = internalNetwork.reduce((acc, item) => {
        const osType = item.device_os;
        const childs = item.childs

        if (childs && childs.length !== 0) {
            childs.map(child => {
                const childOsType = child.device_os
                if (acc[childOsType]) {
                    acc[childOsType] += 1
                }
                else {
                    acc[childOsType] = 1
                }

            })

        }

        if (acc[osType]) {
            acc[osType] += 1
        }
        else {
            acc[osType] = 1
        }

        return acc

    }, {})

    const total = Object.values(metrics).reduce((acc, value) => value + acc, 0)
    return { total, ...metrics }

}

/** Compute Source Code metrics for source code screen */

export const computeSourceCodeMetrics = (sourceCode) => {
    if (!Array.isArray(sourceCode) || sourceCode.length === 0) return {}

    const metrics = sourceCode.reduce((acc, metric) => {
        const code = metric.source_code
        if (acc[code]) {
            acc[code] += 1
        }
        else {
            acc[code] = 1
        }

        return acc
    }, {})

    const total = Object.values(metrics).reduce((acc, value) => value + acc, 0)
    return { total, ...metrics }

}


/** verify if auth User Chat */

export const isUserChat = (id) => {
    if (!id) return false
    const userId = user().id
    // console.log({ userId, id });
    return userId == id

}

/** compute social roles */

export const computedRoles = (socials) => {
    if (!socials) return {}
    return socials.reduce((acc, social) => {
        if (acc[social.member_role]) {
            acc[social.member_role]++;
        }
        else {
            acc[social.member_role] = 1
        }

        return acc

    }, {})
}


/** check if  data is empty/zeros */

export const isEmptyData = (data) => {
    if (data.constructor !== Object) return true
    return Object.values(data).every(item => Boolean(item) == false || item == 0)

}


/** is Admin helper */

export const isUserAdmin = (user) => user.access_role === 'admin'
