import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Flame, TrendingUp } from 'lucide-react'

const popularCategories = [
  { name: 'Technology', count: 2345 },
  { name: 'Gaming', count: 1234 },
  { name: 'Science', count: 987 },
  { name: 'Movies', count: 876 },
  { name: 'Books', count: 765 },
]

const trendingThreads = [
  {
    id: '1',
    title: 'The Future of AI in 2024',
    upvotes: 234,
  },
  {
    id: '2',
    title: 'Best Gaming Setups Under $1000',
    upvotes: 187,
  },
  {
    id: '3',
    title: 'Movie Reviews: Latest Releases',
    upvotes: 156,
  },
]

export function Sidebar() {
  return (
    <div className="w-full space-y-6">
      {/* Popular Categories */}
      <div className="bg-card text-card-foreground rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
        <div className="space-y-2">
          {popularCategories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase()}`}
              className="flex items-center justify-between p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span>{category.name}</span>
              <span className="text-sm text-muted-foreground">{category.count}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Threads */}
      <div className="bg-card text-card-foreground rounded-lg shadow-sm border p-4">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Trending Now
        </h3>
        <div className="space-y-3">
          {trendingThreads.map((thread) => (
            <Link
              key={thread.id}
              href={`/thread/${thread.id}`}
              className="block p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <div className="font-medium line-clamp-2">{thread.title}</div>
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Flame className="h-4 w-4 mr-1 text-orange-500" />
                {thread.upvotes} upvotes
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Create Post Button */}
      <Button className="w-full">
        <Link href="/new-thread" className="flex items-center justify-center w-full">
          Create New Thread
        </Link>
      </Button>
    </div>
  )
}
