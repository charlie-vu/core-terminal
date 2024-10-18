import { create } from "zustand"

const useCommonStore = create((set) => ({
    // MenuList
    menuList: [
        {
            name: 'Comany',
            href: '/',
        },
        {
            name: 'Product',
            href: '#',
        },
        {
            name: 'Contact',
            href: '#',
        },
    ],

    // Sidebar mobile
    showMenu: false,
    setShowMenu: (payload) => set({ showMenu: payload }),
}))

export default useCommonStore