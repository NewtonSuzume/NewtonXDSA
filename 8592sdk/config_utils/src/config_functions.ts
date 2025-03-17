import { XDSADatapoint, XDSAType } from "./config_types";
import {z, ZodType} from "zod"

export function generateZodTypeFromConfig(datapoints: XDSADatapoint[]): ZodType {

    let generationType = {
        id: z.string().uuid()
    }   
    for (let datapoint of datapoints) {

        let z_type_selection: ZodType

        switch (datapoint.type) {

            case (XDSAType.STRING):
                z_type_selection = z.string()
                break;

            case (XDSAType.INTEGER):
                z_type_selection = z.number()
                break;

            case (XDSAType.FLOAT):
                z_type_selection = z.number()
                break;

            case (XDSAType.BOOLEAN):
                z_type_selection = z.boolean()
                break;

        }

        //@ts-ignore
        generationType[datapoint.name] = z_type_selection

    }

    return z.object(generationType)

}

