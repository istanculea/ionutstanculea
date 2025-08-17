import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function MongoDBSetup() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 flex space-x-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="group">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>

          <Button variant="ghost" onClick={() => navigate('/blog')} className="group">
            <ArrowLeft className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
            Back to Blog
          </Button>
        </div>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">Database</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>7 min read</span>
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Database Setup: MongoDB
          </h1>

          <p className="text-xl text-muted-foreground">
            Step-by-step guide to configure MongoDB for development and production, with security, replication, and indexing best practices.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1581090700227-6a04a4b1789f?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="MongoDB Setup"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Installing MongoDB</h2>
          <p>Install MongoDB on your server or use a managed cloud service.</p>

          <h2>Security Configuration</h2>
          <ul>
            <li>Enable authentication and create users with proper roles.</li>
            <li>Use TLS for encrypted connections.</li>
            <li>Restrict IP access via firewall or VPC.</li>
          </ul>

          <h2>Replication & Backup</h2>
          <ul>
            <li>Set up replica sets for high availability.</li>
            <li>Regularly backup data and test restores.</li>
            <li>Monitor replication lag to avoid stale reads.</li>
          </ul>

          <h2>Indexes & Performance</h2>
          <ul>
            <li>Create indexes on frequently queried fields.</li>
            <li>Use compound indexes where appropriate.</li>
            <li>Analyze query performance using explain plans.</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
