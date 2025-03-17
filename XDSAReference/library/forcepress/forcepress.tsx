import { ReactNode } from "react"
import { TouchableOpacity } from "react-native"


import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";


export const ForcePressEvent = new EventEmitter()

export function forcePressEvent() {

    ForcePressEvent.emit("forcepress", {})

}

export function triggerForcePressMenu() {

    console.log("Force Pressed")
    forcePressEvent()

}