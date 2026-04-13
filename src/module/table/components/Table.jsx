import React from 'react';
import { useState } from 'react';
import { useTable } from '../hooks/useTable.js';
import { DataTableCard2, DateTime } from "asab_webui_components";
import { useTranslation } from 'react-i18next';

const UsernameCell = ({ row }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {row.username}
            {hovered && <><br /><span className="small">{row.id}</span></>}
        </span>
    );
};

export const Table = () => {
    const { getData } = useTable();
    const { t } = useTranslation();

    const loader = async ({ params }) => {
        return await getData(params);
    }

    const Header = () => {
        return	(<>
            <div className="flex-fill">
                <h3>
                    <i className="bi bi-stopwatch pe-2"></i>
                    {t("SessionListContainer|Sessions")}
                </h3>
            </div>
        </>);
    }

    const columns = [
        {
            title: "Username",
            render: ({ row }) => <UsernameCell row={row} />
        },
        {
            title: "E-mail",
            render: ({ row }) => row.email
        },
        {
            title: "Address",
            render: ({ row }) => row.address
        },
        {
            title: "Created at",
            render: ({ row }) => <DateTime value={row.created}/>
        },
        {
            title: "Last sign in",
            render: ({ row }) => <DateTime value={row.last_sign_in}/>
        },
    ];

    return (
        <DataTableCard2
            app={app}
            columns={columns}
            loader={loader}
            header={<Header />}
        />
    )
}
