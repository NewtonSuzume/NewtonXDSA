import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKRootHeaderBar } from '@/library/headers/HeaderBar';
import { SKFGViewForm, SKFormBasis, SKFormNavigation } from '@/library/form/FormItems';
import { storeXDSAClientToJSONStore, XDSACurrentClient } from '@/data/clientdata';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { Alert, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { useEntryListProvider } from '@/data/MatchEntry/MatchEntryContext';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Settings() {

  const theme = useTheme()
  const secondColor = new Color(theme.sub.r, theme.sub.g, theme.sub.b, 0.2)
  const [k, sk] = useState(0);
  const context = useEntryListProvider()

  return (

      <SKRootHeaderBar title="Settings">

        <SKFGViewForm subtitle="Server">

          <SKFormNavigation title={`${XDSACurrentClient.server_info.team === 0 ? "Connect to a Server..." : "Change Server..."}`} path="/modals/selectedserver"/>
          {
            XDSACurrentClient.server_info.team !== 0 ?
            <>
              <TouchableOpacity key={k} onLongPress={() => {
                
                Alert.alert("Refresh App?", "This will reset all defaults, clear all entries, and pull the newest field info from the server", [
                  {
                    text: "Cancel",
                    style: 'cancel'
                  },
                  {
                    text: "Refresh",
                    style: 'destructive',
                    onPress: () => {
                      XDSACurrentClient.getServerConfig().then(() => {storeXDSAClientToJSONStore(XDSACurrentClient)})
                      context?.setEntries([])
                      AsyncStorage.setItem("entries", JSON.stringify([]))
                      sk(k+1)
                    }
                  }
                ])



              }}>
                <SKFormBasis style={{flexDirection: 'column', alignItems:'flex-start', paddingVertical: 5}}>
                  <SKBoldText style={{fontSize: 16, paddingBottom: 5}}>Currently linked to: </SKBoldText>
                  <SKBoldText>{XDSACurrentClient.server_info.name}</SKBoldText>
                  <SKText>Hosted by Team {XDSACurrentClient.server_info.team} ({XDSACurrentClient.server_info.team_name})</SKText>
                  <SKText>Last Updated At: {XDSACurrentClient.lastUpdated}</SKText>
                  <SKBoldText style={{paddingVertical: 5}}>(long press to update)</SKBoldText>
                </SKFormBasis>
              </TouchableOpacity>w

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

