import { SKBoldText, SKSubText, SKText } from "@/library/bases/ThemedText";
import { SKBlockView } from "@/library/bases/ThemedViews";
import { TouchableOpacity, View } from "react-native";
// @ts-ignore
import { router } from "expo-router"
import { Color } from "@/library/theme/basethemes";

export default function MatchEntryCard({obj, index}: {obj: Object, index: number}) {
    return (
        <TouchableOpacity onLongPress={() => {
            router.navigate(`modals/${index}`)
        }}>
            <SKBlockView>
                <SKBoldText style={{fontSize: 20}}>Team {obj.content.team_number}, Match {obj.content.match_num}</SKBoldText>
                <View style={{flexDirection: 'row', paddingVertical: 5, alignItems: 'center'}}>
                    <View style={{height:10, width:10, borderRadius: 15, backgroundColor: obj.send_success ? new Color(52, 199, 89, 255).rgba() : new Color(255, 59, 48, 255).rgba(), marginRight: 5}}/>
                    <SKText>{obj.send_success ? "Synced" : "Not Synced"}</SKText>
                </View>
                <SKSubText style={{fontSize: 8}}>ID: {obj.content.id}</SKSubText>
            </SKBlockView>
        </TouchableOpacity>
    )
}