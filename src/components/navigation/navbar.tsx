import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { SearchBar } from "@/components/search/search-bar"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { NotificationsDropdown } from "@/components/notifications/notifications"

export function Navbar() {
  const isLoggedIn = false // This will be replaced with actual auth state

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo and site title */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <span>Forum</span>
        </Link>

        {/* Navigation links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/categories" className="text-sm font-medium">
            Categories
          </Link>
          <Link href="/trending" className="text-sm font-medium">
            Trending
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-lg">
          <SearchBar />
        </div>

        {/* Right side items */}
        <div className="flex items-center gap-2">
          <NotificationsDropdown />
          <ThemeToggle />
          {!isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          ) : (
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <img
                src="https://github.com/shadcn.png"
                alt="Avatar"
                className="rounded-full"
              />
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
