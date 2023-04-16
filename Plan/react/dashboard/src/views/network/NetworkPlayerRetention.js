import React from 'react';
import ExtendableRow from "../../components/layout/extension/ExtendableRow";
import {Col} from "react-bootstrap";
import LoadIn from "../../components/animation/LoadIn";
import PlayerRetentionGraphCard from "../../components/cards/common/PlayerRetentionGraphCard";
import FirstMomentsCard from "../../components/cards/common/FirstMomentsCard";

const NetworkPlayerRetention = () => {
    return (
        <LoadIn>
            <section className="network-retention">
                <ExtendableRow id={'row-network-retention-0'}>
                    <Col lg={12}>
                        <PlayerRetentionGraphCard identifier={null}/>
                    </Col>
                </ExtendableRow>
                <ExtendableRow id={'row-network-retention-1'}>
                    <Col lg={12}>
                        <FirstMomentsCard identifier={null}/>
                    </Col>
                </ExtendableRow>
            </section>
        </LoadIn>
    )
};

export default NetworkPlayerRetention