import React from 'react';

import s from './input.module.css';

const Input = ({addTodos}) => {
   const [input, setInput] = React.useState('');
   const handleChange = (e) => {
      setInput(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      addTodos(input);
      setInput('');
   }
   let ch = true;
   return (
      <div>
      {
         ch ? 
            <form className={s.input} onSubmit={handleSubmit}>
               <input type="text" className={s.in} value={input} onChange={handleChange}/>
               <button className={s.submit} type="submit">Submit</button>
            </form> : <div className={s.addBox}>
               <button className={s.add}>+ Add</button>
            </div>
                
      }
      </div>
   )
}

export default Input;