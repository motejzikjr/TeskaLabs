import React from 'react';
import { Container } from 'reactstrap';
import { Detail } from "./users/components/Detail";

export function DetailScreen(props) {
	return (
		<Container>
            <Detail />
		</Container>
	);
}
