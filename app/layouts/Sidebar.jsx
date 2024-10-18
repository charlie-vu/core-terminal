import { Image, Offcanvas } from "react-bootstrap";
import useCommonStore from "@/app/store/common";
import Link from "next/link";

export default function Sidebar() {
    const store = useCommonStore()
    // console.log(store)
    return (
        <Offcanvas show={store.showMenu} onHide={() => { store.setShowMenu(false) }}>
            {/* <Offcanvas.Header closeButton closeVariant="white"></Offcanvas.Header> */}
            <Offcanvas.Body>

                <Image src="/logo/logo-text.png" className="w-100" />
                <div className="mt-5 d-flex flex-column gap-4 fs-5">
                    {store.menuList.map((item, i) =>
                        <p key={`menu-item-${i}}`}>
                            <Link href={item.href} className="nav-item" onClick={() => { store.setShowMenu(false) }}>{item.name}</Link>
                        </p>
                    )}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}