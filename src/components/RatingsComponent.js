import React, { PureComponent } from 'react';
import { View } from 'react-native';
import StarRating from 'react-native-star-rating';

import asyncStorage from '../database/AsyncStorage';
import Colors from '../config/Colors';

class RatingsComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          starCount: 0,
          colorPrimary: Colors.colorPrimary
        };
      }

      render() {
        return (
        <View style={{
            backgroundColor: this.state.colorPrimary,
            width: 220,
            borderRadius: 25,
            padding: 6,
        }}>
          <StarRating
            disabled={false}
            emptyStar={'ios-star'}
            emptyStarColor={'#c83675'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'white'}
          />
        </View>
        );
      } 

      componentDidMount() {
        this.getColor();
      }


      onStarRatingPress(rating) {
        alert(`Bạn đã đánh giá ${rating} sao`)
        this.setState({
          starCount: rating
        });
      }

      getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color })
            }
        })
    }
}

export default RatingsComponent;