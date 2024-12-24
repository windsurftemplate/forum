import { create } from 'zustand'
import { socketService } from '@/lib/socket'

export type Thread = {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
  }
  upvotes: number
  comments: number
  createdAt: string
  categories: string[]
  hasUpvoted: boolean
}

type ThreadUpdate = {
  threadId: string
  upvotes?: number
  comments?: number
  hasUpvoted?: boolean
}

type ThreadStore = {
  threads: Thread[]
  setThreads: (threads: Thread[]) => void
  updateThread: (update: ThreadUpdate) => void
  upvoteThread: (threadId: string) => void
}

export const useThreadStore = create<ThreadStore>((set) => ({
  threads: [],
  setThreads: (threads) => set({ threads }),
  updateThread: (update) => {
    set((state) => ({
      threads: state.threads.map((thread) =>
        thread.id === update.threadId
          ? {
              ...thread,
              ...(update.upvotes !== undefined && { upvotes: update.upvotes }),
              ...(update.comments !== undefined && { comments: update.comments }),
              ...(update.hasUpvoted !== undefined && { hasUpvoted: update.hasUpvoted }),
            }
          : thread
      ),
    }))
  },
  upvoteThread: (threadId) => {
    socketService.emit('thread:upvote', { threadId })
  },
}))
