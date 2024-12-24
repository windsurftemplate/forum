import { create } from 'zustand'
import { Thread } from './thread-store'

type SearchFilters = {
  categories: string[]
  sortBy: 'recent' | 'popular' | 'mostCommented'
  timeRange: 'today' | 'week' | 'month' | 'all'
}

type SearchStore = {
  searchQuery: string
  filters: SearchFilters
  searchResults: Thread[]
  setSearchQuery: (query: string) => void
  setFilters: (filters: Partial<SearchFilters>) => void
  setSearchResults: (results: Thread[]) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: '',
  filters: {
    categories: [],
    sortBy: 'recent',
    timeRange: 'all',
  },
  searchResults: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilters: (filters) =>
    set((state) => ({
      filters: { ...state.filters, ...filters },
    })),
  setSearchResults: (results) => set({ searchResults: results }),
}))
