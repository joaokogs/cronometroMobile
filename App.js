import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';



export default function App() {

  const [time,setTime] = useState(0);

  const [timerOn, setTimerOn] = useState(false);

  const [marcador, setMarcador] = useState([time]);

  useEffect(()=>{
    let interval = null;

    if(timerOn){
      interval = setInterval(()=>{
        setTime(prevTime => prevTime + 10)
      },10)
    }else{
      clearInterval(interval);
    }

    return ()=> clearInterval(interval)
  },[timerOn])

  function inicar(){
    setTimerOn(true);
  };

  function zerar(){
    setTime(0)
  };

  function parar(){
    setTimerOn(false)
  };

  function marcar(){
    setMarcador(time)
  }

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Text style={styles.timerMili}>{("0"+ Math.floor((time/60000)%60)).slice(-2)}</Text>
        <Text style={styles.timerMili}>:{("0"+ Math.floor((time/1000)%60)).slice(-2)}</Text>
        <Text style={styles.timerMili}>:{("0"+((time/10)%100)).slice(-2)}</Text>
      </View>
      

      <View style={styles.btn}>

        {!timerOn && time > 0 &&(
          <TouchableOpacity style={styles.zerar} onPress={zerar}>
            <Text style={styles.inicarTxt}>Zerar</Text>
          </TouchableOpacity>

        )}
        
        {timerOn &&(
          <TouchableOpacity style={styles.parar} onPress={parar}>
            <Text style={styles.inicarTxt}>Parar</Text>
          </TouchableOpacity>
        )}
        

        {!timerOn &&(
          <TouchableOpacity style={styles.inicar} onPress={inicar}>
            <Text style={styles.inicarTxt}>Iniciar</Text>
          </TouchableOpacity>
        )}
        
      </View>

        <View style={styles.marcador}>
            <TouchableOpacity style={styles.btnMarcador} onPress={marcar}>
              <Text style={styles.inicarTxt}>Marcar</Text>
            </TouchableOpacity>
          
              <Text style={styles.marcadorTxt} >
                <Text style={styles.timerMarcador}>{("0"+ Math.floor((marcador/60000)%60)).slice(-2)}</Text>
                <Text style={styles.timerMarcador}>:{("0"+ Math.floor((marcador/1000)%60)).slice(-2)}</Text>
                <Text style={styles.timerMarcador}>:{("0"+((marcador/10)%100)).slice(-2)}</Text>
              </Text>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212529',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor:'#212529'
    
  },

  timerMili:{
    fontSize:50,
    color:'#fff'
  },

  btn:{
    flexDirection:'row',
    marginTop:30
  },

  inicar:{
    margin:10,
    backgroundColor:'#348c41',
    padding:15,
    borderRadius:50,
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center'
  },

  inicarTxt:{
    fontSize:18,
    color:'#fff'
  },

  zerar:{
    margin:10,
    backgroundColor:'#6b736d',
    padding:15,
    borderRadius:50,
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center'
  },

  parar:{
    margin:10,
    backgroundColor:'#f54242',
    padding:15,
    borderRadius:50,
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
  },
  btnMarcador:{
    backgroundColor:'#4287f5',
    padding:16,
    borderRadius:12,
    marginRight:50
  },
  marcador:{
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    marginTop:30,
  
  },
  timerMarcador:{
    fontSize:30,
    color:'#fff'
  }
});
