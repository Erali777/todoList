import s from './todo.module.css';

const Todo = ({complete, i, removeTodos, handleToggle}) => {
   return (
      <div className={s.todo}>
         <div>
            <input className={s.inp} type="checkbox" checked={complete}  onChange={()=>handleToggle(i.id)}/>
         </div>
         <p style={{textDecoration: complete ? 'line-through' : ''}} className={s.text}>{i.message}</p>
         <div>
            <button className={s.btn} onClick={()=>removeTodos(i.id)}>x</button>
         </div>
      </div>
   )
}

export default Todo;