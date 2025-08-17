import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostDatabaseMongoDB() {
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
            <span className="cloud-badge">Database</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Database Setup: MongoDB
          </h1>
          
          <p className="text-xl text-muted-foreground">
            I’ve worked on multiple projects where choosing the right database setup was crucial. MongoDB has consistently been my go-to for flexible, schema-less storage. In this post, I’ll share my approach to setting up a robust MongoDB instance for development and production, including security, backups, and performance considerations.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1581091012184-742e8f3e7bda?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="MongoDB Setup"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why MongoDB?</h2>
          <p>
            MongoDB’s document model makes it incredibly flexible for rapidly changing data structures. I often choose it when building APIs that evolve quickly, or when relationships between entities are sparse. Its scalability and strong community support make it reliable for production workloads.
          </p>

          <h2>Installation and Initial Setup</h2>
          <ul>
            <li>Use official MongoDB packages or Docker containers for reproducibility.</li>
            <li>Always configure authentication with strong credentials; never leave a blank admin account.</li>
            <li>Set up replica sets for high availability, even in small environments, to prepare for future scaling.</li>
          </ul>

          <h2>Performance and Indexing</h2>
          <p>
            Indexing is critical for performance. I regularly analyze query patterns and create compound indexes where needed. For large collections, I monitor slow queries and leverage MongoDB’s explain plan to optimize them.
          </p>

          <h2>Backups and Disaster Recovery</h2>
          <ul>
            <li>Use built-in `mongodump` or managed snapshots in cloud deployments.</li>
            <li>Test restore procedures regularly; a backup is useless unless you can recover quickly.</li>
            <li>For mission-critical apps, maintain offsite backups and monitor replication lag.</li>
          </ul>

          <h2>Security Best Practices</h2>
          <ul>
            <li>Enable TLS for data in transit.</li>
            <li>Limit network exposure using firewall rules or VPC peering.</li>
            <li>Use role-based access control to restrict user permissions appropriately.</li>
          </ul>

          <h2>Lessons Learned</h2>
          <p>
            MongoDB can scale beautifully if you plan ahead. Small mistakes early—like unsecured deployments or missing backups—can cost you dearly. By taking security, indexing, and replication seriously, you create a stable foundation that can grow with your applications.
          </p>
        </div>
      </article>
    </div>
  )
}
