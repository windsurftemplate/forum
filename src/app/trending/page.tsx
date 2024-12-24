'use client';

import { useEffect } from 'react';
import { Navbar } from "@/components/navigation/navbar";
import { ThreadCard } from "@/components/thread/thread-card";
import { useThreadStore } from "@/store/thread-store";

export default function TrendingPage() {
  const { threads } = useThreadStore();
  
  // Current user ID (replace with actual auth)
  const currentUserId = "user-1";

  // Sort threads by upvotes to show trending content
  const trendingThreads = [...threads].sort((a, b) => b.upvotes - a.upvotes);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Trending Discussions</h1>
        
        {/* Trending threads */}
        <div className="grid gap-4">
          {trendingThreads.map((thread) => (
            <ThreadCard
              key={thread.id}
              thread={thread}
              currentUserId={currentUserId}
            />
          ))}
          {trendingThreads.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No trending threads</h2>
              <p className="text-muted-foreground">
                There are no threads available at the moment.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
