import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostDeploymentMonitoring() {
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
            <span className="cloud-badge">DevOps</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 17, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Post Deployment: Monitoring and Error Tracking
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Learn how to monitor applications and track errors effectively after deployment to ensure high reliability, fast incident response, and improved user experience.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1591696331114-ef848d2c0a58?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="Monitoring and Error Tracking"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why Post-Deployment Monitoring Matters</h2>
          <p>
            Deploying your code is only the beginning. Applications evolve in production and can fail for reasons that never appeared in staging. Post-deployment monitoring ensures you catch issues before they affect users and helps maintain service-level agreements (SLAs).
          </p>

          <h2>Key Metrics to Track</h2>
          <ul>
            <li><strong>Uptime & Availability:</strong> Ensure critical endpoints respond correctly.</li>
            <li><strong>Response Times:</strong> Track average and p95 latencies for your APIs.</li>
            <li><strong>Error Rates:</strong> HTTP 4xx/5xx rates, application exceptions.</li>
            <li><strong>Resource Utilization:</strong> CPU, memory, disk, and network usage.</li>
            <li><strong>Business KPIs:</strong> Checkout completions, signups, or any key metric your business depends on.</li>
          </ul>

          <h2>Setting Up Monitoring Tools</h2>
          <p>
            Selecting the right tools is critical. Here are recommended options:
          </p>
          <ul>
            <li><strong>Prometheus + Grafana:</strong> For metric collection, visualization, and alerting.</li>
            <li><strong>CloudWatch / Datadog:</strong> Managed cloud monitoring for serverless and cloud-native apps.</li>
            <li><strong>ELK / OpenSearch:</strong> Centralized log management for troubleshooting.</li>
          </ul>

          <h2>Error Tracking & Incident Management</h2>
          <p>
            Error tracking is more than logging—it's proactive incident management.
          </p>
          <ul>
            <li><strong>Sentry / Rollbar:</strong> Real-time error reporting for frontend and backend applications.</li>
            <li><strong>Notifications:</strong> Configure Slack, Teams, or PagerDuty alerts for critical issues.</li>
            <li><strong>Runbooks:</strong> Document steps for common incidents for faster resolution.</li>
          </ul>

          <h2>Alerting Strategy</h2>
          <ul>
            <li>Use severity levels: critical, warning, info.</li>
            <li>Ensure alerts are actionable to avoid alert fatigue.</li>
            <li>Include context: affected services, logs, and dashboards.</li>
          </ul>

          <h2>Continuous Improvement</h2>
          <ul>
            <li>Post-mortems: Document failures and preventive actions.</li>
            <li>Refine dashboards and thresholds based on historical trends.</li>
            <li>Regularly review alert effectiveness and remove noise.</li>
          </ul>

          <h2>Real-World Example</h2>
          <p>
            During a recent deployment, an API endpoint started returning intermittent 500 errors. The alert system immediately flagged a spike in error rate, sent a Slack notification to the DevOps team, and linked relevant logs in Sentry. The team identified a misconfigured environment variable and rolled out a fix in under 15 minutes, preventing downtime.
          </p>

          <h2>Best Practices</h2>
          <ul>
            <li>Monitor both technical and business metrics.</li>
            <li>Keep logs structured and centralized.</li>
            <li>Test alerting workflows periodically.</li>
            <li>Integrate monitoring into CI/CD pipelines for proactive detection.</li>
          </ul>

          <h2>Key Takeaways</h2>
          <ul>
            <li>Post-deployment monitoring is as crucial as development itself.</li>
            <li>Combining metrics, logs, and error tracking provides complete visibility.</li>
            <li>Automation reduces response times and human error.</li>
            <li>Iterate on your monitoring strategy based on real incidents.</li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li>Implement synthetic monitoring for key user flows.</li>
            <li>Use anomaly detection to identify unexpected behavior automatically.</li>
            <li>Continuously update dashboards and alerts as applications evolve.</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
