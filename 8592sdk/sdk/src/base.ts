import { RequestInfo, RequestInit, Response } from "node-fetch"
import { MatchEntry, MatchEntryExcludeObj, PitEntryExcludeObj, PitEntry } from "@8592/types";
import { NewMatchEntrySchema, NewPitEntrySchema } from "@8592/types";

export type MatchEntryCreateInput = MatchEntry | MatchEntryExcludeObj | NewMatchEntrySchema;
export type PitEntryCreateInput = PitEntry | PitEntryExcludeObj | NewPitEntrySchema;

export class Client {

    base: string 
    fetch: Function

    constructor(base: string, fetch: Function) {
        this.base = base
        this.fetch = fetch
    }

    async _sender(endpoint: string, data: string) {


        let error = false;
        const mode = 'POST'
        
        const headers = {
            "Content-Type": "application/json"
        }


        return this.fetch(`${this.base}${endpoint}`, {
            method: mode,
            headers: headers,
            body: data
        })



    }

    async _reciever(endpoint: string) {
        let error = false;
        const mode = 'GET'
        
        const headers = {
            "Content-Type": "application/json"
        }


        return this.fetch(`${this.base}${endpoint}`, {
            method: mode,
        })
    }

    public get matchOps() {

        return { 
            create: async (data: MatchEntryCreateInput) => {
                const pack = JSON.stringify(data)

                console.log("trigger")

                try{
                    return await this._sender("/match-data/create", pack).then(async (r: Response) => {
                        if (r.ok) {
                            console.log("worked")
                            return {data: await r.json(), sent: true}
                        }
                        else {
                            console.error(await r.status)
                            return {data: await r.json(), sent: false}
                        }
                    })
                }
                catch(e) {
                    console.error(e)
                    return {data: [], sent: false}
                }
            },

            getAll: async () => {


                try{
                    return await this._reciever("/match-data/").then(async (r: Response) => {
                        if (r.ok) {
                            console.log("worked")
                            return {data: await r.json()}
                        }
                        else {
                            console.error(await r.status)
                            return {data: await r.json()}
                        }
                    })
                }
                catch(e) {
                    console.error(e)
                    return {data: []}
                }

            }
        }

    }

}