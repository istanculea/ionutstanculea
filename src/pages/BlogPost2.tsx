import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function BlogPost2() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-4xl mx-auto px-6 py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Button>

        <header className="mb-12 space-y-6">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span className="cloud-badge">DevOps</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>February 28, 2024</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Building Resilient Monitoring with Grafana
          </h1>
          
          <p className="text-xl text-muted-foreground">
            How to implement comprehensive monitoring solutions that provide real-time insights and reduce incident response times by 40%.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="Grafana Monitoring Dashboard"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>The Importance of Observability</h2>
          <p>
            In today's complex cloud environments, having comprehensive monitoring and observability 
            is not just beneficial—it's essential. When incidents occur, every second counts, and 
            having the right data at your fingertips can mean the difference between a minor blip 
            and a major outage.
          </p>

          <h2>Our Monitoring Challenge</h2>
          <p>
            At Electronic Arts, we were managing hundreds of microservices across multiple Azure 
            regions. Our existing monitoring solution was fragmented, with different teams using 
            different tools, making it difficult to get a holistic view of system health.
          </p>

          <h3>Key Requirements</h3>
          <ul>
            <li>Unified dashboard for all services</li>
            <li>Real-time alerting with intelligent routing</li>
            <li>Historical data analysis capabilities</li>
            <li>Low-latency data collection</li>
            <li>Scalable architecture to handle growth</li>
          </ul>

          <h2>Grafana Implementation</h2>
          <p>
            We chose Grafana as our primary visualization tool, integrated with Prometheus for 
            metrics collection and Loki for log aggregation. This combination provided us with 
            a powerful, unified observability platform.
          </p>

          <h3>Data Sources Configuration</h3>
          <p>
            We configured multiple data sources including Azure Monitor, Prometheus, and custom 
            application metrics. This multi-source approach gave us comprehensive coverage of 
            our entire infrastructure stack.
          </p>

          <h3>Dashboard Design</h3>
          <p>
            We created role-specific dashboards for different teams:
          </p>
          <ul>
            <li><strong>Executive Dashboard:</strong> High-level KPIs and system health</li>
            <li><strong>Operations Dashboard:</strong> Infrastructure metrics and alerts</li>
            <li><strong>Development Dashboard:</strong> Application performance and errors</li>
            <li><strong>Business Dashboard:</strong> User experience and feature usage</li>
          </ul>

          <h2>Alerting Strategy</h2>
          <p>
            We implemented a tiered alerting system that routes notifications based on severity 
            and team responsibility. This approach reduced alert fatigue while ensuring critical 
            issues receive immediate attention.
          </p>

          <h3>Alert Types</h3>
          <ul>
            <li><strong>Critical:</strong> Immediate PagerDuty notification</li>
            <li><strong>Warning:</strong> Slack notification during business hours</li>
            <li><strong>Info:</strong> Email summary sent daily</li>
          </ul>

          <h2>Results and Benefits</h2>
          <p>
            The implementation of our Grafana-based monitoring solution delivered significant improvements:
          </p>
          <ul>
            <li><strong>40% reduction</strong> in incident response times</li>
            <li><strong>60% decrease</strong> in alert fatigue</li>
            <li><strong>99.9% uptime</strong> achievement across critical services</li>
            <li><strong>Proactive issue detection</strong> preventing 15+ potential outages</li>
          </ul>

          <h2>Lessons Learned</h2>
          <p>
            Through this implementation, we learned several valuable lessons:
          </p>
          <ul>
            <li>Start with business-critical metrics first</li>
            <li>Invest time in proper dashboard organization</li>
            <li>Train teams on reading and interpreting dashboards</li>
            <li>Regularly review and update alerting thresholds</li>
            <li>Document dashboard purposes and metric definitions</li>
          </ul>

          <h2>Future Enhancements</h2>
          <p>
            We're continuously improving our monitoring setup with plans for:
          </p>
          <ul>
            <li>Machine learning-based anomaly detection</li>
            <li>Automated remediation for common issues</li>
            <li>Enhanced correlation between metrics and business outcomes</li>
            <li>Mobile-optimized dashboards for on-call engineers</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Building a resilient monitoring solution with Grafana has fundamentally changed how 
            we operate our infrastructure. The visibility and insights we now have enable us to 
            maintain high availability while continuously improving our systems.
          </p>
        </div>
      </article>
    </div>
  )
}