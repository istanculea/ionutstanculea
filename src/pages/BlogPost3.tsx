import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostServerlessRecaptcha() {
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
            <span className="cloud-badge">Serverless</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>11 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            How to Build a Serverless Website with reCAPTCHA on AWS
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Serverless architectures simplify deployment and scaling. I recently built a serverless website that integrates Google reCAPTCHA to prevent spam and abuse. In this post, I’ll share my approach, from setting up the AWS Lambda backend to connecting CloudFront and API Gateway, while keeping the system fully secure and performant.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/blog/serverless.jpg"
            alt="Serverless Website on AWS"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why Serverless?</h2>
          <p>
            Serverless removes the burden of managing infrastructure. AWS Lambda handles compute, S3 hosts static assets, and API Gateway routes requests. This setup allows me to focus on code and user experience rather than servers, provisioning, or patching.
          </p>

          <h2>Implementation Highlights</h2>
          <ul>
            <li>Static website hosted on S3, served via CloudFront for low-latency global delivery.</li>
            <li>Lambda functions behind API Gateway to handle form submissions and backend logic.</li>
            <li>Google reCAPTCHA v3 integration to validate user actions and reduce spam submissions.</li>
            <li>DynamoDB as a serverless database to store validated user inputs securely.</li>
          </ul>

          <h2>Security and Best Practices</h2>
          <ul>
            <li>Restrict S3 buckets to only allow CloudFront access.</li>
            <li>Use IAM roles with least privilege for Lambda functions.</li>
            <li>Encrypt all sensitive data at rest and in transit.</li>
          </ul>

          <h2>Lessons Learned</h2>
          <p>
            Serverless simplifies scaling, but it requires careful attention to observability and security. Adding reCAPTCHA early reduces spam issues. API Gateway request throttling protects against abuse, and monitoring Lambda metrics ensures performance remains predictable.
          </p>
        </div>
      </article>
    </div>
  )
}
