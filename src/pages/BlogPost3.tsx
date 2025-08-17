import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function ServerlessWebsiteRecaptcha() {
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
            <span className="cloud-badge">Cloud Infrastructure</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 15, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            How to Build a Serverless Website with reCAPTCHA on AWS
          </h1>

          <p className="text-xl text-muted-foreground">
            Deploy a fully serverless website using AWS Lambda, S3, API Gateway, and integrate Google reCAPTCHA for secure form submissions.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="Serverless Website on AWS"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Architecture Overview</h2>
          <ul>
            <li>S3: Hosts static assets.</li>
            <li>CloudFront: CDN for fast global delivery.</li>
            <li>API Gateway + Lambda: Handles dynamic logic.</li>
            <li>DynamoDB: Optional backend database.</li>
          </ul>

          <h2>Adding reCAPTCHA</h2>
          <ul>
            <li>Integrate Google reCAPTCHA v3 for form validation.</li>
            <li>Verify tokens server-side in Lambda.</li>
            <li>Prevent spam submissions and bot attacks.</li>
          </ul>

          <h2>Deployment & CI/CD</h2>
          <ul>
            <li>Use AWS SAM or Serverless Framework for deployment.</li>
            <li>Automate builds and deployments via GitHub Actions.</li>
            <li>Monitor Lambda errors and usage metrics.</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
