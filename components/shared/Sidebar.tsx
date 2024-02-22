'use client'
import Image from "next/image"
import { navLinks } from "@/constants"
import Link from "next/link"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link className="sidebar-logo" href="/">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = pathname === link.route
                return (
                  <li key={link.label} className={`sidebar-nav_element ${isActive ? `bg-purple-gradient text-white` : `text-gray-700`}`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = pathname === link.route
                return (
                  <li key={link.label} className={`sidebar-nav_element ${isActive ? `bg-purple-gradient text-white` : `text-gray-700`}`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-200'}`} />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar