import { Node, NodeProperties } from "node-red";

export interface TuyaSmartProperties extends NodeProperties {
    deviceIp: string;
    deviceKey: string;
    deviceId: string;
    deviceName: string;
    request: string;
    pollingInterval: number;
    protocolVersion: string;
}

export interface TuyaSmartNode extends Node {
    deviceIp: string;
    deviceKey: string;
    deviceId: string;
    deviceName: string;
    request: string;
    pollingInterval: number;
    protocolVersion: string;
}

/**
 * Output message format of the tuya node.
 */
export interface TuyaSmartNodeMessage {
    data: object;
    deviceName: string;
    deviceIp: string;
    deviceId: string;
}

export interface NodeRedInputMessage {
    payload: TuyaSmartNodeInputMessage | TuyaSmartNodeInputMessage[];
}

/**
 * Input message format that is interpreted by the tuya node.
 */
export interface TuyaSmartNodeInputMessage {
    /**
     * Desired state to be set
     */
    set: any;

    /**
     * DPS index (default 1)
     */
    dpsIndex?: number;
}