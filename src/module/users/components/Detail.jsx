import React from 'react';
import { useParams } from "react-router";
import { useDetail } from "../hooks/useDetail";
import { Spinner, ResultCard, DateTime } from "asab_webui_components";

export const Detail = () => {
    let params = useParams();

    const { user, loading, error } = useDetail(params.id)

    if (loading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ResultCard status='success'>
            <h1>{user.username}</h1>
            <p><strong>E-mail:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <p><strong>Created at:</strong> <DateTime value={user.created}/></p>
            <p><strong>Id:</strong> {user.id}</p>
            <p><strong>IP address:</strong> {user.ip_address}</p>
            <p><strong>Phone number:</strong> {user.phone_number}</p>
        </ResultCard>
    );
}
