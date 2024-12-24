import { Skeleton } from "@/components/ui/skeleton"

export function ThreadSkeleton() {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-sm border p-4">
      <div className="flex gap-4">
        {/* Voting Skeleton */}
        <div className="flex flex-col items-center gap-1">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-4 w-6" />
        </div>

        {/* Content Skeleton */}
        <div className="flex-1">
          {/* Author Info Skeleton */}
          <div className="flex items-center gap-2 mb-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          {/* Title & Content Skeleton */}
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />

          {/* Categories Skeleton */}
          <div className="flex gap-2 mt-3">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>

          {/* Actions Skeleton */}
          <div className="flex items-center gap-4 mt-4">
            <Skeleton className="h-8 w-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
