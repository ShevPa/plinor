import { useAppDispatch } from '../../hook';
import { AiOutlineDown } from 'react-icons/ai';
import { ListItem, toggleIsOpen } from '../../store/listSlice';

const TreeItem: React.FC<ListItem> = ({ name, isOpen, children, parents }) => {
    const dispatch = useAppDispatch();
    let parentsArray: string[] = [];
    if (children) {
        parentsArray = parents ? [...parents, name] : [name];
    }
    return (
        <li className='item'>
            <div className='item__header'>
                <span>{name}</span>
                {children ? (
                    <button
                        className='button'
                        onClick={() => dispatch(toggleIsOpen(parentsArray))}
                    >
                        <AiOutlineDown
                            className={`icon ${isOpen ? 'rotate' : ''}`}
                        />
                    </button>
                ) : null}
            </div>

            <div className={`item__body ${isOpen ? 'open' : ''}`}>
                <ul className='list'>
                    {children?.map(listItem => {
                        return (
                            <TreeItem
                                key={listItem.name}
                                {...listItem}
                                parents={parentsArray ? parentsArray : []}
                            />
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};
export default TreeItem;
