import { SKBlockIconButton } from '@/library/buttons/ThemedButton';
import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKModalHeaderBar } from '@/library/headers/HeaderBar';
import { SKFGViewForm, SKFormEnum, SKFormTextField } from '@/library/form/FormItems';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { ActivityIndicator, View } from 'react-native';
import { useState } from 'react';
import { storeXDSAClientToJSONStore, XDSACurrentClient } from '@/data/clientdata';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { XDSADatapoint } from '@8592/config_utils';
import { router } from 'expo-router';


export default function SelectedServer() {

  const theme = useTheme()
  const secondColor = new Color(theme.sub.r, theme.sub.g, theme.sub.b, 0.2)
  const [step, setStep] = useState(0);
  const [url, setURL] = useState("")
  const [HTTPSEnabled, setHTTPSEnabled] = useState(true);
  const [XDSAStatus, setXDSAStatus] = useState(0);
  const [XDSAFields, setXDSAFields] = useState<XDSADatapoint[]>([])

  function Pages(pagenum: number) {

    if (pagenum === 0) {

      return (
        <View style={{alignItems: 'center', justifyContent: 'center', height: "82%"}}>
              <SKBoldText style={{fontSize: 30, textAlign: 'center', paddingBottom: 12}}>
                Connect to an XDSA Instance
              </SKBoldText>
              <SKFGViewForm style={{width: "100%"}}>
                <SKFormTextField autoCorrect={false} text={url} onChange={(x) => {setURL(x); setXDSAStatus(0)}} placeholder='URL'/>
                <SKFormEnum title="Security" onChange={(value) => {setHTTPSEnabled(value); setXDSAStatus(0)}} defaultValue={false} items={[
                  {
                    value: false, 
                    title: "HTTP", 
                    component: ({color}) => <TabBarIcon style={{marginBottom: 2}} color={color} name={"unlock"} size={15}/>
                  },
                  {
                    value: true, 
                    title: "HTTPS",
                    component: ({color}) => <TabBarIcon style={{marginBottom: 2}} color={color} name={"lock"} size={15}/>
                  }
                ]}
                ></SKFormEnum>
              </SKFGViewForm>
              <SKText style={{color: "#FF3B30", paddingBottom: 10, textAlign: 'center'}}>{XDSAStatus == 1 ? "That wasn't a valid XDSA Instance." : ""}</SKText>
              <View style={{height: 50, alignItems: 'center', justifyContent: 'center'}}>
                {XDSAStatus == 2 ? <ActivityIndicator/> : 

                XDSAStatus == 3 ?
                  
                  <TabBarIcon name="check" color='#34C759'/> :
                  <SKBlockIconButton enabled={url !== ""} onPress={async () => {

                    setXDSAStatus(2)
                    XDSACurrentClient.setEndpoint((HTTPSEnabled ? "https://" : "http://") + url)

                    try {
                      let x = await XDSACurrentClient.getServerConfig()
                      let y = await XDSACurrentClient.getServerInfo()
                      setXDSAFields(x)
                      setXDSAStatus(3)
                      storeXDSAClientToJSONStore(XDSACurrentClient)
                      setTimeout(() => {router.back()}, 200)
                    }
                    catch {
                      setXDSAStatus(1)
                    }


                  }} icon={"plug-circle-check"} text='Connect'/>
              
              }
              </View>
        </View>
      )

    }



  }



  return (

    <SKModalHeaderBar title='XDSA Setup' noScroll={true}>

      {

        Pages(step)
        
      }
      

    </SKModalHeaderBar>

  );
}

