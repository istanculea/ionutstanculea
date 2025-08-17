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
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Linux</span>
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
            Managing permissions in Linux can get complicated, especially when multiple users or services need fine-grained access. Over time, I've developed practical methods to handle ACLs efficiently and securely. In this post, I'll share strategies that I use in both production and personal projects.
          </p>
        </header>
        
        <div className="aspect-video mb-12 overflow-hidden rounded-lg">
          <img
            src="/lovable-uploads/e98ddacc-29c4-4915-9c1c-3025e3925c7b.png"
            alt="Linux Access Control List Management and Permissions"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Understanding ACLs</h2>
            <p className="text-muted-foreground leading-relaxed">
              ACLs provide a way to define permissions beyond the traditional owner/group/world model. They are especially useful in multi-user systems where certain users require specific read/write/execute privileges on files or directories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Installing ACL Support</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most modern Linux distributions include ACL support by default, but you may need to install the utilities:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
              <code># Ubuntu/Debian<br />
              sudo apt install acl<br /><br />
              # RHEL/CentOS/Fedora<br />
              sudo yum install acl</code>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Basic ACL Commands</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here are the essential commands I use daily for ACL management:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">View Current ACLs</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>getfacl /path/to/file</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Grant User Access</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>setfacl -m u:username:rwx /path/to/file</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Grant Group Access</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>setfacl -m g:groupname:rx /path/to/directory</code>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Practical Examples</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Shared Project Directory</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  When setting up a shared project directory for a development team:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code># Create directory and set default ACLs<br />
                  mkdir /shared/project<br />
                  setfacl -m d:g:developers:rwx /shared/project<br />
                  setfacl -m g:developers:rwx /shared/project</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Log File Access</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Giving a monitoring user read access to application logs:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>setfacl -R -m u:monitor:r /var/log/myapp/</code>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Advanced Techniques</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Recursive Operations</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Apply ACLs to all existing files and subdirectories:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>setfacl -R -m u:username:rwx /path/to/directory/</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Default ACLs</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Set default ACLs for new files created in a directory:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code>setfacl -m d:u:username:rwx /path/to/directory/</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Removing ACLs</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Remove specific ACL entries or all ACLs:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <code># Remove specific user ACL<br />
                  setfacl -x u:username /path/to/file<br /><br />
                  # Remove all ACLs<br />
                  setfacl -b /path/to/file</code>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Always backup ACLs before major changes:</strong> Use <code className="bg-gray-100 px-1 rounded">getfacl -R /path &gt; backup.acl</code> to save current permissions.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Use groups instead of individual users:</strong> This makes management much easier as teams grow and change.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Document your ACL strategy:</strong> Keep notes about why certain permissions were granted, especially in production systems.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Troubleshooting Common Issues</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When ACLs don't work as expected, check the filesystem mount options. ACLs must be enabled:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm mb-4">
              <code># Check if ACLs are enabled<br />
              mount | grep acl<br /><br />
              # Enable ACLs on filesystem<br />
              mount -o remount,acl /dev/sda1</code>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Also remember that some applications may not respect ACLs if they create files with specific umask settings. Always test your ACL configuration with the actual applications that will be using the files.
            </p>
          </div>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground leading-relaxed">
              ACLs are a powerful tool for fine-grained permission management in Linux. While they add complexity, they're essential for environments where traditional Unix permissions aren't sufficient. Start with simple use cases and gradually incorporate more advanced features as your needs grow.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
