import { SKBlockIconButton } from '@/library/buttons/ThemedButton';
import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKModalHeaderBar } from '@/library/headers/HeaderBar';
import { FormEnumObject, SKFGViewForm, SKFormEnum, SKFormNumField, SKFormSwitch, SKFormTextField, SKFormSlider, SKFormCounter } from '@/library/form/FormItems';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';
import { storeXDSAClientToJSONStore, XDSACurrentClient } from '@/data/clientdata';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { generateZodTypeFromConfig, XDSACategory, XDSADatapoint, XDSAEnumConfiguration, XDSAPresentationRequest, XDSAType } from '@8592/config_utils';
import GeneratedForm from '@/components/formgenerator/AutoForm';
import { router } from 'expo-router';


export default function CreateEntryForm() {

  const [form, setForm] = useState(XDSACurrentClient.generateTemplate())



  return (

    <SKModalHeaderBar title='Custom Defaults' interactionsR={
    <SKBlockIconButton icon="pencil" text='Set' onPress={() => {

      for (let item of Object.entries(form)) {
        if (item[0] != "id") {
          let ind = XDSACurrentClient.server_config.findIndex(x => x.name == item[0])
          console.log(ind)
          XDSACurrentClient.server_config[ind].default = item[1]
        }
      }

      storeXDSAClientToJSONStore(XDSACurrentClient)
      router.back()

    }}/>
    }>

        
        <GeneratedForm form={form} setForm={setForm}/>


    </SKModalHeaderBar>

  );
}

