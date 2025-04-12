import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";


const SettingsContext = createContext<{v: number, setValue: React.Dispatch<React.SetStateAction<number>>} | null>(null)

export function SettingsUpdateContext({children}: {children: ReactNode}) {

    const [v, setValue] = useState<number>(0)

    useEffect(() => {
        AsyncStorage.getItem("entries").then( x => {if (x) setValue(JSON.parse(x))} )
    }, [])


    return (
        <SettingsContext.Provider value={{v, setValue}}>
            {children}
        </SettingsContext.Provider>
    )

}

export function useSettingsWorkaround() {

    return useContext(SettingsContext)

}

export function updateSettings(ctx: {v: number, setValue: React.Dispatch<React.SetStateAction<number>>}) {

    let e = ctx.v + 1

    ctx.setValue(e)

}

