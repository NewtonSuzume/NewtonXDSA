import z from "zod";
import { generateZodTypeFromConfig } from "../../config_utils";
import { Configuration } from "../../../nasapage/configurations/xdsa_config";

export const dynamicMatchSchema = generateZodTypeFromConfig(Configuration)

