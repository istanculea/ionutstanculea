import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function OpenVPNServerSetup() {
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
            <span className="cloud-badge">Networking</span>
            <span className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>August 16, 2025</span>
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
            Quickly set up a secure OpenVPN server on any cloud provider to connect remote teams safely and ensure encrypted communication.
          </p>
        </header>

        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1558898410-773aee6e22b0?w=800&h=500&fit=crop&crop=entropy&auto=format"
            alt="OpenVPN Server Setup"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Server Installation</h2>
          <ul>
            <li>Choose a Linux distribution (Ubuntu/Debian recommended).</li>
            <li>Install OpenVPN and Easy-RSA.</li>
            <li>Generate server and client certificates.</li>
          </ul>

          <h2>Configuration</h2>
          <ul>
            <li>Configure server.conf with proper routing and firewall rules.</li>
            <li>Enable NAT and IP forwarding for client traffic.</li>
            <li>Test connectivity and VPN functionality.</li>
          </ul>

          <h2>Client Setup</h2>
          <ul>
            <li>Distribute client configuration files securely.</li>
            <li>Use OpenVPN client software on all devices.</li>
            <li>Verify encryption and server connectivity.</li>
          </ul>
        </div>
      </article>
    </div>
  )
}
