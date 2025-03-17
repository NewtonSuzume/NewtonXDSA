import { XDSADatapoint } from '@8592/config_utils'

export class XDSAClient {

    endpoint: string;
    api_func: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

    constructor(endpoint: string, fetch_compat_api_handler: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) {
        
        if (endpoint.slice(endpoint.length-1) == "/") {    
            this.endpoint = "http://" + endpoint.slice(0, endpoint.length-1) + "/api";
        }
        else {
            this.endpoint = "http://" + endpoint + "/api";
        }
        
        this.api_func = fetch_compat_api_handler;
        console.log("go")
    }

    async getServerConfig(): Promise<XDSADatapoint>  {
        console.log(this.endpoint)
        return (await this.api_func(this.endpoint + "/info/fields")).json()

    }

}


