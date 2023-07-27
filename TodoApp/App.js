/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorage from './storages/todosStorage';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: 'react native 기초 공부', done: false},
    {id: 3, text: 'Make TodoList', done: false},
  ]);

  // 불러오기
  useEffect(() => {
    // async function load() {
    //   try {
    //     const rawTodos = await AsyncStorage.getItem('todos');
    //     const saveTodos = JSON.parse(rawTodos);
    //     setTodos(saveTodos);
    //   } catch (e) {
    //     console.log('failed to load todos');
    //   }
    // }
    // load();
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  // 저장
  useEffect(() => {
    // async function save() {
    //   try {
    //     await AsyncStorage.setItem('todos', JSON.stringify(todos));
    //   } catch (e) {
    //     console.log('failed to save todos');
    //   }
    // }
    // save();
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.avoid}>
        <DateHead date={today} />
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
