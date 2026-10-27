import React,{useEffect,useState} from 'react';
import {Text,ActivityIndicator} from 'react-native';
import {doc,onSnapshot} from 'firebase/firestore';
import {db} from '../../config/firebase';
import {Page,Header,Button,S,C} from '../../components/theme';
export default function Perfil({navigation,route}){const [item,setItem]=useState(null);useEffect(()=>{if(!db||!route.params?.id)return;return onSnapshot(doc(db,'personagens',route.params.id),s=>setItem(s.exists()?{id:s.id,...s.data()}:null))},[route.params?.id]);return <Page><Header navigation={navigation} title="Perfil do personagem"/>{!item?<Text style={S.body}>Registro indisponível ou carregando...</Text>:<><Text style={{fontSize:60,textAlign:'center',color:C.gold}}>⚔</Text><Text style={[S.title,{textAlign:'center'}]}>{item.nome}</Text><Text style={[S.subtitle,{textAlign:'center'}]}>{item.especie}</Text><Text style={S.label}>ARMA OU PODER</Text><Text style={S.body}>{item.arma||'Não informado'}</Text><Text style={S.label}>HISTÓRIA</Text><Text style={S.body}>{item.descricao||'Sem descrição'}</Text><Button title="✎ Editar personagem" onPress={()=>navigation.navigate('Editar',{id:item.id})}/></>}</Page>}
