'use client'

import { useEffect } from 'react'
import { socketService } from '@/lib/socket'
import { useThreadStore } from '@/store/thread-store'
import { useNotificationStore, Notification } from '@/store/notification-store'

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const updateThread = useThreadStore((state) => state.updateThread)
  const addNotification = useNotificationStore((state) => state.addNotification)

  useEffect(() => {
    // Connect to WebSocket server
    socketService.connect()

    // Listen for thread updates
    socketService.on('thread:update', (update) => {
      updateThread(update)
    })

    // Listen for new comments
    socketService.on('thread:new_comment', (data) => {
      updateThread({
        threadId: data.threadId,
        comments: data.commentCount,
      })

      // Add notification for thread owner
      const notification: Notification = {
        id: crypto.randomUUID(),
        type: 'comment',
        title: 'New Comment',
        message: `${data.author} commented on your thread`,
        time: 'Just now',
        read: false,
        threadId: data.threadId,
        commentId: data.commentId,
      }
      addNotification(notification)
    })

    // Listen for upvote updates
    socketService.on('thread:upvote_update', (data) => {
      updateThread({
        threadId: data.threadId,
        upvotes: data.upvotes,
        hasUpvoted: data.hasUpvoted,
      })

      // Add notification for thread owner if it's a new upvote
      if (data.isNewUpvote) {
        const notification: Notification = {
          id: crypto.randomUUID(),
          type: 'upvote',
          title: 'New Upvote',
          message: `Someone upvoted your thread`,
          time: 'Just now',
          read: false,
          threadId: data.threadId,
        }
        addNotification(notification)
      }
    })

    // Listen for replies to user's comments
    socketService.on('comment:reply', (data) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        type: 'reply',
        title: 'New Reply',
        message: `${data.author} replied to your comment`,
        time: 'Just now',
        read: false,
        threadId: data.threadId,
        commentId: data.commentId,
      }
      addNotification(notification)
    })

    // Listen for mentions
    socketService.on('user:mention', (data) => {
      const notification: Notification = {
        id: crypto.randomUUID(),
        type: 'mention',
        title: 'New Mention',
        message: `${data.author} mentioned you in a ${data.type}`,
        time: 'Just now',
        read: false,
        threadId: data.threadId,
        commentId: data.commentId,
      }
      addNotification(notification)
    })

    // Cleanup on unmount
    return () => {
      socketService.disconnect()
    }
  }, [updateThread, addNotification])

  return <>{children}</>
}
