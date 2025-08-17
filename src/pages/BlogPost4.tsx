import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function PostOpenVPN() {
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
            <span className="cloud-badge">Networking</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 15, 2025</span>
            </span>
            <span className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Create an OpenVPN Server in Seconds
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Secure remote access is a must in modern infrastructures. I’ve repeatedly set up OpenVPN servers for teams and personal projects. In this article, I’ll explain a streamlined approach to deploy an OpenVPN server quickly, including security configurations and client onboarding tips.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/blog/openvpn.webp"
            alt="OpenVPN Secure Network Setup and Configuration"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Why OpenVPN?</h2>
          <p>
            OpenVPN offers strong encryption, cross-platform support, and flexible configuration. Whether for remote work, personal lab setups, or connecting multiple sites, I rely on OpenVPN for secure, reliable connectivity.
          </p>

          <h2>Deployment Steps</h2>
          <ul>
            <li>Choose a VPS or cloud instance with a public IP.</li>
            <li>Install OpenVPN using automated scripts like <code>openvpn-install.sh</code> to simplify setup.</li>
            <li>Generate client certificates for each user and configure proper firewall rules.</li>
            <li>Optionally, set up a management interface to monitor connections and bandwidth.</li>
          </ul>

          <h2>Security Best Practices</h2>
          <ul>
            <li>Use strong TLS and cipher suites for encryption.</li>
            <li>Enable client certificate authentication.</li>
            <li>Keep the server and packages updated to mitigate vulnerabilities.</li>
          </ul>

          <h2>Lessons Learned</h2>
          <p>
            Automating OpenVPN deployment saves time and reduces errors. Proper certificate management is critical for security. With monitoring and logging in place, you can quickly spot issues and maintain a reliable, secure VPN service.
          </p>
        </div>
      </article>
    </div>
  )
}
