import React from 'react';
import { useState } from 'react';
import { useTable } from '../hooks/useTable.js';
import { DataTableCard2, DateTime } from "asab_webui_components";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router";

const UsernameCell = ({ row }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link to={`/detail/${row.id}`}>
				{row.username}
			</Link>
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
                    {t("Users|Users")}
                </h3>
            </div>
        </>);
    }

    const columns = [
        {
            title: <><i className="bi bi-person"></i> {t("Users|Username")}</>,
            render: ({ row }) => <UsernameCell row={row} />
        },
        {
            title: <><i className="bi bi-mailbox"></i> {t("Users|E-mail")}</>,
            render: ({ row }) => row.email
        },
        {
            title: <><i className="bi bi-house"></i> {t("Users|Address")}</>,
            render: ({ row }) => row.address
        },
        {
            title: <><i className="bi bi-check"></i> {t("Users|Created at")}</>,
            render: ({ row }) => <DateTime value={row.created}/>
        },
        {
            title: <><i className="bi bi-calendar-check"></i> {t("Users|Last sign in")}</>,
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
