/**
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
'use strict';

var React = require('react-native');
var { fetch } = require('fetch');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  inc() {
    var newCount = this.state.count + 1;
    this.setState({count: newCount});
    fetch(
      'https://api.conunter.io/?value=' + newCount,
      { method: 'post' }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {this.state.count}
        </Text>
        <Button
          title="Add +1"
          onPress={() => this.inc()}
        />
      </View>
    );
  }
}

class Button extends React.Component {
  render() {
    var {title, ...props} = this.props;
    return (
      <TouchableOpacity {...props}>
        <View style={styles.button}>
          <Text style={styles.label}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingBottom: 70,
  },
  value: {
    fontSize: 100,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#337ab7',
    alignItems: 'center',
    width: 200,
  },
  label: {
    color: 'white',
    fontSize: 16,
  }
});

AppRegistry.registerComponent('Counter', () => Counter);
