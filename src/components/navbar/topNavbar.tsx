import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
    return (
        <Navbar maxWidth="xl"  className='bg-gradient-to-r from-purple-400 to-purple-700' classNames={{ item: ['text-xl', 'text-white', 'uppercase', 'data-[active=true]:text-yellow-300'] }}>
            <NavbarBrand as={Link} href='/'>
                <GiMatchTip size={40} className='text-gray-200' />
                <div className='font-bold text-3xl flex'>
                    <span className='text-gray-900'>Next</span>
                    <span className='text-gray-200'>Match</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center">

            </NavbarContent>
                <NavLink href="/members" label="Matches"/>
                <NavLink href="/lists" label="Lists"/>
                <NavLink href="/messages" label="Messages"/>
            <NavbarContent justify="end">
                <Button variant="bordered" as={Link} href='/login' className="text-white">Login</Button>
                <Button variant="bordered" as={Link} href='/register' className="text-white">Register</Button>
            </NavbarContent>
        </Navbar>
    );
}