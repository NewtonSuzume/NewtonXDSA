import { XDSADatabase, XDSAGamePiece, XDSAInformation, XDSACategory, XDSADatapoint, XDSAPresentationRequest, XDSAType, XDSATBAIntegrationSettings } from "../8592sdk/types"

export const DatabaseConnection: XDSADatabase = {
    host: "localhost",
    password: "<db pass goes here>",
    user: "root",
    database: "XDSADatabase",
    clearOnStart: true //IF THIS IS TRUE, THEN THE ENTIRE DB IS CLEANED ON SERVER START.
}

export const ServerInfo: XDSAInformation = {
    name: "First XDSAServer Ever",
    team: 8592,
    team_name: "Newton^2", 
    team_color: "#0093b0"
}

export const TBAFetchSettings: XDSATBAIntegrationSettings = {
    api_key: "fbkgBWLltUBDHgZLy1P2OAnKWX4VfSHjEJDYNH9Jz9vXqpjxkUJpxXKJg4HYImIn",
    event_key: "2025chcmp"
}

export const Configuration: XDSADatapoint[] = [

    //general stuff
        {
            name: "name",
            presentableName: "Scouter Name",
            category: XDSACategory.GENERAL,
            type: XDSAType.STRING,
        },
        {
            name: "match_num",
            presentableName: "Match Number",
            category: XDSACategory.GENERAL,
            type: XDSAType.INTEGER,
        },    
        {
            name: "team_number",
            presentableName: "Team Number",
            category: XDSACategory.GENERAL,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.SPECIAL
        },    
        {
            name: "scouter_num",
            presentableName: "Scouter Number",
            category: XDSACategory.GENERAL,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "R1", color: "#FF3B30"}, 
                1: {text: "R2", color: "#FF3B30"}, 
                2: {text: "R3", color: "#FF3B30"}, 
                3: {text: "B1"}, 
                4: {text: "B2"}, 
                5: {text: "B3"}
            }
        },    


    //autonomous stuff
        {
            name: "start_pos",
            presentableName: "Starting Position",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "Processor"},
                1: {text: "Middle"},
                2: {text: "Far Wall"}
            }
        },
        {
            name: "a_coral_fourth",
            presentableName: "L4 Coral",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_4
        },
        {
            name: "a_coral_third",
            presentableName: "L3 Coral",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_3
        },
        {
            name: "a_coral_second",
            presentableName: "L2 Coral",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_2
        },
        {
            name: "a_coral_first",
            presentableName: "L1 Coral",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_1
        },


        {
            name: "a_proc",
            presentableName: "Processor",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.ALGAE_PROCESSOR
        },
        {
            name: "a_net",
            presentableName: "Net",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.ALGAE_NET
        },
        {
            name: "left_start",
            presentableName: "Left Start?",
            category: XDSACategory.AUTONOMOUS,
            type: XDSAType.BOOLEAN,
        },


    //teleop stuff
        {
            name: "t_coral_fourth",
            presentableName: "L4 Coral",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_4
        },
        {
            name: "t_coral_third",
            presentableName: "L3 Coral",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_3
        },
        {
            name: "t_coral_second",
            presentableName: "L2 Coral",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_2
        },
        {
            name: "t_coral_first",
            presentableName: "L1 Coral",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.CORAL_1
        },



        {
            name: "t_proc",
            presentableName: "Processor",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.ALGAE_PROCESSOR
        },
        {
            name: "t_net",
            presentableName: "Net",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.COUNTER,
            gamepiece: XDSAGamePiece.ALGAE_NET
        },
        {
            name: "ground_coral",
            presentableName: "Ground Coral Speed",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "No Pickup", color: "#ff3a30"}, 
                1: {text: "< 2s", color: "#ff9500"}, 
                2: {text: "> 2s", color: "#34c759"} 
            }
        },
        {
            name: "ground_algae",
            presentableName: "Ground Algae Speed",
            category: XDSACategory.TELEOP,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "No Pickup", color: "#ff3a30"}, 
                1: {text: "< 2s", color: "#ff9500"}, 
                2: {text: "> 2s", color: "#34c759"} 
            }
        },


    //endgame
        {
            name: "end_state",
            presentableName: "End State",
            category: XDSACategory.ENDGAME,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "None"}, 
                1: {text: "Parked"}, 
                2: {text: "Shallow"},
                3: {text: "Deep"} 
            }
        },
        {
            name: "climb_speed",
            presentableName: "Climb Speed",
            category: XDSACategory.ENDGAME,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.ENUMERATION,
            enumValues: {
                0: {text: "None"}, 
                1: {text: "< 5s"}, 
                2: {text: "> 5s"},
                3: {text: "> 10s"} 
            }
        },
        

        //driver
        {
            name: "failed",
            presentableName: "Failed?",
            category: XDSACategory.DRIVER,
            type: XDSAType.BOOLEAN
        },
        {
            name: "defense",
            presentableName: "Defense",
            category: XDSACategory.DRIVER,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.SLIDER,
            default: 2,
            enumValues: {
                0: {text: "Bad"}, 
                1: {text: ""}, 
                2: {text: ""},
                3: {text: ""},
                4: {text: "Good"} 
            }
        },
        {
            name: "driver_perf",
            presentableName: "Driver Performance",
            category: XDSACategory.DRIVER,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.SLIDER,
            default: 2,
            enumValues: {
                0: {text: "Jerky"}, 
                1: {text: ""}, 
                2: {text: ""},
                3: {text: ""},
                4: {text: "Smooth"} 
            }
        },    
        {
            name: "tippiness",
            presentableName: "Tippiness",
            category: XDSACategory.DRIVER,
            type: XDSAType.INTEGER,
            requested_presentation: XDSAPresentationRequest.SLIDER,
            default: 2,
            enumValues: {
                0: {text: "Tippy"}, 
                1: {text: ""}, 
                2: {text: ""},
                3: {text: ""},
                4: {text: "Stable"} 
            }
        },


    //other
        {
            name: "comments",
            presentableName: "Other Comments",
            category: XDSACategory.OTHER,
            type: XDSAType.STRING
        }

    

] as const


