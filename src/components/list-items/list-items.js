import './list-items.css';


const ListItems = ({onItemSelected, data}) => {
   const items = data.map(item => {
   const {id, name} = item;

      return (
          <li className="list-group-item"
              key={id}
               onClick={() => {
                   onItemSelected(id);
               }}>
             {name}
          </li>
      )
   })

   return (
       <ul className="item-list list-group">
          {items}
       </ul>
   )

}

   export default ListItems;