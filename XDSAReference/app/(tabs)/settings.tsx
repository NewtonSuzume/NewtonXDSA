import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKRootHeaderBar } from '@/library/headers/HeaderBar';
import { SKFGViewForm, SKFormBasis, SKFormNavigation } from '@/library/form/FormItems';
import { storeXDSAClientToJSONStore, XDSACurrentClient } from '@/data/clientdata';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { Alert, TouchableOpacity, View } from 'react-native';
import { useEntryListProvider } from '@/data/MatchEntry/MatchEntryContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateSettings, useSettingsWorkaround } from '@/data/settingsreloadcontext/settingsreload';



export default function Settings() {

  const theme = useTheme()
  const secondColor = new Color(theme.sub.r, theme.sub.g, theme.sub.b, 0.2)
  const context = useEntryListProvider()
  const k = useSettingsWorkaround()

  return (

      <SKRootHeaderBar title="Settings">

        <SKFGViewForm subtitle="Server">

          <SKFormNavigation title={`${XDSACurrentClient.server_info.team === 0 ? "Connect to a Server..." : "Change Server..."}`} path="/modals/selectedserver"/>
          {
            XDSACurrentClient.server_info.team !== 0 ?
            <>
              <TouchableOpacity onLongPress={() => {
                
                Alert.alert("Refresh App?", "This will reset all defaults, clear all entries, and pull the newest field info from the server", [
                  {
                    text: "Cancel",
                    style: 'cancel'
                  },
                  {
                    text: "Refresh",
                    style: 'destructive',
                    onPress: async () => {
                      await XDSACurrentClient.getServerConfig()
                      await XDSACurrentClient.getServerInfo()
                      storeXDSAClientToJSONStore(XDSACurrentClient)
                      context?.setEntries([])
                      AsyncStorage.setItem("entries", JSON.stringify([]))
                      if (k) updateSettings(k)
                    }
                  }
                ])



              }}>
                <SKFormBasis key={k!.v} style={{flexDirection: 'column', alignItems:'flex-start', paddingVertical: 5}}>
                  <SKBoldText key={k!.v+1} style={{fontSize: 16, paddingBottom: 5}}>Currently linked to: </SKBoldText>
                  <SKBoldText key={k!.v+2}>{XDSACurrentClient.server_info.name}</SKBoldText>
                  <SKText key={k!.v+3}>Hosted by Team {XDSACurrentClient.server_info.team} ({XDSACurrentClient.server_info.team_name})</SKText>
                  <SKText key={k!.v+4}>Last Updated At: {XDSACurrentClient.lastUpdated}</SKText>
                  <SKBoldText key={k!.v+5} style={{paddingVertical: 5}}>(long press to update)</SKBoldText>
                </SKFormBasis>
              </TouchableOpacity>

            </>
            :
            <></>
          }
        </SKFGViewForm>


          {
            XDSACurrentClient.server_info.team !== 0 ?
            <>
              <SKFGViewForm subtitle="Defaults">
              <SKFormNavigation title='Set Custom Defaults' path="/modals/setdefaults"/>
              </SKFGViewForm>

            </>
            :
            <></>
          }

      </SKRootHeaderBar>

  );
}

