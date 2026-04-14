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
            <p><strong>{t("Users|E-mail")}:</strong> {user.email}</p>
            <p><strong>{t("Users|Address")}:</strong> {user.address}</p>
            <p><strong>{t("Users|Created at")}:</strong> <DateTime value={user.created}/></p>
            <p><strong>{t("Users|Id")}:</strong> {user.id}</p>
            <p><strong>{t("Users|IP address")}:</strong> {user.ip_address}</p>
            <p><strong>{t("Users|Phone number")}:</strong> {user.phone_number}</p>
        </ResultCard>
    );
}
