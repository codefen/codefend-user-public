const defaultCountries = [
    {
        name: "Afghanistan",
        alpha2Code: "AF",
        alpha3Code: "AFG",
        numericCode: "004",
        currencies: [
            {
                code: "AFN",
                name: "Afghan afghani",
                symbol: "؋",
            },
        ],
        flag: "🇦🇫",
        callingCodes: ["93"],
    },
    {
        name: "Åland Islands",
        alpha2Code: "AX",
        alpha3Code: "ALA",
        numericCode: "248",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇦🇽",
        callingCodes: ["358"],
    },
    {
        name: "Albania",
        alpha2Code: "AL",
        alpha3Code: "ALB",
        numericCode: "008",
        currencies: [
            {
                code: "ALL",
                name: "Albanian lek",
                symbol: "L",
            },
        ],
        flag: "🇦🇱",
        callingCodes: ["355"],
    },
    {
        name: "Algeria",
        alpha2Code: "DZ",
        alpha3Code: "DZA",
        numericCode: "012",
        currencies: [
            {
                code: "DZD",
                name: "Algerian dinar",
                symbol: "د.ج",
            },
        ],
        flag: "🇩🇿",
        callingCodes: ["213"],
    },
    {
        name: "American Samoa",
        alpha2Code: "AS",
        alpha3Code: "ASM",
        numericCode: "016",
        currencies: [
            {
                code: "USD",
                name: "United State Dollar",
                symbol: "$",
            },
        ],
        flag: "🇦🇸",
        callingCodes: ["1684"],
    },
    {
        name: "Andorra",
        alpha2Code: "AD",
        alpha3Code: "AND",
        numericCode: "020",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇦🇩",
        callingCodes: ["376"],
    },
    {
        name: "Angola",
        alpha2Code: "AO",
        alpha3Code: "AGO",
        numericCode: "024",
        currencies: [
            {
                code: "AOA",
                name: "Angolan kwanza",
                symbol: "Kz",
            },
        ],
        flag: "🇦🇴",
        callingCodes: ["244"],
    },
    {
        name: "Anguilla",
        alpha2Code: "AI",
        alpha3Code: "AIA",
        numericCode: "660",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇦🇮",
        callingCodes: ["1264"],
    },
    {
        name: "Antarctica",
        alpha2Code: "AQ",
        alpha3Code: "ATA",
        numericCode: "010",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
        ],
        flag: "🇦🇶",
        callingCodes: ["672"],
    },
    {
        name: "Antigua and Barbuda",
        alpha2Code: "AG",
        alpha3Code: "ATG",
        numericCode: "028",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇦🇬",
        callingCodes: ["1268"],
    },
    {
        name: "Argentina",
        alpha2Code: "AR",
        alpha3Code: "ARG",
        numericCode: "032",
        currencies: [
            {
                code: "ARS",
                name: "Argentine peso",
                symbol: "$",
            },
        ],
        flag: "🇦🇷",
        callingCodes: ["54"],
    },
    {
        name: "Armenia",
        alpha2Code: "AM",
        alpha3Code: "ARM",
        numericCode: "051",
        currencies: [
            {
                code: "AMD",
                name: "Armenian dram",
                symbol: null,
            },
        ],
        flag: "🇦🇲",
        callingCodes: ["374"],
    },
    {
        name: "Aruba",
        alpha2Code: "AW",
        alpha3Code: "ABW",
        numericCode: "533",
        currencies: [
            {
                code: "AWG",
                name: "Aruban florin",
                symbol: "ƒ",
            },
        ],
        flag: "🇦🇼",
        callingCodes: ["297"],
    },
    {
        name: "Australia",
        alpha2Code: "AU",
        alpha3Code: "AUS",
        numericCode: "036",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
        ],
        flag: "🇦🇺",
        callingCodes: ["61"],
    },
    {
        name: "Austria",
        alpha2Code: "AT",
        alpha3Code: "AUT",
        numericCode: "040",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇦🇹",
        callingCodes: ["43"],
    },
    {
        name: "Azerbaijan",
        alpha2Code: "AZ",
        alpha3Code: "AZE",
        numericCode: "031",
        currencies: [
            {
                code: "AZN",
                name: "Azerbaijani manat",
                symbol: null,
            },
        ],
        flag: "🇦🇿",
        callingCodes: ["994"],
    },
    {
        name: "Bahamas",
        alpha2Code: "BS",
        alpha3Code: "BHS",
        numericCode: "044",
        currencies: [
            {
                code: "BSD",
                name: "Bahamian dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇸",
        callingCodes: ["1242"],
    },
    {
        name: "Bahrain",
        alpha2Code: "BH",
        alpha3Code: "BHR",
        numericCode: "048",
        currencies: [
            {
                code: "BHD",
                name: "Bahraini dinar",
                symbol: ".د.ب",
            },
        ],
        flag: "🇧🇭",
        callingCodes: ["973"],
    },
    {
        name: "Bangladesh",
        alpha2Code: "BD",
        alpha3Code: "BGD",
        numericCode: "050",
        currencies: [
            {
                code: "BDT",
                name: "Bangladeshi taka",
                symbol: "৳",
            },
        ],
        flag: "🇧🇩",
        callingCodes: ["880"],
    },
    {
        name: "Barbados",
        alpha2Code: "BB",
        alpha3Code: "BRB",
        numericCode: "052",
        currencies: [
            {
                code: "BBD",
                name: "Barbadian dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇧",
        callingCodes: ["1246"],
    },
    {
        name: "Belarus",
        alpha2Code: "BY",
        alpha3Code: "BLR",
        numericCode: "112",
        currencies: [
            {
                code: "BYN",
                name: "New Belarusian ruble",
                symbol: "Br",
            },
            {
                code: "BYR",
                name: "Old Belarusian ruble",
                symbol: "Br",
            },
        ],
        flag: "🇧🇾",
        callingCodes: ["375"],
    },
    {
        name: "Belgium",
        alpha2Code: "BE",
        alpha3Code: "BEL",
        numericCode: "056",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇧🇪",
        callingCodes: ["32"],
    },
    {
        name: "Belize",
        alpha2Code: "BZ",
        alpha3Code: "BLZ",
        numericCode: "084",
        currencies: [
            {
                code: "BZD",
                name: "Belize dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇿",
        callingCodes: ["501"],
    },
    {
        name: "Benin",
        alpha2Code: "BJ",
        alpha3Code: "BEN",
        numericCode: "204",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇧🇯",
        callingCodes: ["229"],
    },
    {
        name: "Bermuda",
        alpha2Code: "BM",
        alpha3Code: "BMU",
        numericCode: "060",
        currencies: [
            {
                code: "BMD",
                name: "Bermudian dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇲",
        callingCodes: ["1441"],
    },
    {
        name: "Bhutan",
        alpha2Code: "BT",
        alpha3Code: "BTN",
        numericCode: "064",
        currencies: [
            {
                code: "BTN",
                name: "Bhutanese ngultrum",
                symbol: "Nu.",
            },
            {
                code: "INR",
                name: "Indian rupee",
                symbol: "₹",
            },
        ],
        flag: "🇧🇹",
        callingCodes: ["975"],
    },
    {
        name: "Bolivia (Plurinational State of)",
        alpha2Code: "BO",
        alpha3Code: "BOL",
        numericCode: "068",
        currencies: [
            {
                code: "BOB",
                name: "Bolivian boliviano",
                symbol: "Bs.",
            },
        ],
        flag: "🇧🇴",
        callingCodes: ["591"],
    },
    {
        name: "Bonaire, Sint Eustatius and Saba",
        alpha2Code: "BQ",
        alpha3Code: "BES",
        numericCode: "535",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇶",
        callingCodes: ["5997"],
    },
    {
        name: "Bosnia and Herzegovina",
        alpha2Code: "BA",
        alpha3Code: "BIH",
        numericCode: "070",
        currencies: [
            {
                code: "BAM",
                name: "Bosnia and Herzegovina convertible mark",
                symbol: null,
            },
        ],
        flag: "🇧🇦",
        callingCodes: ["387"],
    },
    {
        name: "Botswana",
        alpha2Code: "BW",
        alpha3Code: "BWA",
        numericCode: "072",
        currencies: [
            {
                code: "BWP",
                name: "Botswana pula",
                symbol: "P",
            },
        ],
        flag: "🇧🇼",
        callingCodes: ["267"],
    },
    {
        name: "Bouvet Island",
        alpha2Code: "BV",
        alpha3Code: "BVT",
        numericCode: "074",
        currencies: [
            {
                code: "NOK",
                name: "Norwegian krone",
                symbol: "kr",
            },
        ],
        flag: "🇧🇻",
        callingCodes: [""],
    },
    {
        name: "Brazil",
        alpha2Code: "BR",
        alpha3Code: "BRA",
        numericCode: "076",
        currencies: [
            {
                code: "BRL",
                name: "Brazilian real",
                symbol: "R$",
            },
        ],
        flag: "🇧🇷",
        callingCodes: ["55"],
    },
    {
        name: "British Indian Ocean Territory",
        alpha2Code: "IO",
        alpha3Code: "IOT",
        numericCode: "086",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇮🇴",
        callingCodes: ["246"],
    },
    {
        name: "United States Minor Outlying Islands",
        alpha2Code: "UM",
        alpha3Code: "UMI",
        numericCode: "581",
        currencies: [
            {
                code: "USD",
                name: "United States Dollar",
                symbol: "$",
            },
        ],
        flag: "🇺🇲",
        callingCodes: [""],
    },
    {
        name: "Virgin Islands (British)",
        alpha2Code: "VG",
        alpha3Code: "VGB",
        numericCode: "092",
        currencies: [
            {
                code: null,
                name: "[D]",
                symbol: "$",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇻🇬",
        callingCodes: ["1284"],
    },
    {
        name: "Virgin Islands (U.S.)",
        alpha2Code: "VI",
        alpha3Code: "VIR",
        numericCode: "850",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇻🇮",
        callingCodes: ["1 340"],
    },
    {
        name: "Brunei Darussalam",
        alpha2Code: "BN",
        alpha3Code: "BRN",
        numericCode: "096",
        currencies: [
            {
                code: "BND",
                name: "Brunei dollar",
                symbol: "$",
            },
            {
                code: "SGD",
                name: "Singapore dollar",
                symbol: "$",
            },
        ],
        flag: "🇧🇳",
        callingCodes: ["673"],
    },
    {
        name: "Bulgaria",
        alpha2Code: "BG",
        alpha3Code: "BGR",
        numericCode: "100",
        currencies: [
            {
                code: "BGN",
                name: "Bulgarian lev",
                symbol: "лв",
            },
        ],
        flag: "🇧🇬",
        callingCodes: ["359"],
    },
    {
        name: "Burkina Faso",
        alpha2Code: "BF",
        alpha3Code: "BFA",
        numericCode: "854",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇧🇫",
        callingCodes: ["226"],
    },
    {
        name: "Burundi",
        alpha2Code: "BI",
        alpha3Code: "BDI",
        numericCode: "108",
        currencies: [
            {
                code: "BIF",
                name: "Burundian franc",
                symbol: "Fr",
            },
        ],
        flag: "🇧🇮",
        callingCodes: ["257"],
    },
    {
        name: "Cambodia",
        alpha2Code: "KH",
        alpha3Code: "KHM",
        numericCode: "116",
        currencies: [
            {
                code: "KHR",
                name: "Cambodian riel",
                symbol: "៛",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇰🇭",
        callingCodes: ["855"],
    },
    {
        name: "Cameroon",
        alpha2Code: "CM",
        alpha3Code: "CMR",
        numericCode: "120",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇲",
        callingCodes: ["237"],
    },
    {
        name: "Canada",
        alpha2Code: "CA",
        alpha3Code: "CAN",
        numericCode: "124",
        currencies: [
            {
                code: "CAD",
                name: "Canadian dollar",
                symbol: "$",
            },
        ],
        flag: "🇨🇦",
        callingCodes: ["1"],
    },
    {
        name: "Cabo Verde",
        alpha2Code: "CV",
        alpha3Code: "CPV",
        numericCode: "132",
        currencies: [
            {
                code: "CVE",
                name: "Cape Verdean escudo",
                symbol: "Esc",
            },
        ],
        flag: "🇨🇻",
        callingCodes: ["238"],
    },
    {
        name: "Cayman Islands",
        alpha2Code: "KY",
        alpha3Code: "CYM",
        numericCode: "136",
        currencies: [
            {
                code: "KYD",
                name: "Cayman Islands dollar",
                symbol: "$",
            },
        ],
        flag: "🇰🇾",
        callingCodes: ["1345"],
    },
    {
        name: "Central African Republic",
        alpha2Code: "CF",
        alpha3Code: "CAF",
        numericCode: "140",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇫",
        callingCodes: ["236"],
    },
    {
        name: "Chad",
        alpha2Code: "TD",
        alpha3Code: "TCD",
        numericCode: "148",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇹🇩",
        callingCodes: ["235"],
    },
    {
        name: "Chile",
        alpha2Code: "CL",
        alpha3Code: "CHL",
        numericCode: "152",
        currencies: [
            {
                code: "CLP",
                name: "Chilean peso",
                symbol: "$",
            },
        ],
        flag: "🇨🇱",
        callingCodes: ["56"],
    },
    {
        name: "China",
        alpha2Code: "CN",
        alpha3Code: "CHN",
        numericCode: "156",
        currencies: [
            {
                code: "CNY",
                name: "Chinese yuan",
                symbol: "¥",
            },
        ],
        flag: "🇨🇳",
        callingCodes: ["86"],
    },
    {
        name: "Christmas Island",
        alpha2Code: "CX",
        alpha3Code: "CXR",
        numericCode: "162",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
        ],
        flag: "🇨🇽",
        callingCodes: ["61"],
    },
    {
        name: "Cocos (Keeling) Islands",
        alpha2Code: "CC",
        alpha3Code: "CCK",
        numericCode: "166",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
        ],
        flag: "🇨🇨",
        callingCodes: ["61"],
    },
    {
        name: "Colombia",
        alpha2Code: "CO",
        alpha3Code: "COL",
        numericCode: "170",
        currencies: [
            {
                code: "COP",
                name: "Colombian peso",
                symbol: "$",
            },
        ],
        flag: "🇨🇴",
        callingCodes: ["57"],
    },
    {
        name: "Comoros",
        alpha2Code: "KM",
        alpha3Code: "COM",
        numericCode: "174",
        currencies: [
            {
                code: "KMF",
                name: "Comorian franc",
                symbol: "Fr",
            },
        ],
        flag: "🇰🇲",
        callingCodes: ["269"],
    },
    {
        name: "Congo",
        alpha2Code: "CG",
        alpha3Code: "COG",
        numericCode: "178",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇬",
        callingCodes: ["242"],
    },
    {
        name: "Congo (Democratic Republic of the)",
        alpha2Code: "CD",
        alpha3Code: "COD",
        numericCode: "180",
        currencies: [
            {
                code: "CDF",
                name: "Congolese franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇩",
        callingCodes: ["243"],
    },
    {
        name: "Cook Islands",
        alpha2Code: "CK",
        alpha3Code: "COK",
        numericCode: "184",
        currencies: [
            {
                code: "NZD",
                name: "New Zealand dollar",
                symbol: "$",
            },
            {
                code: "CKD",
                name: "Cook Islands dollar",
                symbol: "$",
            },
        ],
        flag: "🇨🇰",
        callingCodes: ["682"],
    },
    {
        name: "Costa Rica",
        alpha2Code: "CR",
        alpha3Code: "CRI",
        numericCode: "188",
        currencies: [
            {
                code: "CRC",
                name: "Costa Rican colón",
                symbol: "₡",
            },
        ],
        flag: "🇨🇷",
        callingCodes: ["506"],
    },
    {
        name: "Croatia",
        alpha2Code: "HR",
        alpha3Code: "HRV",
        numericCode: "191",
        currencies: [
            {
                code: "HRK",
                name: "Croatian kuna",
                symbol: "kn",
            },
        ],
        flag: "🇭🇷",
        callingCodes: ["385"],
    },
    {
        name: "Cuba",
        alpha2Code: "CU",
        alpha3Code: "CUB",
        numericCode: "192",
        currencies: [
            {
                code: "CUC",
                name: "Cuban convertible peso",
                symbol: "$",
            },
            {
                code: "CUP",
                name: "Cuban peso",
                symbol: "$",
            },
        ],
        flag: "🇨🇺",
        callingCodes: ["53"],
    },
    {
        name: "Curaçao",
        alpha2Code: "CW",
        alpha3Code: "CUW",
        numericCode: "531",
        currencies: [
            {
                code: "ANG",
                name: "Netherlands Antillean guilder",
                symbol: "ƒ",
            },
        ],
        flag: "🇨🇼",
        callingCodes: ["599"],
    },
    {
        name: "Cyprus",
        alpha2Code: "CY",
        alpha3Code: "CYP",
        numericCode: "196",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇨🇾",
        callingCodes: ["357"],
    },
    {
        name: "Czech Republic",
        alpha2Code: "CZ",
        alpha3Code: "CZE",
        numericCode: "203",
        currencies: [
            {
                code: "CZK",
                name: "Czech koruna",
                symbol: "Kč",
            },
        ],
        flag: "🇨🇿",
        callingCodes: ["420"],
    },
    {
        name: "Denmark",
        alpha2Code: "DK",
        alpha3Code: "DNK",
        numericCode: "208",
        currencies: [
            {
                code: "DKK",
                name: "Danish krone",
                symbol: "kr",
            },
        ],
        flag: "🇩🇰",
        callingCodes: ["45"],
    },
    {
        name: "Djibouti",
        alpha2Code: "DJ",
        alpha3Code: "DJI",
        numericCode: "262",
        currencies: [
            {
                code: "DJF",
                name: "Djiboutian franc",
                symbol: "Fr",
            },
        ],
        flag: "🇩🇯",
        callingCodes: ["253"],
    },
    {
        name: "Dominica",
        alpha2Code: "DM",
        alpha3Code: "DMA",
        numericCode: "212",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇩🇲",
        callingCodes: ["1767"],
    },
    {
        name: "Dominican Republic",
        alpha2Code: "DO",
        alpha3Code: "DOM",
        numericCode: "214",
        currencies: [
            {
                code: "DOP",
                name: "Dominican peso",
                symbol: "$",
            },
        ],
        flag: "🇩🇴",
        callingCodes: ["1809", "1829", "1849"],
    },
    {
        name: "Ecuador",
        alpha2Code: "EC",
        alpha3Code: "ECU",
        numericCode: "218",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇪🇨",
        callingCodes: ["593"],
    },
    {
        name: "Egypt",
        alpha2Code: "EG",
        alpha3Code: "EGY",
        numericCode: "818",
        currencies: [
            {
                code: "EGP",
                name: "Egyptian pound",
                symbol: "£",
            },
        ],
        flag: "🇪🇬",
        callingCodes: ["20"],
    },
    {
        name: "El Salvador",
        alpha2Code: "SV",
        alpha3Code: "SLV",
        numericCode: "222",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇸🇻",
        callingCodes: ["503"],
    },
    {
        name: "Equatorial Guinea",
        alpha2Code: "GQ",
        alpha3Code: "GNQ",
        numericCode: "226",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇬🇶",
        callingCodes: ["240"],
    },
    {
        name: "Eritrea",
        alpha2Code: "ER",
        alpha3Code: "ERI",
        numericCode: "232",
        currencies: [
            {
                code: "ERN",
                name: "Eritrean nakfa",
                symbol: "Nfk",
            },
        ],
        flag: "🇪🇷",
        callingCodes: ["291"],
    },
    {
        name: "Estonia",
        alpha2Code: "EE",
        alpha3Code: "EST",
        numericCode: "233",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇪🇪",
        callingCodes: ["372"],
    },
    {
        name: "Ethiopia",
        alpha2Code: "ET",
        alpha3Code: "ETH",
        numericCode: "231",
        currencies: [
            {
                code: "ETB",
                name: "Ethiopian birr",
                symbol: "Br",
            },
        ],
        flag: "🇪🇹",
        callingCodes: ["251"],
    },
    {
        name: "Falkland Islands (Malvinas)",
        alpha2Code: "FK",
        alpha3Code: "FLK",
        numericCode: "238",
        currencies: [
            {
                code: "FKP",
                name: "Falkland Islands pound",
                symbol: "£",
            },
        ],
        flag: "🇫🇰",
        callingCodes: ["500"],
    },
    {
        name: "Faroe Islands",
        alpha2Code: "FO",
        alpha3Code: "FRO",
        numericCode: "234",
        currencies: [
            {
                code: "DKK",
                name: "Danish krone",
                symbol: "kr",
            },
            {
                code: "(none)",
                name: "Faroese króna",
                symbol: "kr",
            },
        ],
        flag: "🇫🇴",
        callingCodes: ["298"],
    },
    {
        name: "Fiji",
        alpha2Code: "FJ",
        alpha3Code: "FJI",
        numericCode: "242",
        currencies: [
            {
                code: "FJD",
                name: "Fijian dollar",
                symbol: "$",
            },
        ],
        flag: "🇫🇯",
        callingCodes: ["679"],
    },
    {
        name: "Finland",
        alpha2Code: "FI",
        alpha3Code: "FIN",
        numericCode: "246",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇫🇮",
        callingCodes: ["358"],
    },
    {
        name: "France",
        alpha2Code: "FR",
        alpha3Code: "FRA",
        numericCode: "250",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇫🇷",
        callingCodes: ["33"],
    },
    {
        name: "French Guiana",
        alpha2Code: "GF",
        alpha3Code: "GUF",
        numericCode: "254",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇬🇫",
        callingCodes: ["594"],
    },
    {
        name: "French Polynesia",
        alpha2Code: "PF",
        alpha3Code: "PYF",
        numericCode: "258",
        currencies: [
            {
                code: "XPF",
                name: "CFP franc",
                symbol: "Fr",
            },
        ],
        flag: "🇵🇫",
        callingCodes: ["689"],
    },
    {
        name: "French Southern Territories",
        alpha2Code: "TF",
        alpha3Code: "ATF",
        numericCode: "260",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇹🇫",
        callingCodes: [""],
    },
    {
        name: "Gabon",
        alpha2Code: "GA",
        alpha3Code: "GAB",
        numericCode: "266",
        currencies: [
            {
                code: "XAF",
                name: "Central African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇬🇦",
        callingCodes: ["241"],
    },
    {
        name: "Gambia",
        alpha2Code: "GM",
        alpha3Code: "GMB",
        numericCode: "270",
        currencies: [
            {
                code: "GMD",
                name: "Gambian dalasi",
                symbol: "D",
            },
        ],
        flag: "🇬🇲",
        callingCodes: ["220"],
    },
    {
        name: "Georgia",
        alpha2Code: "GE",
        alpha3Code: "GEO",
        numericCode: "268",
        currencies: [
            {
                code: "GEL",
                name: "Georgian Lari",
                symbol: "ლ",
            },
        ],
        flag: "🇬🇪",
        callingCodes: ["995"],
    },
    {
        name: "Germany",
        alpha2Code: "DE",
        alpha3Code: "DEU",
        numericCode: "276",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇩🇪",
        callingCodes: ["49"],
    },
    {
        name: "Ghana",
        alpha2Code: "GH",
        alpha3Code: "GHA",
        numericCode: "288",
        currencies: [
            {
                code: "GHS",
                name: "Ghanaian cedi",
                symbol: "₵",
            },
        ],
        flag: "🇬🇭",
        callingCodes: ["233"],
    },
    {
        name: "Gibraltar",
        alpha2Code: "GI",
        alpha3Code: "GIB",
        numericCode: "292",
        currencies: [
            {
                code: "GIP",
                name: "Gibraltar pound",
                symbol: "£",
            },
        ],
        flag: "🇬🇮",
        callingCodes: ["350"],
    },
    {
        name: "Greece",
        alpha2Code: "GR",
        alpha3Code: "GRC",
        numericCode: "300",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇬🇷",
        callingCodes: ["30"],
    },
    {
        name: "Greenland",
        alpha2Code: "GL",
        alpha3Code: "GRL",
        numericCode: "304",
        currencies: [
            {
                code: "DKK",
                name: "Danish krone",
                symbol: "kr",
            },
        ],
        flag: "🇬🇱",
        callingCodes: ["299"],
    },
    {
        name: "Grenada",
        alpha2Code: "GD",
        alpha3Code: "GRD",
        numericCode: "308",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇬🇩",
        callingCodes: ["1473"],
    },
    {
        name: "Guadeloupe",
        alpha2Code: "GP",
        alpha3Code: "GLP",
        numericCode: "312",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇬🇵",
        callingCodes: ["590"],
    },
    {
        name: "Guam",
        alpha2Code: "GU",
        alpha3Code: "GUM",
        numericCode: "316",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇬🇺",
        callingCodes: ["1671"],
    },
    {
        name: "Guatemala",
        alpha2Code: "GT",
        alpha3Code: "GTM",
        numericCode: "320",
        currencies: [
            {
                code: "GTQ",
                name: "Guatemalan quetzal",
                symbol: "Q",
            },
        ],
        flag: "🇬🇹",
        callingCodes: ["502"],
    },
    {
        name: "Guernsey",
        alpha2Code: "GG",
        alpha3Code: "GGY",
        numericCode: "831",
        currencies: [
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
            {
                code: "(none)",
                name: "Guernsey pound",
                symbol: "£",
            },
        ],
        flag: "🇬🇬",
        callingCodes: ["44"],
    },
    {
        name: "Guinea",
        alpha2Code: "GN",
        alpha3Code: "GIN",
        numericCode: "324",
        currencies: [
            {
                code: "GNF",
                name: "Guinean franc",
                symbol: "Fr",
            },
        ],
        flag: "🇬🇳",
        callingCodes: ["224"],
    },
    {
        name: "Guinea-Bissau",
        alpha2Code: "GW",
        alpha3Code: "GNB",
        numericCode: "624",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇬🇼",
        callingCodes: ["245"],
    },
    {
        name: "Guyana",
        alpha2Code: "GY",
        alpha3Code: "GUY",
        numericCode: "328",
        currencies: [
            {
                code: "GYD",
                name: "Guyanese dollar",
                symbol: "$",
            },
        ],
        flag: "🇬🇾",
        callingCodes: ["592"],
    },
    {
        name: "Haiti",
        alpha2Code: "HT",
        alpha3Code: "HTI",
        numericCode: "332",
        currencies: [
            {
                code: "HTG",
                name: "Haitian gourde",
                symbol: "G",
            },
        ],
        flag: "🇭🇹",
        callingCodes: ["509"],
    },
    {
        name: "Heard Island and McDonald Islands",
        alpha2Code: "HM",
        alpha3Code: "HMD",
        numericCode: "334",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
        ],
        flag: "🇭🇲",
        callingCodes: [""],
    },
    {
        name: "Holy See",
        alpha2Code: "VA",
        alpha3Code: "VAT",
        numericCode: "336",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇻🇦",
        callingCodes: ["379"],
    },
    {
        name: "Honduras",
        alpha2Code: "HN",
        alpha3Code: "HND",
        numericCode: "340",
        currencies: [
            {
                code: "HNL",
                name: "Honduran lempira",
                symbol: "L",
            },
        ],
        flag: "🇭🇳",
        callingCodes: ["504"],
    },
    {
        name: "Hong Kong",
        alpha2Code: "HK",
        alpha3Code: "HKG",
        numericCode: "344",
        currencies: [
            {
                code: "HKD",
                name: "Hong Kong dollar",
                symbol: "$",
            },
        ],
        flag: "🇭🇰",
        callingCodes: ["852"],
    },
    {
        name: "Hungary",
        alpha2Code: "HU",
        alpha3Code: "HUN",
        numericCode: "348",
        currencies: [
            {
                code: "HUF",
                name: "Hungarian forint",
                symbol: "Ft",
            },
        ],
        flag: "🇭🇺",
        callingCodes: ["36"],
    },
    {
        name: "Iceland",
        alpha2Code: "IS",
        alpha3Code: "ISL",
        numericCode: "352",
        currencies: [
            {
                code: "ISK",
                name: "Icelandic króna",
                symbol: "kr",
            },
        ],
        flag: "🇮🇸",
        callingCodes: ["354"],
    },
    {
        name: "India",
        alpha2Code: "IN",
        alpha3Code: "IND",
        numericCode: "356",
        currencies: [
            {
                code: "INR",
                name: "Indian rupee",
                symbol: "₹",
            },
        ],
        flag: "🇮🇳",
        callingCodes: ["91"],
    },
    {
        name: "Indonesia",
        alpha2Code: "ID",
        alpha3Code: "IDN",
        numericCode: "360",
        currencies: [
            {
                code: "IDR",
                name: "Indonesian rupiah",
                symbol: "Rp",
            },
        ],
        flag: "🇮🇩",
        callingCodes: ["62"],
    },
    {
        name: "Côte d'Ivoire",
        alpha2Code: "CI",
        alpha3Code: "CIV",
        numericCode: "384",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇮",
        callingCodes: ["225"],
    },
    {
        name: "Iran (Islamic Republic of)",
        alpha2Code: "IR",
        alpha3Code: "IRN",
        numericCode: "364",
        currencies: [
            {
                code: "IRR",
                name: "Iranian rial",
                symbol: "﷼",
            },
        ],
        flag: "🇮🇷",
        callingCodes: ["98"],
    },
    {
        name: "Iraq",
        alpha2Code: "IQ",
        alpha3Code: "IRQ",
        numericCode: "368",
        currencies: [
            {
                code: "IQD",
                name: "Iraqi dinar",
                symbol: "ع.د",
            },
        ],
        flag: "🇮🇶",
        callingCodes: ["964"],
    },
    {
        name: "Ireland",
        alpha2Code: "IE",
        alpha3Code: "IRL",
        numericCode: "372",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇮🇪",
        callingCodes: ["353"],
    },
    {
        name: "Isle of Man",
        alpha2Code: "IM",
        alpha3Code: "IMN",
        numericCode: "833",
        currencies: [
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
            {
                code: "IMP[G]",
                name: "Manx pound",
                symbol: "£",
            },
        ],
        flag: "🇮🇲",
        callingCodes: ["44"],
    },
    {
        name: "Israel",
        alpha2Code: "IL",
        alpha3Code: "ISR",
        numericCode: "376",
        currencies: [
            {
                code: "ILS",
                name: "Israeli new shekel",
                symbol: "₪",
            },
        ],
        flag: "🇮🇱",
        callingCodes: ["972"],
    },
    {
        name: "Italy",
        alpha2Code: "IT",
        alpha3Code: "ITA",
        numericCode: "380",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇮🇹",
        callingCodes: ["39"],
    },
    {
        name: "Jamaica",
        alpha2Code: "JM",
        alpha3Code: "JAM",
        numericCode: "388",
        currencies: [
            {
                code: "JMD",
                name: "Jamaican dollar",
                symbol: "$",
            },
        ],
        flag: "🇯🇲",
        callingCodes: ["1876"],
    },
    {
        name: "Japan",
        alpha2Code: "JP",
        alpha3Code: "JPN",
        numericCode: "392",
        currencies: [
            {
                code: "JPY",
                name: "Japanese yen",
                symbol: "¥",
            },
        ],
        flag: "🇯🇵",
        callingCodes: ["81"],
    },
    {
        name: "Jersey",
        alpha2Code: "JE",
        alpha3Code: "JEY",
        numericCode: "832",
        currencies: [
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
            {
                code: "JEP[G]",
                name: "Jersey pound",
                symbol: "£",
            },
        ],
        flag: "🇯🇪",
        callingCodes: ["44"],
    },
    {
        name: "Jordan",
        alpha2Code: "JO",
        alpha3Code: "JOR",
        numericCode: "400",
        currencies: [
            {
                code: "JOD",
                name: "Jordanian dinar",
                symbol: "د.ا",
            },
        ],
        flag: "🇯🇴",
        callingCodes: ["962"],
    },
    {
        name: "Kazakhstan",
        alpha2Code: "KZ",
        alpha3Code: "KAZ",
        numericCode: "398",
        currencies: [
            {
                code: "KZT",
                name: "Kazakhstani tenge",
                symbol: null,
            },
        ],
        flag: "🇰🇿",
        callingCodes: ["76", "77"],
    },
    {
        name: "Kenya",
        alpha2Code: "KE",
        alpha3Code: "KEN",
        numericCode: "404",
        currencies: [
            {
                code: "KES",
                name: "Kenyan shilling",
                symbol: "Sh",
            },
        ],
        flag: "🇰🇪",
        callingCodes: ["254"],
    },
    {
        name: "Kiribati",
        alpha2Code: "KI",
        alpha3Code: "KIR",
        numericCode: "296",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
            {
                code: "(none)",
                name: "Kiribati dollar",
                symbol: "$",
            },
        ],
        flag: "🇰🇮",
        callingCodes: ["686"],
    },
    {
        name: "Kuwait",
        alpha2Code: "KW",
        alpha3Code: "KWT",
        numericCode: "414",
        currencies: [
            {
                code: "KWD",
                name: "Kuwaiti dinar",
                symbol: "د.ك",
            },
        ],
        flag: "🇰🇼",
        callingCodes: ["965"],
    },
    {
        name: "Kyrgyzstan",
        alpha2Code: "KG",
        alpha3Code: "KGZ",
        numericCode: "417",
        currencies: [
            {
                code: "KGS",
                name: "Kyrgyzstani som",
                symbol: "с",
            },
        ],
        flag: "🇰🇬",
        callingCodes: ["996"],
    },
    {
        name: "Lao People's Democratic Republic",
        alpha2Code: "LA",
        alpha3Code: "LAO",
        numericCode: "418",
        currencies: [
            {
                code: "LAK",
                name: "Lao kip",
                symbol: "₭",
            },
        ],
        flag: "🇱🇦",
        callingCodes: ["856"],
    },
    {
        name: "Latvia",
        alpha2Code: "LV",
        alpha3Code: "LVA",
        numericCode: "428",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇱🇻",
        callingCodes: ["371"],
    },
    {
        name: "Lebanon",
        alpha2Code: "LB",
        alpha3Code: "LBN",
        numericCode: "422",
        currencies: [
            {
                code: "LBP",
                name: "Lebanese pound",
                symbol: "ل.ل",
            },
        ],
        flag: "🇱🇧",
        callingCodes: ["961"],
    },
    {
        name: "Lesotho",
        alpha2Code: "LS",
        alpha3Code: "LSO",
        numericCode: "426",
        currencies: [
            {
                code: "LSL",
                name: "Lesotho loti",
                symbol: "L",
            },
            {
                code: "ZAR",
                name: "South African rand",
                symbol: "R",
            },
        ],
        flag: "🇱🇸",
        callingCodes: ["266"],
    },
    {
        name: "Liberia",
        alpha2Code: "LR",
        alpha3Code: "LBR",
        numericCode: "430",
        currencies: [
            {
                code: "LRD",
                name: "Liberian dollar",
                symbol: "$",
            },
        ],
        flag: "🇱🇷",
        callingCodes: ["231"],
    },
    {
        name: "Libya",
        alpha2Code: "LY",
        alpha3Code: "LBY",
        numericCode: "434",
        currencies: [
            {
                code: "LYD",
                name: "Libyan dinar",
                symbol: "ل.د",
            },
        ],
        flag: "🇱🇾",
        callingCodes: ["218"],
    },
    {
        name: "Liechtenstein",
        alpha2Code: "LI",
        alpha3Code: "LIE",
        numericCode: "438",
        currencies: [
            {
                code: "CHF",
                name: "Swiss franc",
                symbol: "Fr",
            },
        ],
        flag: "🇱🇮",
        callingCodes: ["423"],
    },
    {
        name: "Lithuania",
        alpha2Code: "LT",
        alpha3Code: "LTU",
        numericCode: "440",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇱🇹",
        callingCodes: ["370"],
    },
    {
        name: "Luxembourg",
        alpha2Code: "LU",
        alpha3Code: "LUX",
        numericCode: "442",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇱🇺",
        callingCodes: ["352"],
    },
    {
        name: "Macao",
        alpha2Code: "MO",
        alpha3Code: "MAC",
        numericCode: "446",
        currencies: [
            {
                code: "MOP",
                name: "Macanese pataca",
                symbol: "P",
            },
        ],
        flag: "🇲🇴",
        callingCodes: ["853"],
    },
    {
        name: "Macedonia",
        alpha2Code: "MK",
        alpha3Code: "MKD",
        numericCode: "807",
        currencies: [
            {
                code: "MKD",
                name: "Macedonian denar",
                symbol: "ден",
            },
        ],
        flag: "🇲🇰",
        callingCodes: ["389"],
    },
    {
        name: "Madagascar",
        alpha2Code: "MG",
        alpha3Code: "MDG",
        numericCode: "450",
        currencies: [
            {
                code: "MGA",
                name: "Malagasy ariary",
                symbol: "Ar",
            },
        ],
        flag: "🇲🇬",
        callingCodes: ["261"],
    },
    {
        name: "Malawi",
        alpha2Code: "MW",
        alpha3Code: "MWI",
        numericCode: "454",
        currencies: [
            {
                code: "MWK",
                name: "Malawian kwacha",
                symbol: "MK",
            },
        ],
        flag: "🇲🇼",
        callingCodes: ["265"],
    },
    {
        name: "Malaysia",
        alpha2Code: "MY",
        alpha3Code: "MYS",
        numericCode: "458",
        currencies: [
            {
                code: "MYR",
                name: "Malaysian ringgit",
                symbol: "RM",
            },
        ],
        flag: "🇲🇾",
        callingCodes: ["60"],
    },
    {
        name: "Maldives",
        alpha2Code: "MV",
        alpha3Code: "MDV",
        numericCode: "462",
        currencies: [
            {
                code: "MVR",
                name: "Maldivian rufiyaa",
                symbol: ".ރ",
            },
        ],
        flag: "🇲🇻",
        callingCodes: ["960"],
    },
    {
        name: "Mali",
        alpha2Code: "ML",
        alpha3Code: "MLI",
        numericCode: "466",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇲🇱",
        callingCodes: ["223"],
    },
    {
        name: "Malta",
        alpha2Code: "MT",
        alpha3Code: "MLT",
        numericCode: "470",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇲🇹",
        callingCodes: ["356"],
    },
    {
        name: "Marshall Islands",
        alpha2Code: "MH",
        alpha3Code: "MHL",
        numericCode: "584",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇲🇭",
        callingCodes: ["692"],
    },
    {
        name: "Martinique",
        alpha2Code: "MQ",
        alpha3Code: "MTQ",
        numericCode: "474",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇲🇶",
        callingCodes: ["596"],
    },
    {
        name: "Mauritania",
        alpha2Code: "MR",
        alpha3Code: "MRT",
        numericCode: "478",
        currencies: [
            {
                code: "MRO",
                name: "Mauritanian ouguiya",
                symbol: "UM",
            },
        ],
        flag: "🇲🇷",
        callingCodes: ["222"],
    },
    {
        name: "Mauritius",
        alpha2Code: "MU",
        alpha3Code: "MUS",
        numericCode: "480",
        currencies: [
            {
                code: "MUR",
                name: "Mauritian rupee",
                symbol: "₨",
            },
        ],
        flag: "🇲🇺",
        callingCodes: ["230"],
    },
    {
        name: "Mayotte",
        alpha2Code: "YT",
        alpha3Code: "MYT",
        numericCode: "175",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇾🇹",
        callingCodes: ["262"],
    },
    {
        name: "Mexico",
        alpha2Code: "MX",
        alpha3Code: "MEX",
        numericCode: "484",
        currencies: [
            {
                code: "MXN",
                name: "Mexican peso",
                symbol: "$",
            },
        ],
        flag: "🇲🇽",
        callingCodes: ["52"],
    },
    {
        name: "Micronesia (Federated States of)",
        alpha2Code: "FM",
        alpha3Code: "FSM",
        numericCode: "583",
        currencies: [
            {
                code: null,
                name: "[D]",
                symbol: "$",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇫🇲",
        callingCodes: ["691"],
    },
    {
        name: "Moldova (Republic of)",
        alpha2Code: "MD",
        alpha3Code: "MDA",
        numericCode: "498",
        currencies: [
            {
                code: "MDL",
                name: "Moldovan leu",
                symbol: "L",
            },
        ],
        flag: "🇲🇩",
        callingCodes: ["373"],
    },
    {
        name: "Monaco",
        alpha2Code: "MC",
        alpha3Code: "MCO",
        numericCode: "492",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇲🇨",
        callingCodes: ["377"],
    },
    {
        name: "Mongolia",
        alpha2Code: "MN",
        alpha3Code: "MNG",
        numericCode: "496",
        currencies: [
            {
                code: "MNT",
                name: "Mongolian tögrög",
                symbol: "₮",
            },
        ],
        flag: "🇲🇳",
        callingCodes: ["976"],
    },
    {
        name: "Montenegro",
        alpha2Code: "ME",
        alpha3Code: "MNE",
        numericCode: "499",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇲🇪",
        callingCodes: ["382"],
    },
    {
        name: "Montserrat",
        alpha2Code: "MS",
        alpha3Code: "MSR",
        numericCode: "500",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇲🇸",
        callingCodes: ["1664"],
    },
    {
        name: "Morocco",
        alpha2Code: "MA",
        alpha3Code: "MAR",
        numericCode: "504",
        currencies: [
            {
                code: "MAD",
                name: "Moroccan dirham",
                symbol: "د.م.",
            },
        ],
        flag: "🇲🇦",
        callingCodes: ["212"],
    },
    {
        name: "Mozambique",
        alpha2Code: "MZ",
        alpha3Code: "MOZ",
        numericCode: "508",
        currencies: [
            {
                code: "MZN",
                name: "Mozambican metical",
                symbol: "MT",
            },
        ],
        flag: "🇲🇿",
        callingCodes: ["258"],
    },
    {
        name: "Myanmar",
        alpha2Code: "MM",
        alpha3Code: "MMR",
        numericCode: "104",
        currencies: [
            {
                code: "MMK",
                name: "Burmese kyat",
                symbol: "Ks",
            },
        ],
        flag: "🇲🇲",
        callingCodes: ["95"],
    },
    {
        name: "Namibia",
        alpha2Code: "NA",
        alpha3Code: "NAM",
        numericCode: "516",
        currencies: [
            {
                code: "NAD",
                name: "Namibian dollar",
                symbol: "$",
            },
            {
                code: "ZAR",
                name: "South African rand",
                symbol: "R",
            },
        ],
        flag: "🇳🇦",
        callingCodes: ["264"],
    },
    {
        name: "Nauru",
        alpha2Code: "NR",
        alpha3Code: "NRU",
        numericCode: "520",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
            {
                code: "(none)",
                name: null,
                symbol: "$",
            },
        ],
        flag: "🇳🇷",
        callingCodes: ["674"],
    },
    {
        name: "Nepal",
        alpha2Code: "NP",
        alpha3Code: "NPL",
        numericCode: "524",
        currencies: [
            {
                code: "NPR",
                name: "Nepalese rupee",
                symbol: "₨",
            },
        ],
        flag: "🇳🇵",
        callingCodes: ["977"],
    },
    {
        name: "Netherlands",
        alpha2Code: "NL",
        alpha3Code: "NLD",
        numericCode: "528",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇳🇱",
        callingCodes: ["31"],
    },
    {
        name: "New Caledonia",
        alpha2Code: "NC",
        alpha3Code: "NCL",
        numericCode: "540",
        currencies: [
            {
                code: "XPF",
                name: "CFP franc",
                symbol: "Fr",
            },
        ],
        flag: "🇳🇨",
        callingCodes: ["687"],
    },
    {
        name: "New Zealand",
        alpha2Code: "NZ",
        alpha3Code: "NZL",
        numericCode: "554",
        currencies: [
            {
                code: "NZD",
                name: "New Zealand dollar",
                symbol: "$",
            },
        ],
        flag: "🇳🇿",
        callingCodes: ["64"],
    },
    {
        name: "Nicaragua",
        alpha2Code: "NI",
        alpha3Code: "NIC",
        numericCode: "558",
        currencies: [
            {
                code: "NIO",
                name: "Nicaraguan córdoba",
                symbol: "C$",
            },
        ],
        flag: "🇳🇮",
        callingCodes: ["505"],
    },
    {
        name: "Niger",
        alpha2Code: "NE",
        alpha3Code: "NER",
        numericCode: "562",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇳🇪",
        callingCodes: ["227"],
    },
    {
        name: "Nigeria",
        alpha2Code: "NG",
        alpha3Code: "NGA",
        numericCode: "566",
        currencies: [
            {
                code: "NGN",
                name: "Nigerian naira",
                symbol: "₦",
            },
        ],
        flag: "🇳🇬",
        callingCodes: ["234"],
    },
    {
        name: "Niue",
        alpha2Code: "NU",
        alpha3Code: "NIU",
        numericCode: "570",
        currencies: [
            {
                code: "NZD",
                name: "New Zealand dollar",
                symbol: "$",
            },
            {
                code: "(none)",
                name: "Niue dollar",
                symbol: "$",
            },
        ],
        flag: "🇳🇺",
        callingCodes: ["683"],
    },
    {
        name: "Norfolk Island",
        alpha2Code: "NF",
        alpha3Code: "NFK",
        numericCode: "574",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
        ],
        flag: "🇳🇫",
        callingCodes: ["672"],
    },
    {
        name: "Korea (Democratic People's Republic of)",
        alpha2Code: "KP",
        alpha3Code: "PRK",
        numericCode: "408",
        currencies: [
            {
                code: "KPW",
                name: "North Korean won",
                symbol: "₩",
            },
        ],
        flag: "🇰🇵",
        callingCodes: ["850"],
    },
    {
        name: "Northern Mariana Islands",
        alpha2Code: "MP",
        alpha3Code: "MNP",
        numericCode: "580",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇲🇵",
        callingCodes: ["1670"],
    },
    {
        name: "Norway",
        alpha2Code: "NO",
        alpha3Code: "NOR",
        numericCode: "578",
        currencies: [
            {
                code: "NOK",
                name: "Norwegian krone",
                symbol: "kr",
            },
        ],
        flag: "🇳🇴",
        callingCodes: ["47"],
    },
    {
        name: "Oman",
        alpha2Code: "OM",
        alpha3Code: "OMN",
        numericCode: "512",
        currencies: [
            {
                code: "OMR",
                name: "Omani rial",
                symbol: "ر.ع.",
            },
        ],
        flag: "🇴🇲",
        callingCodes: ["968"],
    },
    {
        name: "Pakistan",
        alpha2Code: "PK",
        alpha3Code: "PAK",
        numericCode: "586",
        currencies: [
            {
                code: "PKR",
                name: "Pakistani rupee",
                symbol: "₨",
            },
        ],
        flag: "🇵🇰",
        callingCodes: ["92"],
    },
    {
        name: "Palau",
        alpha2Code: "PW",
        alpha3Code: "PLW",
        numericCode: "585",
        currencies: [
            {
                code: "(none)",
                name: "[E]",
                symbol: "$",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇵🇼",
        callingCodes: ["680"],
    },
    {
        name: "Palestine, State of",
        alpha2Code: "PS",
        alpha3Code: "PSE",
        numericCode: "275",
        currencies: [
            {
                code: "ILS",
                name: "Israeli new sheqel",
                symbol: "₪",
            },
        ],
        flag: "🇵🇸",
        callingCodes: ["970"],
    },
    {
        name: "Panama",
        alpha2Code: "PA",
        alpha3Code: "PAN",
        numericCode: "591",
        currencies: [
            {
                code: "PAB",
                name: "Panamanian balboa",
                symbol: "B/.",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇵🇦",
        callingCodes: ["507"],
    },
    {
        name: "Papua New Guinea",
        alpha2Code: "PG",
        alpha3Code: "PNG",
        numericCode: "598",
        currencies: [
            {
                code: "PGK",
                name: "Papua New Guinean kina",
                symbol: "K",
            },
        ],
        flag: "🇵🇬",
        callingCodes: ["675"],
    },
    {
        name: "Paraguay",
        alpha2Code: "PY",
        alpha3Code: "PRY",
        numericCode: "600",
        currencies: [
            {
                code: "PYG",
                name: "Paraguayan guaraní",
                symbol: "₲",
            },
        ],
        flag: "🇵🇾",
        callingCodes: ["595"],
    },
    {
        name: "Peru",
        alpha2Code: "PE",
        alpha3Code: "PER",
        numericCode: "604",
        currencies: [
            {
                code: "PEN",
                name: "Peruvian sol",
                symbol: "S/.",
            },
        ],
        flag: "🇵🇪",
        callingCodes: ["51"],
    },
    {
        name: "Philippines",
        alpha2Code: "PH",
        alpha3Code: "PHL",
        numericCode: "608",
        currencies: [
            {
                code: "PHP",
                name: "Philippine peso",
                symbol: "₱",
            },
        ],
        flag: "🇵🇭",
        callingCodes: ["63"],
    },
    {
        name: "Pitcairn",
        alpha2Code: "PN",
        alpha3Code: "PCN",
        numericCode: "612",
        currencies: [
            {
                code: "NZD",
                name: "New Zealand dollar",
                symbol: "$",
            },
            {
                code: null,
                name: "Pitcairn Islands dollar",
                symbol: "$",
            },
        ],
        flag: "🇵🇳",
        callingCodes: ["64"],
    },
    {
        name: "Poland",
        alpha2Code: "PL",
        alpha3Code: "POL",
        numericCode: "616",
        currencies: [
            {
                code: "PLN",
                name: "Polish złoty",
                symbol: "zł",
            },
        ],
        flag: "🇵🇱",
        callingCodes: ["48"],
    },
    {
        name: "Portugal",
        alpha2Code: "PT",
        alpha3Code: "PRT",
        numericCode: "620",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇵🇹",
        callingCodes: ["351"],
    },
    {
        name: "Puerto Rico",
        alpha2Code: "PR",
        alpha3Code: "PRI",
        numericCode: "630",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇵🇷",
        callingCodes: ["1787", "1939"],
    },
    {
        name: "Qatar",
        alpha2Code: "QA",
        alpha3Code: "QAT",
        numericCode: "634",
        currencies: [
            {
                code: "QAR",
                name: "Qatari riyal",
                symbol: "ر.ق",
            },
        ],
        flag: "🇶🇦",
        callingCodes: ["974"],
    },
    {
        name: "Republic of Kosovo",
        alpha2Code: "XK",
        alpha3Code: "KOS",
        numericCode: null,
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇽🇰",
        callingCodes: ["383"],
    },
    {
        name: "Réunion",
        alpha2Code: "RE",
        alpha3Code: "REU",
        numericCode: "638",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇷🇪",
        callingCodes: ["262"],
    },
    {
        name: "Romania",
        alpha2Code: "RO",
        alpha3Code: "ROU",
        numericCode: "642",
        currencies: [
            {
                code: "RON",
                name: "Romanian leu",
                symbol: "lei",
            },
        ],
        flag: "🇷🇴",
        callingCodes: ["40"],
    },
    {
        name: "Russian Federation",
        alpha2Code: "RU",
        alpha3Code: "RUS",
        numericCode: "643",
        currencies: [
            {
                code: "RUB",
                name: "Russian ruble",
                symbol: "₽",
            },
        ],
        flag: "🇷🇺",
        callingCodes: ["7"],
    },
    {
        name: "Rwanda",
        alpha2Code: "RW",
        alpha3Code: "RWA",
        numericCode: "646",
        currencies: [
            {
                code: "RWF",
                name: "Rwandan franc",
                symbol: "Fr",
            },
        ],
        flag: "🇷🇼",
        callingCodes: ["250"],
    },
    {
        name: "Saint Barthélemy",
        alpha2Code: "BL",
        alpha3Code: "BLM",
        numericCode: "652",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇧🇱",
        callingCodes: ["590"],
    },
    {
        name: "Saint Helena",
        alpha2Code: "SH",
        alpha3Code: "SHN",
        numericCode: "654",
        currencies: [
            {
                code: "SHP",
                name: "Saint Helena pound",
                symbol: "£",
            },
        ],
        flag: "🇸🇭",
        callingCodes: ["290"],
    },
    {
        name: "Saint Kitts and Nevis",
        alpha2Code: "KN",
        alpha3Code: "KNA",
        numericCode: "659",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇰🇳",
        callingCodes: ["1869"],
    },
    {
        name: "Saint Lucia",
        alpha2Code: "LC",
        alpha3Code: "LCA",
        numericCode: "662",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇱🇨",
        callingCodes: ["1758"],
    },
    {
        name: "Saint Martin (French part)",
        alpha2Code: "MF",
        alpha3Code: "MAF",
        numericCode: "663",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇲🇫",
        callingCodes: ["590"],
    },
    {
        name: "Saint Pierre and Miquelon",
        alpha2Code: "PM",
        alpha3Code: "SPM",
        numericCode: "666",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇵🇲",
        callingCodes: ["508"],
    },
    {
        name: "Saint Vincent and the Grenadines",
        alpha2Code: "VC",
        alpha3Code: "VCT",
        numericCode: "670",
        currencies: [
            {
                code: "XCD",
                name: "East Caribbean dollar",
                symbol: "$",
            },
        ],
        flag: "🇻🇨",
        callingCodes: ["1784"],
    },
    {
        name: "Samoa",
        alpha2Code: "WS",
        alpha3Code: "WSM",
        numericCode: "882",
        currencies: [
            {
                code: "WST",
                name: "Samoan tālā",
                symbol: "T",
            },
        ],
        flag: "🇼🇸",
        callingCodes: ["685"],
    },
    {
        name: "San Marino",
        alpha2Code: "SM",
        alpha3Code: "SMR",
        numericCode: "674",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇸🇲",
        callingCodes: ["378"],
    },
    {
        name: "Sao Tome and Principe",
        alpha2Code: "ST",
        alpha3Code: "STP",
        numericCode: "678",
        currencies: [
            {
                code: "STD",
                name: "São Tomé and Príncipe dobra",
                symbol: "Db",
            },
        ],
        flag: "🇸🇹",
        callingCodes: ["239"],
    },
    {
        name: "Saudi Arabia",
        alpha2Code: "SA",
        alpha3Code: "SAU",
        numericCode: "682",
        currencies: [
            {
                code: "SAR",
                name: "Saudi riyal",
                symbol: "ر.س",
            },
        ],
        flag: "🇸🇦",
        callingCodes: ["966"],
    },
    {
        name: "Senegal",
        alpha2Code: "SN",
        alpha3Code: "SEN",
        numericCode: "686",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇸🇳",
        callingCodes: ["221"],
    },
    {
        name: "Serbia",
        alpha2Code: "RS",
        alpha3Code: "SRB",
        numericCode: "688",
        currencies: [
            {
                code: "RSD",
                name: "Serbian dinar",
                symbol: "дин.",
            },
        ],
        flag: "🇷🇸",
        callingCodes: ["381"],
    },
    {
        name: "Seychelles",
        alpha2Code: "SC",
        alpha3Code: "SYC",
        numericCode: "690",
        currencies: [
            {
                code: "SCR",
                name: "Seychellois rupee",
                symbol: "₨",
            },
        ],
        flag: "🇸🇨",
        callingCodes: ["248"],
    },
    {
        name: "Sierra Leone",
        alpha2Code: "SL",
        alpha3Code: "SLE",
        numericCode: "694",
        currencies: [
            {
                code: "SLL",
                name: "Sierra Leonean leone",
                symbol: "Le",
            },
        ],
        flag: "🇸🇱",
        callingCodes: ["232"],
    },
    {
        name: "Singapore",
        alpha2Code: "SG",
        alpha3Code: "SGP",
        numericCode: "702",
        currencies: [
            {
                code: "BND",
                name: "Brunei dollar",
                symbol: "$",
            },
            {
                code: "SGD",
                name: "Singapore dollar",
                symbol: "$",
            },
        ],
        flag: "🇸🇬",
        callingCodes: ["65"],
    },
    {
        name: "Sint Maarten (Dutch part)",
        alpha2Code: "SX",
        alpha3Code: "SXM",
        numericCode: "534",
        currencies: [
            {
                code: "ANG",
                name: "Netherlands Antillean guilder",
                symbol: "ƒ",
            },
        ],
        flag: "🇸🇽",
        callingCodes: ["1721"],
    },
    {
        name: "Slovakia",
        alpha2Code: "SK",
        alpha3Code: "SVK",
        numericCode: "703",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇸🇰",
        callingCodes: ["421"],
    },
    {
        name: "Slovenia",
        alpha2Code: "SI",
        alpha3Code: "SVN",
        numericCode: "705",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇸🇮",
        callingCodes: ["386"],
    },
    {
        name: "Solomon Islands",
        alpha2Code: "SB",
        alpha3Code: "SLB",
        numericCode: "090",
        currencies: [
            {
                code: "SBD",
                name: "Solomon Islands dollar",
                symbol: "$",
            },
        ],
        flag: "🇸🇧",
        callingCodes: ["677"],
    },
    {
        name: "Somalia",
        alpha2Code: "SO",
        alpha3Code: "SOM",
        numericCode: "706",
        currencies: [
            {
                code: "SOS",
                name: "Somali shilling",
                symbol: "Sh",
            },
        ],
        flag: "🇸🇴",
        callingCodes: ["252"],
    },
    {
        name: "South Africa",
        alpha2Code: "ZA",
        alpha3Code: "ZAF",
        numericCode: "710",
        currencies: [
            {
                code: "ZAR",
                name: "South African rand",
                symbol: "R",
            },
        ],
        flag: "🇿🇦",
        callingCodes: ["27"],
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        alpha2Code: "GS",
        alpha3Code: "SGS",
        numericCode: "239",
        currencies: [
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
            {
                code: "(none)",
                name: null,
                symbol: "£",
            },
        ],
        flag: "🇬🇸",
        callingCodes: ["500"],
    },
    {
        name: "Korea (Republic of)",
        alpha2Code: "KR",
        alpha3Code: "KOR",
        numericCode: "410",
        currencies: [
            {
                code: "KRW",
                name: "South Korean won",
                symbol: "₩",
            },
        ],
        flag: "🇰🇷",
        callingCodes: ["82"],
    },
    {
        name: "South Sudan",
        alpha2Code: "SS",
        alpha3Code: "SSD",
        numericCode: "728",
        currencies: [
            {
                code: "SSP",
                name: "South Sudanese pound",
                symbol: "£",
            },
        ],
        flag: "🇸🇸",
        callingCodes: ["211"],
    },
    {
        name: "Spain",
        alpha2Code: "ES",
        alpha3Code: "ESP",
        numericCode: "724",
        currencies: [
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
        ],
        flag: "🇪🇸",
        callingCodes: ["34"],
    },
    {
        name: "Sri Lanka",
        alpha2Code: "LK",
        alpha3Code: "LKA",
        numericCode: "144",
        currencies: [
            {
                code: "LKR",
                name: "Sri Lankan rupee",
                symbol: "Rs",
            },
        ],
        flag: "🇱🇰",
        callingCodes: ["94"],
    },
    {
        name: "Sudan",
        alpha2Code: "SD",
        alpha3Code: "SDN",
        numericCode: "729",
        currencies: [
            {
                code: "SDG",
                name: "Sudanese pound",
                symbol: "ج.س.",
            },
        ],
        flag: "🇸🇩",
        callingCodes: ["249"],
    },
    {
        name: "Suriname",
        alpha2Code: "SR",
        alpha3Code: "SUR",
        numericCode: "740",
        currencies: [
            {
                code: "SRD",
                name: "Surinamese dollar",
                symbol: "$",
            },
        ],
        flag: "🇸🇷",
        callingCodes: ["597"],
    },
    {
        name: "Svalbard and Jan Mayen",
        alpha2Code: "SJ",
        alpha3Code: "SJM",
        numericCode: "744",
        currencies: [
            {
                code: "NOK",
                name: "Norwegian krone",
                symbol: "kr",
            },
        ],
        flag: "🇸🇯",
        callingCodes: ["4779"],
    },
    {
        name: "Swaziland",
        alpha2Code: "SZ",
        alpha3Code: "SWZ",
        numericCode: "748",
        currencies: [
            {
                code: "SZL",
                name: "Swazi lilangeni",
                symbol: "L",
            },
        ],
        flag: "🇸🇿",
        callingCodes: ["268"],
    },
    {
        name: "Sweden",
        alpha2Code: "SE",
        alpha3Code: "SWE",
        numericCode: "752",
        currencies: [
            {
                code: "SEK",
                name: "Swedish krona",
                symbol: "kr",
            },
        ],
        flag: "🇸🇪",
        callingCodes: ["46"],
    },
    {
        name: "Switzerland",
        alpha2Code: "CH",
        alpha3Code: "CHE",
        numericCode: "756",
        currencies: [
            {
                code: "CHF",
                name: "Swiss franc",
                symbol: "Fr",
            },
        ],
        flag: "🇨🇭",
        callingCodes: ["41"],
    },
    {
        name: "Syrian Arab Republic",
        alpha2Code: "SY",
        alpha3Code: "SYR",
        numericCode: "760",
        currencies: [
            {
                code: "SYP",
                name: "Syrian pound",
                symbol: "£",
            },
        ],
        flag: "🇸🇾",
        callingCodes: ["963"],
    },
    {
        name: "Taiwan",
        alpha2Code: "TW",
        alpha3Code: "TWN",
        numericCode: "158",
        currencies: [
            {
                code: "TWD",
                name: "New Taiwan dollar",
                symbol: "$",
            },
        ],
        flag: "🇹🇼",
        callingCodes: ["886"],
    },
    {
        name: "Tajikistan",
        alpha2Code: "TJ",
        alpha3Code: "TJK",
        numericCode: "762",
        currencies: [
            {
                code: "TJS",
                name: "Tajikistani somoni",
                symbol: "ЅМ",
            },
        ],
        flag: "🇹🇯",
        callingCodes: ["992"],
    },
    {
        name: "Tanzania, United Republic of",
        alpha2Code: "TZ",
        alpha3Code: "TZA",
        numericCode: "834",
        currencies: [
            {
                code: "TZS",
                name: "Tanzanian shilling",
                symbol: "Sh",
            },
        ],
        flag: "🇹🇿",
        callingCodes: ["255"],
    },
    {
        name: "Thailand",
        alpha2Code: "TH",
        alpha3Code: "THA",
        numericCode: "764",
        currencies: [
            {
                code: "THB",
                name: "Thai baht",
                symbol: "฿",
            },
        ],
        flag: "🇹🇭",
        callingCodes: ["66"],
    },
    {
        name: "Timor-Leste",
        alpha2Code: "TL",
        alpha3Code: "TLS",
        numericCode: "626",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
            {
                code: null,
                name: null,
                symbol: null,
            },
        ],
        flag: "🇹🇱",
        callingCodes: ["670"],
    },
    {
        name: "Togo",
        alpha2Code: "TG",
        alpha3Code: "TGO",
        numericCode: "768",
        currencies: [
            {
                code: "XOF",
                name: "West African CFA franc",
                symbol: "Fr",
            },
        ],
        flag: "🇹🇬",
        callingCodes: ["228"],
    },
    {
        name: "Tokelau",
        alpha2Code: "TK",
        alpha3Code: "TKL",
        numericCode: "772",
        currencies: [
            {
                code: "NZD",
                name: "New Zealand dollar",
                symbol: "$",
            },
        ],
        flag: "🇹🇰",
        callingCodes: ["690"],
    },
    {
        name: "Tonga",
        alpha2Code: "TO",
        alpha3Code: "TON",
        numericCode: "776",
        currencies: [
            {
                code: "TOP",
                name: "Tongan paʻanga",
                symbol: "T$",
            },
        ],
        flag: "🇹🇴",
        callingCodes: ["676"],
    },
    {
        name: "Trinidad and Tobago",
        alpha2Code: "TT",
        alpha3Code: "TTO",
        numericCode: "780",
        currencies: [
            {
                code: "TTD",
                name: "Trinidad and Tobago dollar",
                symbol: "$",
            },
        ],
        flag: "🇹🇹",
        callingCodes: ["1868"],
    },
    {
        name: "Tunisia",
        alpha2Code: "TN",
        alpha3Code: "TUN",
        numericCode: "788",
        currencies: [
            {
                code: "TND",
                name: "Tunisian dinar",
                symbol: "د.ت",
            },
        ],
        flag: "🇹🇳",
        callingCodes: ["216"],
    },
    {
        name: "Turkey",
        alpha2Code: "TR",
        alpha3Code: "TUR",
        numericCode: "792",
        currencies: [
            {
                code: "TRY",
                name: "Turkish lira",
                symbol: null,
            },
        ],
        flag: "🇹🇷",
        callingCodes: ["90"],
    },
    {
        name: "Turkmenistan",
        alpha2Code: "TM",
        alpha3Code: "TKM",
        numericCode: "795",
        currencies: [
            {
                code: "TMT",
                name: "Turkmenistan manat",
                symbol: "m",
            },
        ],
        flag: "🇹🇲",
        callingCodes: ["993"],
    },
    {
        name: "Turks and Caicos Islands",
        alpha2Code: "TC",
        alpha3Code: "TCA",
        numericCode: "796",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇹🇨",
        callingCodes: ["1649"],
    },
    {
        name: "Tuvalu",
        alpha2Code: "TV",
        alpha3Code: "TUV",
        numericCode: "798",
        currencies: [
            {
                code: "AUD",
                name: "Australian dollar",
                symbol: "$",
            },
            {
                code: "TVD[G]",
                name: "Tuvaluan dollar",
                symbol: "$",
            },
        ],
        flag: "🇹🇻",
        callingCodes: ["688"],
    },
    {
        name: "Uganda",
        alpha2Code: "UG",
        alpha3Code: "UGA",
        numericCode: "800",
        currencies: [
            {
                code: "UGX",
                name: "Ugandan shilling",
                symbol: "Sh",
            },
        ],
        flag: "🇺🇬",
        callingCodes: ["256"],
    },
    {
        name: "Ukraine",
        alpha2Code: "UA",
        alpha3Code: "UKR",
        numericCode: "804",
        currencies: [
            {
                code: "UAH",
                name: "Ukrainian hryvnia",
                symbol: "₴",
            },
        ],
        flag: "🇺🇦",
        callingCodes: ["380"],
    },
    {
        name: "United Arab Emirates",
        alpha2Code: "AE",
        alpha3Code: "ARE",
        numericCode: "784",
        currencies: [
            {
                code: "AED",
                name: "United Arab Emirates dirham",
                symbol: "د.إ",
            },
        ],
        flag: "🇦🇪",
        callingCodes: ["971"],
    },
    {
        name: "United Kingdom of Great Britain and Northern Ireland",
        alpha2Code: "GB",
        alpha3Code: "GBR",
        numericCode: "826",
        currencies: [
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
        ],
        flag: "🇬🇧",
        callingCodes: ["44"],
    },
    {
        name: "United States of America",
        alpha2Code: "US",
        alpha3Code: "USA",
        numericCode: "840",
        currencies: [
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
        ],
        flag: "🇺🇸",
        callingCodes: ["1"],
    },
    {
        name: "Uruguay",
        alpha2Code: "UY",
        alpha3Code: "URY",
        numericCode: "858",
        currencies: [
            {
                code: "UYU",
                name: "Uruguayan peso",
                symbol: "$",
            },
        ],
        flag: "🇺🇾",
        callingCodes: ["598"],
    },
    {
        name: "Uzbekistan",
        alpha2Code: "UZ",
        alpha3Code: "UZB",
        numericCode: "860",
        currencies: [
            {
                code: "UZS",
                name: "Uzbekistani so'm",
                symbol: null,
            },
        ],
        flag: "🇺🇿",
        callingCodes: ["998"],
    },
    {
        name: "Vanuatu",
        alpha2Code: "VU",
        alpha3Code: "VUT",
        numericCode: "548",
        currencies: [
            {
                code: "VUV",
                name: "Vanuatu vatu",
                symbol: "Vt",
            },
        ],
        flag: "🇻🇺",
        callingCodes: ["678"],
    },
    {
        name: "Venezuela (Bolivarian Republic of)",
        alpha2Code: "VE",
        alpha3Code: "VEN",
        numericCode: "862",
        currencies: [
            {
                code: "VEF",
                name: "Venezuelan bolívar",
                symbol: "Bs F",
            },
        ],
        flag: "🇻🇪",
        callingCodes: ["58"],
    },
    {
        name: "Viet Nam",
        alpha2Code: "VN",
        alpha3Code: "VNM",
        numericCode: "704",
        currencies: [
            {
                code: "VND",
                name: "Vietnamese đồng",
                symbol: "₫",
            },
        ],
        flag: "🇻🇳",
        callingCodes: ["84"],
    },
    {
        name: "Wallis and Futuna",
        alpha2Code: "WF",
        alpha3Code: "WLF",
        numericCode: "876",
        currencies: [
            {
                code: "XPF",
                name: "CFP franc",
                symbol: "Fr",
            },
        ],
        flag: "🇼🇫",
        callingCodes: ["681"],
    },
    {
        name: "Western Sahara",
        alpha2Code: "EH",
        alpha3Code: "ESH",
        numericCode: "732",
        currencies: [
            {
                code: "MAD",
                name: "Moroccan dirham",
                symbol: "د.م.",
            },
            {
                code: "DZD",
                name: "Algerian dinar",
                symbol: "د.ج",
            },
        ],
        flag: "🇪🇭",
        callingCodes: ["212"],
    },
    {
        name: "Yemen",
        alpha2Code: "YE",
        alpha3Code: "YEM",
        numericCode: "887",
        currencies: [
            {
                code: "YER",
                name: "Yemeni rial",
                symbol: "﷼",
            },
        ],
        flag: "🇾🇪",
        callingCodes: ["967"],
    },
    {
        name: "Zambia",
        alpha2Code: "ZM",
        alpha3Code: "ZMB",
        numericCode: "894",
        currencies: [
            {
                code: "ZMW",
                name: "Zambian kwacha",
                symbol: "ZK",
            },
        ],
        flag: "🇿🇲",
        callingCodes: ["260"],
    },
    {
        name: "Zimbabwe",
        alpha2Code: "ZW",
        alpha3Code: "ZWE",
        numericCode: "716",
        currencies: [
            {
                code: "BWP",
                name: "Botswana pula",
                symbol: "P",
            },
            {
                code: "GBP",
                name: "British pound",
                symbol: "£",
            },
            {
                code: "CNY",
                name: "Chinese yuan",
                symbol: "¥",
            },
            {
                code: "EUR",
                name: "Euro",
                symbol: "€",
            },
            {
                code: "INR",
                name: "Indian rupee",
                symbol: "₹",
            },
            {
                code: "JPY",
                name: "Japanese yen",
                symbol: "¥",
            },
            {
                code: "ZAR",
                name: "South African rand",
                symbol: "Rs",
            },
            {
                code: "USD",
                name: "United States dollar",
                symbol: "$",
            },
            {
                code: "(none)",
                name: null,
                symbol: null,
            },
        ],
        flag: "🇿🇼",
        callingCodes: ["263"],
    },
];



const topCountriesOnList = "Saudi Arabia,Qatar,United Arab Emirates,Bahrain,Kuwait,Israel,India,United States of America,United Kingdom of Great Britain and Northern Ireland".split(",")

const otherCountries = defaultCountries.filter(country => !topCountriesOnList.includes(country.name))


const countriesToUse = [...topCountriesOnList, ...otherCountries]


export const countries = countriesToUse.map((country) => ({
    label: typeof (country) === 'string' ? country : country.name,
    value: typeof (country) === 'string' ? country : country.name
}));