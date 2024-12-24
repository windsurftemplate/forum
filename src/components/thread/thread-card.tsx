'use client'

import * as React from 'react'
import { MoreHorizontal, Flag, ArrowBigUp } from 'lucide-react'
import { Thread, useThreadStore } from '@/store/thread-store'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { useModerationStore } from '@/store/moderation-store'
import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ThreadCardProps {
  thread?: Thread
  currentUserId: string
  isLoading?: boolean
}

export function ThreadCard({ thread, currentUserId, isLoading = false }: ThreadCardProps) {
  const [reportReason, setReportReason] = React.useState('')
  const [reportDialogOpen, setReportDialogOpen] = React.useState(false)
  const { submitReport } = useModerationStore()
  const upvoteThread = useThreadStore((state) => state.upvoteThread)
  const router = useRouter()

  const handleReport = () => {
    if (!thread) return
    submitReport({
      threadId: thread.id,
      reportedUserId: thread.author.name,
      reporterUserId: currentUserId,
      reason: reportReason,
    })
    setReportDialogOpen(false)
    setReportReason('')
  }

  const handleUpvote = () => {
    if (!thread) return
    upvoteThread(thread.id)
  }

  const handleThreadClick = () => {
    if (!thread) return
    router.push(`/post/${thread.id}`)
  }

  if (isLoading) {
    return (
      <div className="rounded-lg border p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-20 w-full" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-8 w-24" />
        </div>
      </div>
    )
  }

  if (!thread) {
    return null
  }

  return (
    <Link href={`/post/${thread.id}`} className="block">
      <div className="rounded-lg border p-4 space-y-2 hover:bg-accent/50 transition-colors">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={thread.author.avatar}
              alt={thread.author.name}
              className="h-8 w-8 rounded-full"
            />
            <div>
              <p className="font-medium">{thread.author.name}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(thread.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "hover:bg-muted p-0 h-8 w-8",
                thread.hasUpvoted && "text-blue-500"
              )}
              onClick={handleUpvote}
            >
              <ArrowBigUp className="h-6 w-6" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <Dialog open={reportDialogOpen} onOpenChange={setReportDialogOpen}>
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Flag className="mr-2 h-4 w-4" />
                      Report
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Report Thread</DialogTitle>
                      <DialogDescription>
                        Please provide a reason for reporting this thread. Our moderators will review your report.
                      </DialogDescription>
                    </DialogHeader>
                    <Textarea
                      value={reportReason}
                      onChange={(e) => setReportReason(e.target.value)}
                      placeholder="Enter your reason for reporting..."
                      className="min-h-[100px]"
                    />
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setReportDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleReport} disabled={!reportReason.trim()}>
                        Submit Report
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">{thread.title}</h3>
          <p className="mt-2 text-muted-foreground">{thread.content}</p>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            {thread.upvotes} Upvotes
          </Button>
          <Button variant="outline" size="sm">
            {thread.comments} Comments
          </Button>
          {thread.categories.map((category) => (
            <span
              key={category}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
