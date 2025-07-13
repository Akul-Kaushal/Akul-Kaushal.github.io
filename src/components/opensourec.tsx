const OpenSource = () => {
  return (
    <section id="open-source" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Open Source Contributions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto text-center text-muted-foreground text-lg leading-relaxed">
          <p>
            I actively contribute to open-source projects focused on cybersecurity and developer tools, helping improve the quality and accessibility of technical content for the broader community.
          </p>

          <div className="border p-6 rounded-xl shadow-sm bg-white/90 dark:bg-zinc-800 dark:border-zinc-700">
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
              <span>🛡️</span> OWASP – www-community
            </h3>

            <p className="mb-4 text-muted-foreground">
              I contributed to OWASP’s open knowledge base by improving and maintaining documentation on web application vulnerabilities. You can view my contributions on the following live pages:
            </p>

            <ul className="list-disc list-inside text-left text-base text-muted-foreground space-y-1">
              <li>
                <a
                  href="https://owasp.org/www-community/vulnerabilities/Business_logic_vulnerability"
                  className="text-primary underline hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Logic Vulnerability
                </a>
              </li>
              <li>
                <a
                  href="https://owasp.org/www-community/vulnerabilities/Allowing_Domains_or_Accounts_to_Expire"
                  className="text-primary underline hover:opacity-90"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Domain or Account Expiration
                </a>
              </li>
            </ul>

            <p className="mt-4 text-muted-foreground">
              You can also view the corresponding{" "}
              <a
                href="https://github.com/OWASP/www-community/commit/67676a5ec8480d4f89a3d8c59fef2b36a3b9fd36"
                className="text-primary underline hover:opacity-90"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub commit
              </a>{" "}
              for technical details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
