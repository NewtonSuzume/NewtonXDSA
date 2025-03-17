import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";


const EntryContext = createContext<{entries: Object[], setEntries: React.Dispatch<React.SetStateAction<Object[]>>} | null>(null)

export function EntryListContext({children}: {children: ReactNode}) {

    const [entries, setEntries] = useState<Object[]>([])

    useEffect(() => {
        AsyncStorage.getItem("entries").then( x => {if (x) setEntries(JSON.parse(x))} )
    }, [])


    return (
        <EntryContext.Provider value={{entries, setEntries}}>
            {children}
        </EntryContext.Provider>
    )

}

export function useEntryListProvider() {

    return useContext(EntryContext)

}

export function addToEntryList(state: {entries: Object[], setEntries: React.Dispatch<React.SetStateAction<Object[]>>}, item: Object) {

    const entr = [...state.entries, item]

    state.setEntries(entr)
    AsyncStorage.setItem("entries", JSON.stringify(entr));

}

export function loadEntries(context: {entries: Object[], setEntries: React.Dispatch<React.SetStateAction<Object[]>>}) {
    AsyncStorage.getItem("entries").then((x) => {
        if (x)
            context.setEntries(JSON.parse(x))
            console.log("tried to load")
            console.log(x)
    })
}
