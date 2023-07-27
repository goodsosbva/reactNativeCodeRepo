import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';

const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);

      if (!rawTodos) {
        throw new Error('no saved todos!');
      }
      const saveTodos = JSON.parse(rawTodos);
      return saveTodos;
    } catch (e) {
      throw new Error('failed to load todos');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('failed to save todos');
    }
  },
};

export default todosStorage;
