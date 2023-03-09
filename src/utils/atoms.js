import { atom } from 'jotai'

export const notificationAtom = atom({
    isOpen: false,
    message: 'test',
    type: 'success'
})

export const productsInCartAtom = atom(null);


export const isCartDialogOpenAtom = atom(false);

export const togglerAtom = atom(false);

export const totalPriceAtom = atom(0);