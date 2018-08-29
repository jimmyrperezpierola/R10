import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";
import styles from "./styles";

class Conducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      opacity: new Animated.Value(0)
    };
  }

  _fade() {
    this.state.opacity.setValue(this.state.showText ? 1 : 0);
    Animated.timing(this.state.opacity, {
      toValue: this.state.showText ? 0 : 1,
      duration: 2000
    }).start();
  }

  _press() {
    this._fade();
    this.setState({
      showText: !this.state.showText
    });
  }

  render() {
    return (
      <View key={this.props.about}>
        <TouchableHighlight onPress={() => this._press()}>
          {this.state.showText ? (
            <Text style={styles.title}>- {this.props.data.title}</Text>
          ) : (
            <Text style={styles.title}> + {this.props.data.title}</Text>
          )}
        </TouchableHighlight>
        {this.state.showText && (
          <Animated.View style={{ opacity: this.state.opacity }}>
            <Text style={styles.description}>
              {this.props.data.description}
            </Text>
          </Animated.View>
        )}
      </View>
    );
  }
}

export default Conducts;
