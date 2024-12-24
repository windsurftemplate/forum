'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Navbar } from "@/components/navigation/navbar";
import { ThreadCard } from "@/components/thread/thread-card";
import { Button } from "@/components/ui/button";
import { useThreadStore } from "@/store/thread-store";

// Get unique categories from threads
const getUniqueCategories = (threads: any[]) => {
  const categories = threads.reduce((acc: string[], thread) => {
    thread.categories.forEach((category: string) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
    });
    return acc;
  }, []);
  return categories.sort();
};

// Loading skeleton component
function CategorySkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 mb-8">
        <div className="w-20 h-8 bg-muted animate-pulse rounded-md"></div>
        <div className="w-24 h-8 bg-muted animate-pulse rounded-md"></div>
        <div className="w-28 h-8 bg-muted animate-pulse rounded-md"></div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-muted animate-pulse rounded-lg"></div>
        ))}
      </div>
    </div>
  );
}

// Separate component that uses useSearchParams
function CategoryContent() {
  const { threads } = useThreadStore();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const [categories, setCategories] = useState<string[]>([]);
  
  // Current user ID (replace with actual auth)
  const currentUserId = "user-1";

  useEffect(() => {
    setCategories(getUniqueCategories(threads));
  }, [threads]);

  const filteredThreads = selectedCategory
    ? threads.filter(thread => thread.categories.includes(selectedCategory))
    : threads;

  return (
    <>
      {/* Categories list */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          asChild
        >
          <a href="/categories">All</a>
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            asChild
          >
            <a href={`/categories?category=${encodeURIComponent(category)}`}>
              {category}
            </a>
          </Button>
        ))}
      </div>

      {/* Threads grid */}
      <div className="grid gap-4">
        {filteredThreads.map((thread) => (
          <ThreadCard
            key={thread.id}
            thread={thread}
            currentUserId={currentUserId}
          />
        ))}
        {filteredThreads.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No threads found</h2>
            <p className="text-muted-foreground">
              {selectedCategory 
                ? `There are no threads in the "${selectedCategory}" category yet.`
                : "There are no threads available."}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        
        <Suspense fallback={<CategorySkeleton />}>
          <CategoryContent />
        </Suspense>
      </main>
    </div>
  );
}
