'use client'

import * as React from 'react'
import { Search, Filter } from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useSearchStore } from '@/store/search-store'
import { useThreadStore } from '@/store/thread-store'

const categories = [
  'Web Development',
  'Machine Learning',
  'DevOps',
  'Mobile Development',
  'Data Science',
  'Cybersecurity',
  'Cloud Computing',
  'Artificial Intelligence',
]

const sortOptions = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'mostCommented', label: 'Most Commented' },
]

const timeRangeOptions = [
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This Week' },
  { value: 'month', label: 'This Month' },
  { value: 'all', label: 'All Time' },
]

const suggestions = [
  {
    category: 'Popular Searches',
    items: [
      { id: '1', text: 'Next.js tutorials' },
      { id: '2', text: 'React best practices' },
      { id: '3', text: 'TypeScript tips' },
    ],
  },
  {
    category: 'Categories',
    items: [
      { id: '4', text: 'Web Development' },
      { id: '5', text: 'Machine Learning' },
      { id: '6', text: 'DevOps' },
    ],
  },
  {
    category: 'Trending',
    items: [
      { id: '7', text: 'AI developments' },
      { id: '8', text: 'Cloud computing' },
      { id: '9', text: 'Cybersecurity' },
    ],
  },
]

export function SearchBar() {
  const [open, setOpen] = React.useState(false)
  const { searchQuery, filters, setSearchQuery, setFilters } = useSearchStore()
  const { threads } = useThreadStore()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Filter threads based on search query and filters
    const filtered = threads.filter((thread) => {
      const matchesQuery = thread.title.toLowerCase().includes(query.toLowerCase()) ||
        thread.content.toLowerCase().includes(query.toLowerCase())
      const matchesCategories = filters.categories.length === 0 ||
        thread.categories.some(cat => filters.categories.includes(cat))
      return matchesQuery && matchesCategories
    })
    // Additional filtering based on time range and sorting can be implemented here
  }

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search threads... (Press ⌘K)"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-md border border-input pl-8 pr-4 py-2 text-sm"
          onFocus={() => setOpen(true)}
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>Filter Threads</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuLabel className="text-sm font-medium">Categories</DropdownMenuLabel>
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category}
              checked={filters.categories.includes(category)}
              onCheckedChange={(checked) => {
                setFilters({
                  categories: checked
                    ? [...filters.categories, category]
                    : filters.categories.filter((c) => c !== category),
                })
              }}
            >
              {category}
            </DropdownMenuCheckboxItem>
          ))}

          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-sm font-medium">Sort By</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={filters.sortBy}
            onValueChange={(value: any) => setFilters({ sortBy: value })}
          >
            {sortOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />
          <DropdownMenuLabel className="text-sm font-medium">Time Range</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={filters.timeRange}
            onValueChange={(value: any) => setFilters({ timeRange: value })}
          >
            {timeRangeOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type to search..."
          value={searchQuery}
          onValueChange={handleSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {suggestions.map((group) => (
            <CommandGroup key={group.category} heading={group.category}>
              {group.items.map((item) => (
                <CommandItem key={item.id} onSelect={() => handleSearch(item.text)}>
                  <span>{item.text}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  )
}
