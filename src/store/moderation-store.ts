import { create } from 'zustand'
import { socketService } from '@/lib/socket'

type Report = {
  id: string
  threadId: string
  commentId?: string
  reportedUserId: string
  reporterUserId: string
  reason: string
  status: 'pending' | 'resolved' | 'dismissed'
  createdAt: string
}

type BannedUser = {
  userId: string
  reason: string
  bannedAt: string
  bannedUntil: string | null // null means permanent ban
}

type ModerationStore = {
  reports: Report[]
  bannedUsers: BannedUser[]
  setReports: (reports: Report[]) => void
  setBannedUsers: (users: BannedUser[]) => void
  submitReport: (report: Omit<Report, 'id' | 'status' | 'createdAt'>) => void
  resolveReport: (reportId: string, action: 'resolve' | 'dismiss') => void
  banUser: (userId: string, reason: string, duration?: number) => void
  unbanUser: (userId: string) => void
  removeContent: (type: 'thread' | 'comment', id: string) => void
}

export const useModerationStore = create<ModerationStore>((set) => ({
  reports: [],
  bannedUsers: [],
  setReports: (reports) => set({ reports }),
  setBannedUsers: (users) => set({ bannedUsers: users }),
  
  submitReport: (report) => {
    socketService.emit('moderation:report', report)
  },
  
  resolveReport: (reportId, action) => {
    socketService.emit('moderation:resolveReport', { reportId, action })
    set((state) => ({
      reports: state.reports.map((report) =>
        report.id === reportId
          ? { ...report, status: action === 'resolve' ? 'resolved' : 'dismissed' }
          : report
      ),
    }))
  },
  
  banUser: (userId, reason, duration) => {
    const bannedUntil = duration ? new Date(Date.now() + duration * 1000).toISOString() : null
    socketService.emit('moderation:banUser', { userId, reason, bannedUntil })
    set((state) => ({
      bannedUsers: [
        ...state.bannedUsers,
        {
          userId,
          reason,
          bannedAt: new Date().toISOString(),
          bannedUntil,
        },
      ],
    }))
  },
  
  unbanUser: (userId) => {
    socketService.emit('moderation:unbanUser', { userId })
    set((state) => ({
      bannedUsers: state.bannedUsers.filter((user) => user.userId !== userId),
    }))
  },
  
  removeContent: (type, id) => {
    socketService.emit('moderation:removeContent', { type, id })
  },
}))
