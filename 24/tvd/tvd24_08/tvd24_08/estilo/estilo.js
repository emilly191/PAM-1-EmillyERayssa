import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 20,
  },

  item: {
    backgroundColor: '#1f2937',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#8b5cf6',
  },

  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },

  genero: {
    fontSize: 15,
    color: '#c4b5fd',
    marginBottom: 4,
  },

  ano: {
    fontSize: 14,
    color: '#9ca3af',
  },
});

export default styles;
