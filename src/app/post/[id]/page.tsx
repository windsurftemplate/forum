'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowBigUp, ArrowBigDown, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Thread, useThreadStore } from '@/store/thread-store';

interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  upvotes: number;
}

export default function PostPage() {
  const params = useParams();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  
  const threads = useThreadStore((state) => state.threads);
  const upvoteThread = useThreadStore((state) => state.upvoteThread);
  
  const thread = threads.find((t) => t.id === params.id);

  const handleUpvote = () => {
    if (!thread) return;
    upvoteThread(thread.id);
  };

  const handleComment = () => {
    if (comment.trim()) {
      const newComment: Comment = {
        id: Date.now().toString(),
        content: comment,
        author: 'Current User',
        createdAt: new Date().toISOString(),
        upvotes: 0,
      };
      setComments(prev => [newComment, ...prev]);
      setComment('');
    }
  };

  if (!thread) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold">Post not found</h2>
          <p className="text-muted-foreground mt-2">The post you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Post Content */}
      <div className="bg-card rounded-lg p-6 mb-6 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleUpvote}
              className={thread.hasUpvoted ? 'text-primary' : ''}
            >
              <ArrowBigUp className="h-6 w-6" />
            </Button>
            <span className="font-bold">{thread.upvotes}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{thread.title}</h1>
            <p className="text-muted-foreground mb-4">{thread.content}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="h-6 w-6">
                <AvatarImage src={thread.author.avatar} />
                <AvatarFallback>{thread.author.name[0]}</AvatarFallback>
              </Avatar>
              <span>Posted by {thread.author.name}</span>
              <span>•</span>
              <span>{new Date(thread.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Comments ({thread.comments})
        </h2>
        
        {/* Comment Input */}
        <div className="space-y-2">
          <Textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
          <Button onClick={handleComment}>Post Comment</Button>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-card rounded-lg p-4 shadow">
              <div className="flex items-start gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>{comment.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
