import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ListItem = {
    name: string;
    isOpen?: boolean;
    children?: ListItem[];
    parents?: string[];
};
type ListState = {
    list: ListItem[];
};

const localData = JSON.parse(localStorage.getItem('store')!)?.list;
const initialState: ListState = localData || {
    list: [
        {
            name: 'Элемент 1',
            isOpen: false,
            children: [
                {
                    name: 'Элемент 1.1',
                    isOpen: false,
                    children: [
                        {
                            name: 'Элемент 1.1.1',
                        },
                        {
                            name: 'Элемент 1.1.2',
                        },
                    ],
                },
                {
                    name: 'Элемент 1.2',
                },
                {
                    name: 'Элемент 1.3',
                },
                {
                    name: 'Элемент 1.4',
                },
                {
                    name: 'Элемент 1.5',
                },
            ],
        },
        {
            name: 'Элемент 2',
        },
    ],
};

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        toggleIsOpen(state, action: PayloadAction<string[]>) {
            let arr = action.payload;
            let toggledItem = state.list.find(el => el.name === arr.shift());
            while (arr.length) {
                toggledItem = toggledItem?.children?.find(
                    el => el.name === arr.shift(),
                );
            }
            if (toggledItem) {
                toggledItem.isOpen = !toggledItem.isOpen;
            }
        },
    },
});

export const { toggleIsOpen } = listSlice.actions;
export default listSlice.reducer;
