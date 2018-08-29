import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";

class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      y: new Animated.Value(0)
    };
  }

  _slide = () => {
    this.state.y.setValue(0);
    Animated.spring(this.state.y, {
      toValue: 0,
      duration: 10000
    }).start();
  };

  _press() {
    this._slide();
    this.setState({
      showText: !this.state.showText
    });
  }

  render() {
    return (
      <View key={this.props.about}>
        <TouchableHighlight onPress={() => this._press()}>
          {this.state.showText ? (
            <Text>- {this.props.data.title}</Text>
          ) : (
            <Text> + {this.props.data.title}</Text>
          )}
        </TouchableHighlight>
        {this.state.showText && (
          <Animated.View
            style={{
              transform: [
                {
                  translateY: this.state.y
                }
              ]
            }}
          >
            <Text>{this.props.data.description}</Text>
          </Animated.View>
        )}
      </View>
    );
  }
}

export default Conducts;
