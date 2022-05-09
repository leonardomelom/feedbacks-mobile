
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { styles } from './style';
import { ChatTeardropDots} from 'phosphor-react-native'
export function Widget () {
  return (
    <>
      <TouchableOpacity style={styles.button}>
    <ChatTeardropDots 
    size={24}
    color={theme.colors.text_on_brand_color}
    weight="bold"
    />
      </TouchableOpacity>
    </>
   
  );
}


