import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function BlogPost1() {
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
            <span className="cloud-badge">Cloud Infrastructure</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>March 12, 2024</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Optimizing Azure Infrastructure with Terraform
          </h1>
          
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to implementing Infrastructure as Code on Azure, reducing deployment times by 35% and ensuring consistent environments across teams.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="Azure Infrastructure with Terraform"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Introduction</h2>
          <p>
            Infrastructure as Code (IaC) has revolutionized how we manage cloud resources. In this comprehensive guide, 
            I'll share my experience implementing Terraform for Azure infrastructure, including the challenges faced 
            and the significant improvements achieved.
          </p>

          <h2>The Challenge</h2>
          <p>
            At Electronic Arts, we were managing a complex hybrid cloud environment with manual provisioning processes 
            that took hours and were prone to configuration drift. Our team needed a solution that would:
          </p>
          <ul>
            <li>Reduce deployment times significantly</li>
            <li>Ensure consistent environments across development, staging, and production</li>
            <li>Provide version control for infrastructure changes</li>
            <li>Enable easy rollback capabilities</li>
          </ul>

          <h2>Implementation Strategy</h2>
          <p>
            We adopted a phased approach to implementing Terraform, starting with non-critical environments 
            and gradually moving to production workloads. Here's how we structured our Terraform code:
          </p>

          <h3>Module Structure</h3>
          <p>
            We created reusable modules for common Azure resources, which significantly improved consistency 
            and reduced code duplication across our infrastructure.
          </p>

          <h3>State Management</h3>
          <p>
            Implementing remote state management with Azure Storage Accounts was crucial for team collaboration 
            and preventing state conflicts during concurrent deployments.
          </p>

          <h2>Results Achieved</h2>
          <p>
            After implementing our Terraform-based Infrastructure as Code solution, we achieved remarkable improvements:
          </p>
          <ul>
            <li><strong>35% reduction</strong> in deployment times</li>
            <li><strong>Zero configuration drift</strong> incidents</li>
            <li><strong>90% faster</strong> environment provisioning</li>
            <li><strong>100% reproducible</strong> infrastructure deployments</li>
          </ul>

          <h2>Best Practices</h2>
          <p>
            Through this implementation, we discovered several best practices that I recommend for any team 
            considering Terraform for Azure:
          </p>
          <ul>
            <li>Always use remote state management</li>
            <li>Implement proper tagging strategies</li>
            <li>Use modules for reusable components</li>
            <li>Implement automated testing for infrastructure code</li>
            <li>Follow the principle of least privilege for service principals</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            Implementing Infrastructure as Code with Terraform has transformed our operations, providing 
            consistency, reliability, and significant time savings. The investment in learning and implementing 
            these practices has paid dividends in our ability to deliver reliable infrastructure at scale.
          </p>
        </div>
      </article>
    </div>
  )
}