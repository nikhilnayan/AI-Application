import { UserButton } from "@clerk/nextjs"
import MobileSidebar from "./mobile-sidebar"


const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
                {/* <UserButton afterSignOutUrl="/"/> */}
                {/* # Updated in Clerk doc (we do not need to redirect to the landing page manualy.) */}
                <UserButton />
            </div>
        </div>
    )
}

export default Navbar