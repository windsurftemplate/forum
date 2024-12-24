'use client'

import { Suspense, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navigation/navbar"
import { Sidebar } from "@/components/sidebar/sidebar"
import { ThreadCard } from "@/components/thread/thread-card"
import { ThreadSkeleton } from "@/components/thread/thread-skeleton"
import { useThreadStore } from "@/store/thread-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

const mockThreads = [
  {
    id: "1",
    title: "Introducing our Forum",
    content: "Welcome to our brand new community forum! This is a space for discussion, sharing ideas, and connecting with others.",
    author: {
      name: "John Doe",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 42,
    comments: 12,
    createdAt: "2 hours ago",
    categories: ["Announcement", "Community"],
    hasUpvoted: false,
  },
  {
    id: "2",
    title: "Best Practices for Web Development in 2024",
    content: "Let's discuss the latest trends and best practices in web development. What are your thoughts on the newest frameworks and tools?",
    author: {
      name: "Jane Smith",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 38,
    comments: 15,
    createdAt: "4 hours ago",
    categories: ["Web Dev", "Discussion"],
    hasUpvoted: true,
  },
  {
    id: "3",
    title: "The Future of AI and Machine Learning",
    content: "AI is evolving rapidly. Let's explore the latest developments and their potential impact on various industries.",
    author: {
      name: "Alex Chen",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 156,
    comments: 45,
    createdAt: "6 hours ago",
    categories: ["AI", "Technology"],
    hasUpvoted: false,
  },
  {
    id: "4",
    title: "Gaming Industry Trends 2024",
    content: "From VR to cloud gaming, what trends will shape the gaming industry this year?",
    author: {
      name: "Sarah Gaming",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 92,
    comments: 28,
    createdAt: "8 hours ago",
    categories: ["Gaming", "Entertainment"],
    hasUpvoted: false,
  },
  {
    id: "5",
    title: "Cybersecurity Best Practices",
    content: "Essential security measures everyone should implement to protect their digital assets.",
    author: {
      name: "Mike Security",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 127,
    comments: 34,
    createdAt: "10 hours ago",
    categories: ["Security", "Technology"],
    hasUpvoted: true,
  },
  {
    id: "6",
    title: "Remote Work Tools and Tips",
    content: "Share your favorite tools and strategies for effective remote work.",
    author: {
      name: "Remote Worker",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 85,
    comments: 42,
    createdAt: "12 hours ago",
    categories: ["Work", "Productivity"],
    hasUpvoted: false,
  },
  {
    id: "7",
    title: "Mobile App Development Frameworks",
    content: "Comparing different frameworks for mobile app development in 2024.",
    author: {
      name: "App Developer",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 73,
    comments: 31,
    createdAt: "14 hours ago",
    categories: ["Mobile", "Development"],
    hasUpvoted: false,
  },
  {
    id: "8",
    title: "UI/UX Design Principles",
    content: "Essential design principles for creating user-friendly interfaces.",
    author: {
      name: "Design Pro",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 112,
    comments: 27,
    createdAt: "16 hours ago",
    categories: ["Design", "UI/UX"],
    hasUpvoted: true,
  },
  {
    id: "9",
    title: "Cloud Computing Services Comparison",
    content: "AWS vs Azure vs Google Cloud - which one should you choose?",
    author: {
      name: "Cloud Expert",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 145,
    comments: 52,
    createdAt: "18 hours ago",
    categories: ["Cloud", "Technology"],
    hasUpvoted: false,
  },
  {
    id: "10",
    title: "Data Science Career Path",
    content: "Guide to becoming a data scientist in 2024.",
    author: {
      name: "Data Wizard",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 167,
    comments: 48,
    createdAt: "20 hours ago",
    categories: ["Data Science", "Career"],
    hasUpvoted: false,
  },
  {
    id: "11",
    title: "Blockchain Technology Updates",
    content: "Latest developments in blockchain and cryptocurrency.",
    author: {
      name: "Crypto Expert",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 134,
    comments: 39,
    createdAt: "22 hours ago",
    categories: ["Blockchain", "Crypto"],
    hasUpvoted: true,
  },
  {
    id: "12",
    title: "Software Testing Strategies",
    content: "Modern approaches to testing and quality assurance.",
    author: {
      name: "QA Master",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 89,
    comments: 23,
    createdAt: "1 day ago",
    categories: ["Testing", "QA"],
    hasUpvoted: false,
  },
  {
    id: "13",
    title: "DevOps Pipeline Setup",
    content: "Step-by-step guide to setting up a modern DevOps pipeline.",
    author: {
      name: "DevOps Pro",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 178,
    comments: 56,
    createdAt: "1 day ago",
    categories: ["DevOps", "Infrastructure"],
    hasUpvoted: false,
  },
  {
    id: "14",
    title: "Machine Learning Projects",
    content: "Interesting ML projects for beginners to advanced practitioners.",
    author: {
      name: "ML Engineer",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 203,
    comments: 67,
    createdAt: "1 day ago",
    categories: ["Machine Learning", "Projects"],
    hasUpvoted: true,
  },
  {
    id: "15",
    title: "Frontend Framework Comparison",
    content: "React vs Vue vs Angular - choosing the right framework.",
    author: {
      name: "Frontend Dev",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 156,
    comments: 82,
    createdAt: "2 days ago",
    categories: ["Frontend", "JavaScript"],
    hasUpvoted: false,
  },
  {
    id: "16",
    title: "Database Selection Guide",
    content: "How to choose the right database for your project.",
    author: {
      name: "DB Expert",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 142,
    comments: 45,
    createdAt: "2 days ago",
    categories: ["Database", "Architecture"],
    hasUpvoted: false,
  },
  {
    id: "17",
    title: "API Design Best Practices",
    content: "Creating robust and scalable APIs for modern applications.",
    author: {
      name: "API Designer",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 167,
    comments: 51,
    createdAt: "2 days ago",
    categories: ["API", "Backend"],
    hasUpvoted: true,
  },
  {
    id: "18",
    title: "Code Review Guidelines",
    content: "Effective code review practices for team collaboration.",
    author: {
      name: "Senior Dev",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 198,
    comments: 73,
    createdAt: "3 days ago",
    categories: ["Development", "Team"],
    hasUpvoted: false,
  },
  {
    id: "19",
    title: "System Architecture Patterns",
    content: "Common architecture patterns and when to use them.",
    author: {
      name: "Architect",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 221,
    comments: 84,
    createdAt: "3 days ago",
    categories: ["Architecture", "Design"],
    hasUpvoted: false,
  },
  {
    id: "20",
    title: "Performance Optimization Tips",
    content: "Strategies for optimizing web application performance.",
    author: {
      name: "Performance Guru",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 187,
    comments: 59,
    createdAt: "3 days ago",
    categories: ["Performance", "Optimization"],
    hasUpvoted: true,
  },
  {
    id: "21",
    title: "Microservices vs Monolith",
    content: "Comparing different architectural approaches for modern applications.",
    author: {
      name: "System Designer",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 234,
    comments: 91,
    createdAt: "4 days ago",
    categories: ["Architecture", "Microservices"],
    hasUpvoted: false,
  },
  {
    id: "22",
    title: "Securing Web Applications",
    content: "Modern security practices for web development.",
    author: {
      name: "Security Expert",
      avatar: "https://github.com/shadcn.png",
    },
    upvotes: 256,
    comments: 87,
    createdAt: "4 days ago",
    categories: ["Security", "Web"],
    hasUpvoted: false,
  }
]

export default function Home() {
  const { threads, setThreads } = useThreadStore()
  const currentUserId = ""; // TODO: Replace with actual user ID from auth

  useEffect(() => {
    // Initialize with mock data
    setThreads(mockThreads)
  }, [setThreads])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <motion.section 
          className="py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Forum
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A vibrant community platform where ideas connect, discussions flourish, and knowledge is shared.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="default" size="lg">
              Join Now
            </Button>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.section>

        <motion.section 
          className="mt-16 grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Engage</CardTitle>
                <CardDescription>Participate in meaningful discussions</CardDescription>
              </CardHeader>
              <CardContent>
                Connect with like-minded individuals, share your perspectives, and learn from diverse viewpoints.
              </CardContent>
              <CardFooter>
                <Link href="/trending">
                  <Button variant="outline" className="w-full">View Trending</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Discover</CardTitle>
                <CardDescription>Explore new ideas</CardDescription>
              </CardHeader>
              <CardContent>
                Browse through a wide range of topics, from technology to arts, and expand your knowledge.
              </CardContent>
              <CardFooter>
                <Link href="/categories">
                  <Button variant="outline" className="w-full">Browse Categories</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Grow</CardTitle>
                <CardDescription>Build your network</CardDescription>
              </CardHeader>
              <CardContent>
                Create connections, collaborate on projects, and be part of a supportive community.
              </CardContent>
              <CardFooter>
                <Link href="/signup">
                  <Button variant="outline" className="w-full">Join Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.section>

        <section className="mt-16">
          <motion.h2 
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Recent Discussions
          </motion.h2>
          <div className="grid gap-4">
            <Suspense fallback={<ThreadSkeleton />}>
              {threads.map((thread) => (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ThreadCard thread={thread} currentUserId={currentUserId} />
                </motion.div>
              ))}
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
}
