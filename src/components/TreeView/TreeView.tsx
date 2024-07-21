import { ListItem } from '../../store/listSlice';
import TreeItem from '../TreeItem/TreeItem';

interface TreeViewProps {
    data: ListItem[];
}
export const TreeView: React.FC<TreeViewProps> = ({ data }) => {
    return (
        <ul className='treelist'>
            {data.map(listItem => {
                return <TreeItem key={listItem.name} {...listItem} />;
            })}
        </ul>
    );
};

export default TreeView;
