import React, { FunctionComponent } from "react";
import { Descriptions } from "antd";
import './Location.css'

export interface LocationProps {
    id: string;
    name: string;
    latitude: number,
    longitude: number,
    peakPopulation: bigint,
    peakYear: bigint
}

export const Location: FunctionComponent<LocationProps> = ({name, latitude, longitude, peakPopulation, peakYear}) => {
    return (
        <div className="location">
            <Descriptions title="Location">
                <Descriptions.Item label="Name">{name}</Descriptions.Item>
                <Descriptions.Item label="Latitude">{latitude}</Descriptions.Item>
                <Descriptions.Item label="Longitude">{longitude}</Descriptions.Item>
                <Descriptions.Item label="Peak Population">{peakPopulation}</Descriptions.Item>
                <Descriptions.Item label="Peak Population Year">{peakYear}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};
