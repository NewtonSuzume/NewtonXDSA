
export enum XDSAPresentationRequest {
    BASIC,
    ENUMERATION,
    SLIDER,
    COUNTER,
    SPECIAL
}

export enum XDSACategory {
    GENERAL,
    AUTONOMOUS,
    TELEOP,
    ENDGAME,
    DRIVER,
    OTHER
}

export enum XDSAType {
    STRING,
    INTEGER,
    FLOAT, 
    BOOLEAN
}

export enum XDSAGamePiece {
    NOTE_SPKR,
    NOTE_AMP,
    NOTE_TRAP,
    CORAL_1,
    CORAL_2,
    CORAL_3,
    CORAL_4,
    ALGAE_PROCESSOR,
    ALGAE_NET
}

export interface XDSAEnumConfiguration {
    
    text: string,
    color?: string

}

export interface XDSADatabase {
    
    host: string,
    user: string,
    password: string,
    database: string,
    clearOnStart: boolean
    
}




export interface XDSADatapoint {

    name: string,
    presentableName: string,
    category: XDSACategory,
    type: XDSAType
    requested_presentation?: XDSAPresentationRequest,
    gamepiece?: XDSAGamePiece, 
    default?: any,
    unique?: boolean,
    maximum?: number,
    minimum?: number,
    enumValues?: {[val: number]: XDSAEnumConfiguration},

}


export interface XDSAInformation {
    name: string
    team: number,
    team_name: string,
    team_color: string
}

export interface XDSATBAIntegrationSettings {
    api_key: string,
    event_key: string
}

export interface XDSAEvent {

    event: number,
    name: string, 
    data: string

}

export interface XDSAGatewayHello {

    server_info: XDSAInformation,
    heartbeat: number

}