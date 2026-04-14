import React from 'react';
import { useParams } from "react-router";
import { useDetail } from "../hooks/useDetail";
import { Spinner, ResultCard, DateTime } from "asab_webui_components";
import { useTranslation } from 'react-i18next';

export const Detail = () => {
    let params = useParams();
    const { t } = useTranslation();

    const { user, loading, error } = useDetail(params.id)

    if (loading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ResultCard status='success'>
            <h1>{user.username}</h1>
            <p>
                <i className="bi bi-mailbox"></i>
                &nbsp;
                <strong>{t("Users|E-mail")}:</strong> {user.email}
            </p>
            <p>
                <i className="bi bi-house"></i>
                &nbsp;
                <strong>{t("Users|Address")}:</strong> {user.address}
            </p>
            <p>
                <i className="bi bi-check"></i>
                &nbsp;
                <strong>{t("Users|Created at")}:</strong> <DateTime value={user.created}/>
            </p>
            <p>
                <i className="bi bi-person"></i>
                &nbsp;
                <strong>{t("Users|Id")}:</strong> {user.id}
            </p>
            <p>
            <i className="bi bi-ethernet"></i>
                &nbsp;
                <strong>{t("Users|IP address")}:</strong> {user.ip_address}
            </p>
            <p>
            <i className="bi bi-telephone"></i>
                &nbsp;
                <strong>{t("Users|Phone number")}:</strong> {user.phone_number}
            </p>
        </ResultCard>
    );
}
