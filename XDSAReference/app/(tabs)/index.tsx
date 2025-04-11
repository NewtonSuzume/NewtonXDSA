import { SKBlockIconButton, SKIconButton } from '@/library/buttons/ThemedButton';
import { useTheme } from '@/library/context';
import { Color } from '@/library/theme/basethemes';
import { SKRootFlatList, SKRootFlatListGradient, SKRootHeaderBar, SKRootHeaderBarGradient } from '@/library/headers/HeaderBar';
// @ts-ignore
import { router } from 'expo-router';
import { useEntryListProvider } from '@/data/MatchEntry/MatchEntryContext';
import { SKBoldText, SKText } from '@/library/bases/ThemedText';
import { SKBlockView } from '@/library/bases/ThemedViews';
import MatchEntryCard from '@/components/entries/entrycard';



export default function HomeScreen() {

  const theme = useTheme()

  const context = useEntryListProvider()

  return (

    <SKRootHeaderBar title='Entries' interactions={<SKBlockIconButton onPress={() => router.navigate("/modals/createentry")} icon="plus" text='Create'/>}>

      {
        context?.entries.map((x, i) => {
          return <MatchEntryCard obj={x} index={i} key={x.content.id}/>
        })
      }

    </SKRootHeaderBar>

  );
}

