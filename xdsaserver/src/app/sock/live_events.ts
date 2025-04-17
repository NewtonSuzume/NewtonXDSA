import WebSocket, { WebSocketServer } from 'ws'
import { ServerInfo } from '../../../configurations/xdsa_config'
import { XDSAEvent, XDSAGatewayHello } from '@newtonxdsa/types'

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const wss = new WebSocketServer({

    port: 8592

})

export let connections: WebSocket[] = []



wss.on("connection", (x) => {

    const hello: XDSAGatewayHello = {
        server_info: ServerInfo,
        heartbeat: getRandomInt(30000, 60000)
    }

    let event: XDSAEvent = {
        event: 0,
        name: "hello",
        data: JSON.stringify({hello})
    }

    let killswitch = setInterval(() => {

        connections.splice(connections.indexOf(x), 1)
        x.close()
         
    }, hello.heartbeat)

    x.send(JSON.stringify(event))

    connections.push(x)


    x.on("message", (data: XDSAEvent) => {


        if (data.event = 1) {

            let hbr: XDSAEvent = {
                event: 2,
                name: 'hb_resp',
                data: ''
            }

            clearInterval(killswitch)

            x.send(JSON.stringify(hbr))

            killswitch = setInterval(() => {

                connections.splice(connections.indexOf(x), 1)
                x.close()
                
            }, hello.heartbeat)

        }

    })

    

})


export function sendContentToSockets(event: number, name: string, data: Object) {

    let item: XDSAEvent = {
        event: event,
        name: name,
        data: JSON.stringify(data)
    }


    for (let i of connections) {

        i.send(JSON.stringify(item))

    }

}