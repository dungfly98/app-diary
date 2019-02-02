import React, { PureComponent } from 'react';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import Colors from '../config/Colors';

class EmojiSelectorCompoment extends PureComponent {
    render() {
        return (
            <EmojiSelector
                columns={11}  
                showTabs={false}
                showSearchbar={false}  
                category={Categories.people}
                style={{ backgroundColor: Colors.colorWhite, height: 250}} 
                onEmojiSelected={emoji => {this.props.onEmojiSelected(emoji)}}
            />         
        );
    }
}

export default EmojiSelectorCompoment;