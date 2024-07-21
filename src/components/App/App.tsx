import { useAppSelector } from '../../hook';
import TreeView from '../TreeView/TreeView';

function App() {
    const data = useAppSelector(state => state.list.list);
    return (
        <div className='app'>
            <p>Вложенные списки</p>
            <TreeView data={data} />
        </div>
    );
}

export default App;

