import ListItem from "../list-item/ListItem.jsx";
import './list.css';

const List = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                data={data}
                number={data.indexOf(item)}
            />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default List;
