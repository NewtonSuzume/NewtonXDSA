
export enum XDSAPresentationRequest {
    BASIC, // how the thing is rendered when presentationrequest is omitted
    ENUMERATION, // buttons for each type (number specific)
    SLIDER, // stepped slider
    COUNTER, // + & - buttons for inc/dec
    SPECIAL // this is whatever you want it to be, and is unused.
}

export enum XDSACategory {
    GENERAL, //stuff like scouter/team name, etc
    AUTONOMOUS, //auto scoring
    TELEOP, // teleop scoring
    ENDGAME, //endgame scoring/performance
    DRIVER, //driver ability
    OTHER //random stuff, like comments, or stuff that couldnt easily fit into the other 5 categories. use this sparingly.
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
    database: string
    
}




export interface XDSADatapoint {

    name: string, // the internal name of the datapoint for the db
    presentableName: string, //the name on the ui
    category: XDSACategory, //the presentation category, like general stuff, or teleop specific stuff
    type: XDSAType // the type of the datapoint (number, string, etc)
    requested_presentation?: XDSAPresentationRequest, //the way the point should be presented, really only for numerical stuff, such as sliders or counters.
    gamepiece?: XDSAGamePiece, //the game piece which this datapoint is coupled to. generally only useful for counters.
    default?: any, // the default value 
    unique?: boolean, // is this value unique (this should generally always be false)
    maximum?: number, // the max value (for sliders/counters)
    minimum?: number, // the minimum value (for sliders/counters)
    enumValues?: {[val: number]: XDSAEnumConfiguration}, // the names of each position in a slider or enum button (only works for these presentations only)

}


export interface XDSAInformation {
    name: string
    team: number,
    team_name: string,
    team_color: string
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
