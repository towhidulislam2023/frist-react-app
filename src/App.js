import React from 'react';
import Article from './components/article/Article';
import "./App.css"
import Blog from './components/blog/Blog';
import Loadtodo from './components/todolist/Loadtodo';

const App = () => {
  return (
    <div>
      <Article></Article>
      <Blog heading='IS Right' author='towhid'></Blog>
      {/* <Blog heading='IS wrong' author='Tamim'></Blog>
      <Blog heading='IS Something' author='Rakib'></Blog> */}
      <Loadtodo></Loadtodo>
      
      
    </div>
  );
};

export default App;
