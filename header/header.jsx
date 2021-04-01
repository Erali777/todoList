import logo from './../../logo.svg';

import s from './header.module.css';

function Header({todos, choose, setChoose}) {
   return (
      <div className={s.header}>
         <div>
            <img src={logo} className={s.logo} alt="logo" />
         </div>
         <div>
            <p className={s.p}>TodoList - {todos.length}</p>
            <div className={s.select}>
               <select value={choose} onChange={e => setChoose(e.target.value)}>
                  <option value={'all'}>All</option>
                  <option value={'done'}>Done</option>
                  <option value={'inProcess'}>In process</option>
               </select>
            </div>
         </div>
      </div>
   )
}

export default Header;