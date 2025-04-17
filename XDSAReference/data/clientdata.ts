import AsyncStorage from '@react-native-async-storage/async-storage'
import { XDSAClient } from './client'
import uuid from 'react-native-uuid'

export const XDSACurrentClient = new XDSAClient("", fetch, uuid.v4)

AsyncStorage.getItem('endpoint-settings').then(
    (x) => {
        console.log("load succeeded")
        if (x)
            XDSACurrentClient.loadClientFromConfig(x, uuid.v4)
    }
)
.catch(() => {
    console.log("load failed")
})


export function storeXDSAClientToJSONStore(client: XDSAClient) {

    AsyncStorage.setItem('endpoint-settings', client.serializeClient()).then(() => {console.log("stored")})

}