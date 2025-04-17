import { XDSADatapoint, XDSAInformation, XDSAType } from '@newtonxdsa/types'
import { generateZodTypeFromConfig } from "@newtonxdsa/helpers"

interface BasicRepXDSAClient {
    endpoint: string,
    server_config: XDSADatapoint[],
    server_info: XDSAInformation,
    template: Object,
    lastUpdated: string
}

export class XDSAClient {

    endpoint: string;
    api_func: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
    uuid_func: () => string;
    server_config: XDSADatapoint[] = []
    server_info: XDSAInformation = {
        name: '',
        team: 0,
        team_name: '', 
        team_color: '#0093b0'
    }
    template: Object = {}
    lastUpdated: string = (new Date()).toLocaleString()

    constructor(endpoint: string, fetch_compat_api_handler: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>, uuid: () => string) {
        
        if (endpoint.slice(endpoint.length-1) == "/") {    
            this.endpoint = endpoint.slice(0, endpoint.length-1) + "/api";
        }
        else {
            this.endpoint = endpoint + "/api";
        }
        
        this.api_func = fetch_compat_api_handler;
        this.uuid_func = uuid;

    }

    setEndpoint(endpoint: string) {
        if (endpoint.slice(endpoint.length-1) == "/") {    
            this.endpoint = endpoint.slice(0, endpoint.length-1) + "/api";
        }
        else {
            this.endpoint = endpoint + "/api";
        }
    }

    serializeServerConfig(): string {

        return JSON.stringify(this.server_config);

    }

    serializeClient(): string {

        const clientBasicRepresentation: BasicRepXDSAClient = {
            endpoint: this.endpoint,
            server_config: this.server_config,
            server_info: this.server_info,
            template: this.template,
            lastUpdated: this.lastUpdated
        }
        return JSON.stringify(clientBasicRepresentation)
    }

    loadClientFromConfig(rep: string, uuid: () => string) {

        const clientBasicRepresentation: BasicRepXDSAClient = JSON.parse(rep)
        let client = new XDSAClient("", fetch, uuid)
        this.endpoint = clientBasicRepresentation.endpoint
        this.server_config = clientBasicRepresentation.server_config
        this.template = clientBasicRepresentation.template
        this.server_info = clientBasicRepresentation.server_info
        this.lastUpdated = clientBasicRepresentation.lastUpdated

    }

    generateTemplate() {

        let template: {[key: string]: any} = {id: this.uuid_func() as string}

        for (let datapoint of this.server_config) {

            let datapointkey = datapoint.name;
            let datapointvalue: any

            if (datapoint.default) {

                datapointvalue = datapoint.default

            }
            else {
                switch (datapoint.type) {

                    case XDSAType.BOOLEAN:
                        datapointvalue = false;
                        break;

                    case XDSAType.INTEGER:
                        datapointvalue = 0;
                        break;

                    case XDSAType.FLOAT:
                        datapointvalue = 0.0;
                        break;

                    case XDSAType.STRING:
                        datapointvalue = ""
                        break;

                }
            }

            template[datapointkey] = datapointvalue

        }

        return template

        
    }

    validateEntry(entry: Object): boolean {
        let d = generateZodTypeFromConfig(this.server_config)
        return d.safeParse(entry).success
    }

    async getServerConfig(): Promise<XDSADatapoint[]>  {

        let response = await this.api_func(this.endpoint + "/info/match/fields")
        console.log(response.ok)
        if (response.ok) {
            this.server_config = (await response.json())
            this.template = this.generateTemplate()
            this.lastUpdated = (new Date()).toLocaleString()
            return this.server_config
        }
        else {
            console.log(`Getting configurations from ${this.endpoint} failed. Is this a valid XDSA Instance?`)
            throw new Error(`Getting configurations from ${this.endpoint} failed. Is this a valid XDSA Instance?`)
        } 
        
    }

    async getServerInfo(): Promise<XDSAInformation>  {

        let response = await this.api_func(this.endpoint + "/info/")
        if (response.ok) {
            this.server_info = (await response.json())
            return this.server_info
        }
        else {
            console.log(`Getting configurations from ${this.endpoint} failed. Is this a valid XDSA Instance?`)
            throw new Error(`Getting configurations from ${this.endpoint} failed. Is this a valid XDSA Instance?`)
        } 
        
    }



    async addEntry(entry: any) {
        let d = generateZodTypeFromConfig(this.server_config)
        const parse = d.safeParse(entry)

        if (parse.success) {

            const response = await this.api_func(this.endpoint + "/match-data/create", {method: "POST", body: JSON.stringify(parse.data)})
            if (!response.ok) {
                throw new Error("Failed to send to the server. Maybe no connection?")
            }
            else {
                console.log("Send succeeded!")
            }

        }

        else {

            throw new Error("This data is not valid in terms of the schema set up by the previous object.")

        }
    }



}

