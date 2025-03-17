import { ReactNode, createContext, useContext, useState } from "react";
import { Theme, ThemeColors, basetheme } from "./theme/basethemes";
import { Pressable, useColorScheme, View } from "react-native";
import { BlurView } from "expo-blur";
// import { FGView } from "./bases/ThemedViews";
// import { Text } from "./bases/ThemedText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ForcePressEvent } from "./forcepress/forcepress";


const ThemeContext = createContext<ThemeColors>(basetheme['light'])


export default function SakakiContext({children, theme}: {children: React.ReactNode, theme?: Theme}) {


    const pickedTheme: ThemeColors = (theme === undefined ? basetheme : theme)[useColorScheme() === "dark" ? "dark" : "light"]
    const insets = useSafeAreaInsets()


    return (
        <ThemeContext.Provider value={pickedTheme}>

            {children}

        </ThemeContext.Provider>
    )
}

export function useTheme() {

    return useContext(ThemeContext)

}
