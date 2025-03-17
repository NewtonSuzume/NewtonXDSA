import { XDSAClient } from "./client";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const XDSACurrentClient = new XDSAClient("", fetch)

AsyncStorage.getItem('endpoint-settings').then(
    (x) => {
        console.log("load succeeded")
        if (x)
            XDSACurrentClient.loadClientFromConfig(x)
    }
)
.catch(() => {
    console.log("load failed")
})


export function storeXDSAClientToJSONStore(client: XDSAClient) {

    AsyncStorage.setItem('endpoint-settings', client.serializeClient()).then(() => {console.log("stored")})

}