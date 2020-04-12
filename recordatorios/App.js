import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal } from 'react-native';
import Item from './Item';
import Button from './Button';
import datos from './Datos';
import Input from './Input';


export default class App extends React.Component {

  state = {
    data: datos,
    isVisible: true,
    text: ''
  }

  handlePress = () => {
    this.setState({ isVisible: true });
  }

  handleChange = text => this.setState({text});

  handleSave = () => {
    const {text, data} = this.state;
    const datos = [{key: Math.random().toString(), title: text}].concat(data);
    this.setState({
      data: datos,
      isVisible: false,
      text: ''
    })
  }

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Recordatorios</Text>
        </View>
        <View style={ styles.view }>
          <Button title='Agregar' onPress={this.handlePress}/>
        </View>
        <FlatList data={ data } renderItem={Item}></FlatList>
        <Modal animationType='slide' visible={this.state.isVisible}>
          <View style={[styles.container, styles.center]}>
            <Text style={styles.modalTitle}>Ingrese recordatorio</Text>
            <Input 
              placeholder='Recordatorio' 
              onChangeText={this.handleChange} 
              value={this.state.text}
              />
              <Button title='Guardar' onPress={this.handleSave}/>
          </View>
        </Modal>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // use el campo visual
    backgroundColor: "#fff",
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 28,
  },
  view: {
    height: 70,
    margin: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  gray: {
    backgroundColor: "#eee"
  },
  modalTitle: {
    fontSize: 28
  }
});
