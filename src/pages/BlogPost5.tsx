import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostLinuxACL() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 flex space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            Back to Blog
          </Button>
        </div>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">Linux</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 15, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>7 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Easy Ways to Manage Access Control List (ACL) on Linux
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Managing permissions in Linux can get complicated, especially when multiple users or services need fine-grained access. Over time, I’ve developed practical methods to handle ACLs efficiently and securely. In this post, I’ll share strategies that I use in both production and personal projects.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1581091012184-742e8f3e7bda?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="Linux ACL Management"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Understanding ACLs</h2>
          <p>
            ACLs provide a way to define permissions beyond the traditional owner/group/world model. They are especially useful in multi-user systems where certain users require specific read/write/execute privileges on files or directories.
          </p>

          <
