import { createColumnHelper } from "@tanstack/solid-table"
import { formatDate } from "../../utils/helper"



const columnHelper = createColumnHelper()

export const defaultData = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },

    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
    {
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

export const defaultColumns = [
    columnHelper.accessor("firstName",
        {
            id: 'firstName',
            cell: info => info.getValue(),
            header: 'first Name'
            // footer: info => info.column.id,
        }
    ),
    columnHelper.accessor("lastName",
        {
            // accessorFn: row => row.lastName,
            id: 'lastName',
            cell: info => info.getValue(),
            header: "Last Name",
            // footer: info => info.column.id,
        }
    ),
    columnHelper.accessor("age",
        {
            // accessorKey: 'age',
            id: 'age',
            header: () => 'Age',
            // footer: info => info.column.id,
        }
    ),
    columnHelper.accessor("visits",
        {
            // accessorKey: 'visits',
            id: 'visits',
            header: () => "Visits",
            // footer: info => info.column.id,
        }
    ),
    columnHelper.accessor("status",
        {
            // accessorKey: 'status',
            id: 'status',
            header: 'Status',
            // footer: info => info.column.id,
        }
    ),
    columnHelper.accessor("progress",
        {
            // accessorKey: 'progress',
            id: 'progress',
            header: 'Profile Progress',
            // footer: info => info.column.id,
        }
    )

]


/** Dashboard Column Def */
export const dashboardColumnDef = [
    columnHelper.accessor("first Name", {
        cell: info => info.getValue(),
    }),

]

/** COllaborators and Team Members Column Def */

export const defaultCollaboratorsColumnsData = [
    {
        id: '23',
        fname: 'Hemsleek',
        lname: 'King',
        email: 'hemsleek@codefend.com',
        phone: '+2348103434343',
        role: "Developer"

    },
    {
        id: '1',
        fname: 'chris',
        lname: 'Russo',
        email: 'chris@codefend.com',
        phone: '+56323232323232',
        role: "Hacker"
    },
    {
        id: '13',
        fname: 'ignacio',
        lname: 'gomez',
        email: 'ignacio@codefend.com',
        phone: '+561222323232',
        role: "Senior Developer"
    },
    {
        id: '24',
        fname: 'fede',
        lname: 'rico',
        email: 'fede@codefend.com',
        phone: '+563230232232',
        role: "Fullstack"
    },
]

export const CollaboratorsColumnDef = [
    columnHelper.accessor('id',
        {
            id: 'id',
            header: 'id',
            cell: info => info.getValue(),

        }
    )
    ,
    columnHelper.accessor(row => `${row.fname} ${row.lname}`,
        {
            id: 'fullName',
            header: 'full name',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'email',
        {
            id: 'email',
            header: 'email',
            cell: info => info.getValue(),
            // invertSorting: true

        }
    ),
    columnHelper.accessor('phone',
        {
            id: "phoneNumber",
            header: 'phone number',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'role',
        {
            id: 'role',
            header: 'role',
            cell: info => info.getValue(),
        }
    )


]

export const vulnerabilitiesColumnDef = [

    columnHelper.accessor('creacion',
        {
            id: 'creacion',
            header: 'published',
            cell: info => formatDate(info.getValue()),

        }
    )
    ,
    columnHelper.accessor("researcher_username",
        {
            id: 'author',
            header: "author",
            cell: info => `@${info.getValue()}`,
        }
    ),
    columnHelper.accessor(
        'resource_class',
        {
            id: 'class',
            header: 'class',
            cell: info => info.getValue(),
            // invertSorting: true

        }
    ),
    columnHelper.accessor('risk_level',
        {
            id: "risk",
            header: 'risk',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'risk_score',
        {
            id: 'score',
            header: 'score',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'name',
        {
            id: 'issue title',
            header: 'issue title',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'condicion',
        {
            id: 'status',
            header: 'status',
            cell: info => info.getValue(),
        }
    )


]


export const vdbColumnDef = [

    columnHelper.accessor(row => row.entry.timestamp.create,
        {
            id: 'creacion',
            header: 'published',
            cell: info => formatDate(info.getValue(), true),

        }
    )
    ,
    columnHelper.accessor(row => row.entry.id,
        {
            id: 'vdb id',
            header: "vdb id",
            cell: info => `@${info.getValue()}`,
        }
    ),
    columnHelper.accessor(
        row => row.source.cve.id,
        {
            id: 'cve',
            header: 'cve',
            cell: info => info.getValue(),
            // invertSorting: true

        }
    ),
    columnHelper.accessor(row => row.entry.title,
        {
            id: "title",
            header: 'title',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        row => row.vulnerability.risk.value,
        {
            id: 'score',
            header: 'score',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        row => row.vulnerability.risk.name,
        {
            id: 'risk',
            header: 'risk',
            cell: info => info.getValue(),
        }
    )


]

export const preferencesOrdersColumnDef = [

    columnHelper.accessor('creacion',
        {
            id: 'date',
            header: 'date',
            cell: info => formatDate(info.getValue()),

        }
    )
    ,
    columnHelper.accessor("order",
        {
            id: 'order',
            header: "order",
            cell: info => `@${info.getValue()}`,
        }
    ),
    columnHelper.accessor(
        'resource_class',
        {
            id: 'class',
            header: 'class',
            cell: info => info.getValue(),
            // invertSorting: true

        }
    ),
    columnHelper.accessor('risk_level',
        {
            id: "risk",
            header: 'risk',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'risk_score',
        {
            id: 'score',
            header: 'score',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'name',
        {
            id: 'issue title',
            header: 'issue title',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'condicion',
        {
            id: 'status',
            header: 'status',
            cell: info => info.getValue(),
        }
    )


]


export const preferencesCollaboratorsColumnDef = [
    columnHelper.accessor('id',
        {
            id: 'id',
            header: 'id',
            cell: info => info.getValue(),

        }
    )
    ,
    columnHelper.accessor(row => `${row.fname} ${row.lname}`,
        {
            id: 'fullName',
            header: 'full name',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'email',
        {
            id: 'email',
            header: 'email',
            cell: info => info.getValue(),
            // invertSorting: true

        }
    ),
    columnHelper.accessor('phone',
        {
            id: "phoneNumber",
            header: 'phone number',
            cell: info => info.getValue(),
        }
    ),
    columnHelper.accessor(
        'role',
        {
            id: 'role',
            header: 'role',
            cell: info => info.getValue(),
        }
    )


]