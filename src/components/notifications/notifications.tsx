'use client'

import * as React from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNotificationStore } from "@/store/notification-store"

type Notification = {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: string
}

export function NotificationsDropdown() {
  const { notifications, unreadCount, markAsRead } = useNotificationStore()

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return '💬'
      case 'upvote':
        return '⬆️'
      case 'mention':
        return '@'
      case 'reply':
        return '↩️'
      default:
        return '🔔'
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-[1.2rem] w-[1.2rem]" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          Notifications
          {unreadCount > 0 && (
            <span className="text-xs text-muted-foreground">
              {unreadCount} unread
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {notifications.length === 0 ? (
            <DropdownMenuItem>
              No notifications
            </DropdownMenuItem>
          ) : (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className="flex flex-col items-start gap-1 p-4 cursor-pointer"
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-center gap-2 w-full">
                  <span className="text-lg">
                    {getNotificationIcon(notification.type)}
                  </span>
                  <span className="font-medium flex-1">{notification.title}</span>
                  {!notification.read && (
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </DropdownMenuItem>
            ))
          )}
        </DropdownMenuGroup>
        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center">
              View all notifications
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
