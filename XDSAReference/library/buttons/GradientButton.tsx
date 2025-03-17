import { LinearGradient } from "expo-linear-gradient";
import { Color } from "@/library/theme/basethemes";
import { BoldText, Text } from "@/library/bases/ThemedText";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@/library/context";

export default function SKGradientButton({colors, title, subtitle, icon, disabled, onPress}: {colors: readonly [string, string, ...string[]], title: string, subtitle?: string, icon: string, disabled?: boolean, onPress?: () => void}) {
    
    const theme = useTheme()
    
    return (

        <TouchableOpacity style={{flex: 1}} onPress={onPress} disabled={disabled}>

            <LinearGradient style={{borderRadius: 10, padding: 15, justifyContent: 'center', alignItems: 'center', flex: 1}} end={{x: 0, y: 1}} colors={disabled ? [theme.mg.rgba(), theme.mg.rgba()] : colors}>

                <BoldText style={{color: disabled ? (new Color(theme.main.r, theme.main.g, theme.main.b, 0.5)).rgba() : 'white' , zIndex: 12, fontSize: 25}}>{title}</BoldText>
                {subtitle ? <Text style={{color: disabled ? (new Color(theme.main.r, theme.main.g, theme.main.b, 0.5)).rgba() : 'white', zIndex: 12}}>{subtitle}</Text> : null }


                {disabled ? null : <FontAwesome6 name={icon} size={80} color={(new Color(0,0,0,0.1)).rgba()} style={{position: 'absolute', right: -10, bottom: -20}}/>}

            </LinearGradient>

        </TouchableOpacity>

    )

}