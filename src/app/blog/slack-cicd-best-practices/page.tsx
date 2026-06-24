import type { Metadata } from "next";
import Link from "next/link";
import { BlogCtaCard } from "@/components/blog-cta-card";
import { BlogRelatedArticles } from "@/components/blog-related-articles";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Slack CI/CD Best Practices: Automate Your Slack App Pipeline",
  description:
    "Learn how to set up CI/CD pipelines for Slack app development. Automate testing with Slack CLI, deploy workflows with GitHub Actions, and manage dev, staging, and production environments.",
  alternates: {
    canonical: "/blog/slack-cicd-best-practices",
  },
  openGraph: {
    title: "Slack CI/CD Best Practices: Automate Your Slack App Pipeline",
    description:
      "Set up CI/CD pipelines for Slack app development — automated testing, Slack CLI integration, GitHub Actions, and environment management from dev to production.",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Slack CI/CD Best Practices: Automate Your Slack App Pipeline",
  description:
    "A comprehensive guide to setting up CI/CD pipelines for Slack app development. Covers GitHub Actions, Slack CLI testing, environment management, and automated deployment.",
  image: `${SITE.url}/opengraph-image`,
  author: {
    "@type": "Organization",
    name: "Bold Studio",
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: "Bold Studio",
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/logo-192.png`,
    },
  },
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${SITE.url}/blog`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Slack CI/CD Best Practices",
      item: `${SITE.url}/blog/slack-cicd-best-practices`,
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up CI/CD for Slack App Development",
  description:
    "Automate testing, building, and deploying Slack apps using GitHub Actions, Slack CLI, and environment management.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Set up version control",
      text: "Create a Git repository for your Slack app. Structure your project with separate directories for source code, tests, and configuration files. Use a .gitignore that excludes node_modules, .env files, and build artifacts.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configure GitHub Actions",
      text: "Create a .github/workflows/ci.yml file. Define jobs for linting, type checking, and unit tests. Use the setup-node action to install dependencies and cache node_modules for faster builds.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Add Slack CLI testing",
      text: "Install the Slack CLI in your CI environment. Use slack run to start a local development server and run integration tests against it. Configure Slack tokens as GitHub secrets for secure authentication.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Set up environment management",
      text: "Create separate Slack app manifests for dev, staging, and production. Use environment variables for API keys, channel IDs, and feature flags. Deploy to staging first, run smoke tests, then promote to production.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Automate deployment",
      text: "Use Slack CLI's slack deploy command in your CI pipeline. Configure branch-based deployments: merge to main triggers staging deploy, and tagging a release triggers production deploy. Include rollback steps in case of failure.",
    },
  ],
};

const yamlKeyLine =
  // biome-ignore lint/suspicious/noTemplateCurlyInString: GitHub Actions YAML
  "key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}";
// biome-ignore lint/suspicious/noTemplateCurlyInString: GitHub Actions YAML
const yamlTokenLine = "${{ secrets.SLACK_TOKEN }}";
// biome-ignore lint/suspicious/noTemplateCurlyInString: GitHub Actions YAML
const yamlProdTokenLine = "SLACK_TOKEN: ${{ secrets.SLACK_PROD_TOKEN }}";

export default function SlackCicdBestPracticesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <Navbar />
      <main className="flex flex-col items-center gap-20 md:gap-28 *:max-w-432">
        <article className="max-w-3xl w-full px-4 md:px-10 py-16 md:py-24 flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <nav className="text-sm text-muted-light">
              <Link href="/blog" className="hover:text-black">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <span className="text-black">Slack CI/CD Best Practices</span>
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Slack CI/CD Best Practices: Automate Your Slack App Pipeline
            </h1>
            <p className="text-muted text-base md:text-lg">
              Shipping Slack apps should be as fast as the messages your users
              send. Learn how to set up a production-grade CI/CD pipeline that
              tests, builds, and deploys your Slack apps automatically.
            </p>
            <time className="text-sm text-muted-light">June 23, 2026</time>
          </header>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              What is CI/CD for Slack Apps?
            </h2>
            <p className="text-muted">
              CI/CD (Continuous Integration and Continuous Deployment) for Slack
              apps means every code change is automatically tested, built, and
              deployed to your Slack workspace. Instead of manually running
              <code className="text-sm bg-gray-100 px-1 rounded">
                slack deploy
              </code>{" "}
              after every change, a CI/CD pipeline handles the entire process.
              This ensures your Slack workflows, custom apps, and AI agents are
              always in a deployable state and reach production faster with
              fewer bugs.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              Why You Need CI/CD for Slack Development
            </h2>
            <p className="text-muted">
              Without CI/CD, deploying Slack apps becomes a manual, error-prone
              process. Teams waste time on repetitive deployments, miss
              environment inconsistencies, and struggle to roll back when
              something breaks. A proper CI/CD pipeline gives you:
            </p>
            <ul className="list-disc list-inside text-muted flex flex-col gap-2">
              <li>
                <strong>Automated testing</strong> — every pull request runs
                linting, type checks, and integration tests before merging
              </li>
              <li>
                <strong>Consistent environments</strong> — dev, staging, and
                production stay in sync with repeatable builds
              </li>
              <li>
                <strong>Fast iteration</strong> — deploy multiple times a day
                with confidence, just like modern web development teams
              </li>
              <li>
                <strong>Instant rollbacks</strong> — revert to a previous
                version in seconds when a deployment introduces issues
              </li>
              <li>
                <strong>Team velocity</strong> — multiple developers can
                contribute without stepping on each other&apos;s deployments
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 1: Set Up Version Control
            </h2>
            <p className="text-muted">
              Every Slack app starts with a well-structured repository. Create a
              Git repository with a clear directory layout:
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 text-sm font-mono text-muted">
              <p>slack-app/</p>
              <p className="pl-4">├── .github/workflows/</p>
              <p className="pl-4">├── src/</p>
              <p className="pl-4">├── tests/</p>
              <p className="pl-4">├── manifests/</p>
              <p className="pl-4">│ ├── dev.json</p>
              <p className="pl-4">│ ├── staging.json</p>
              <p className="pl-4">│ └── prod.json</p>
              <p className="pl-4">├── .env.example</p>
              <p className="pl-4">├── .gitignore</p>
              <p className="pl-4">├── package.json</p>
              <p className="pl-4">└── slack.json</p>
            </div>
            <p className="text-muted">
              Use separate manifest files for each environment so you can
              configure different permissions, bot scopes, and event
              subscriptions per stage. Never commit{" "}
              <code className="text-sm bg-gray-100 px-1 rounded">.env</code>{" "}
              files — store secrets in your CI provider&apos;s secret vault.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 2: Configure GitHub Actions for Slack Apps
            </h2>
            <p className="text-muted">
              GitHub Actions is the most popular CI platform for Slack app
              development. Create a workflow file at{" "}
              <code className="text-sm bg-gray-100 px-1 rounded">
                .github/workflows/ci.yml
              </code>
              :
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 text-sm font-mono text-muted overflow-x-auto">
              <p>name: Slack App CI</p>
              <p>on: [push, pull_request]</p>
              <p>jobs:</p>
              <p className="pl-4">test:</p>
              <p className="pl-8">runs-on: ubuntu-latest</p>
              <p className="pl-8">steps:</p>
              <p className="pl-12">- uses: actions/checkout@v4</p>
              <p className="pl-12">- uses: actions/setup-node@v4</p>
              <p className="pl-12"> with:</p>
              <p className="pl-16">node-version: 20</p>
              <p className="pl-12">- run: npm ci</p>
              <p className="pl-12">- run: npm run lint</p>
              <p className="pl-12">- run: npm run typecheck</p>
              <p className="pl-12">- run: npm test</p>
            </div>
            <p className="text-muted">
              This basic pipeline runs on every push and pull request. It
              installs dependencies, checks code quality, verifies TypeScript
              types, and runs your test suite. Add caching to speed up
              subsequent runs:
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 text-sm font-mono text-muted">
              <p>- uses: actions/cache@v4</p>
              <p className="pl-4">with:</p>
              <p className="pl-8">path: node_modules</p>
              <p className="pl-8">{yamlKeyLine}</p>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 3: Automate Testing with Slack CLI
            </h2>
            <p className="text-muted">
              The Slack CLI is your primary tool for local development and
              testing. In your CI pipeline, install the Slack CLI and run
              integration tests against a local development server:
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 text-sm font-mono text-muted">
              <p>- name: Install Slack CLI</p>
              <p className="pl-4">run: |</p>
              <p className="pl-8">
                curl -fsSL https://downloads.slack-edge.com/slack-cli/install.sh
                | bash
              </p>
              <p className="pl-8">
                echo "$HOME/.slack/bin" &gt;&gt; $GITHUB_PATH
              </p>
              <p className="pl-4" />
              <p>- name: Start local dev server</p>
              <p className="pl-4">run: slack run &amp;</p>
              <p className="pl-4" />
              <p>- name: Run integration tests</p>
              <p className="pl-4">run: npm run test:integration</p>
              <p className="pl-4" />
              <p>- name: Stop dev server</p>
              <p className="pl-4">if: always()</p>
              <p className="pl-4">run: kill $(lsof -t -i:3000) || true</p>
            </div>
            <p className="text-muted">
              Store your Slack credentials and tokens as GitHub Secrets
              (Settings &gt; Secrets and variables &gt; Actions). Reference them
              with{" "}
              <code className="text-sm bg-gray-100 px-1 rounded">
                {yamlTokenLine}
              </code>{" "}
              — never hardcode tokens in your repository.
            </p>
            <p className="text-muted">
              For more advanced testing, use the Slack API test endpoints to
              simulate real events. Send test webhooks, mock slash commands, and
              verify your app responds correctly in every scenario.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 4: Manage Environments
            </h2>
            <p className="text-muted">
              Treat your Slack app environments like you would any production
              software. Create three distinct stages:
            </p>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Development</h3>
                <p className="text-muted text-sm mt-1">
                  Run locally with{" "}
                  <code className="text-sm bg-gray-100 px-1 rounded">
                    slack run
                  </code>
                  . Use a development Slack workspace with sample data. Connect
                  to local databases and mock external services.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Staging</h3>
                <p className="text-muted text-sm mt-1">
                  Deploy automatically from the main branch. Use a dedicated
                  staging workspace that mirrors production. Run full
                  integration suites and invite beta testers before promoting.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold text-lg">Production</h3>
                <p className="text-muted text-sm mt-1">
                  Deploy from release tags only. Use a separate Slack app with
                  production-scoped permissions. Monitor errors with
                  Slack&apos;s app logs and set up alerting for downtime.
                </p>
              </div>
            </div>
            <p className="text-muted">
              Use environment variables and separate Slack app manifests for
              each stage. Tools like Slack&apos;s own internal CI pipelines also
              follow this pattern — they deploy changes to internal workspaces
              before rolling out to customers.
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Step 5: Automate Deployment
            </h2>
            <p className="text-muted">
              Once tests pass on staging, automate the production deployment.
              Here&apos;s a deployment workflow that triggers when you create a
              release:
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 text-sm font-mono text-muted">
              <p>name: Deploy to Production</p>
              <p>on:</p>
              <p className="pl-4">release:</p>
              <p className="pl-8">types: [published]</p>
              <p className="pl-4" />
              <p>jobs:</p>
              <p className="pl-4">deploy:</p>
              <p className="pl-8">runs-on: ubuntu-latest</p>
              <p className="pl-8">steps:</p>
              <p className="pl-12">- uses: actions/checkout@v4</p>
              <p className="pl-12">- run: npm ci</p>
              <p className="pl-12">- run: npm run build</p>
              <p className="pl-12">- run: slack deploy</p>
              <p className="pl-12"> env:</p>
              <p className="pl-16">{yamlProdTokenLine}</p>
              <p className="pl-16">APP_ENV: production</p>
            </div>
            <p className="text-muted">
              For workflows built with the Workflow Builder, automate deployment
              by exporting workflow definitions as JSON and checking them into
              version control. Use the Slack API to sync workflow configurations
              across environments during CI.
            </p>
            <div className="p-4 rounded-[32px] bg-gray-50 border border-yellow-300">
              <p className="font-bold text-sm">Pro tip</p>
              <p className="text-muted text-sm mt-1">
                Add a rollback step to your deployment workflow. Store previous
                build artifacts and use{" "}
                <code className="text-sm bg-gray-100 px-1 rounded">
                  slack deploy --version
                </code>{" "}
                to revert quickly. In practice, this saves teams hours when a
                deployment introduces unexpected behavior.
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6 p-6 md:p-8 rounded-[32px] bg-gray-50">
            <h2 className="text-2xl md:text-3xl font-bold">
              CI/CD Best Practices Summary
            </h2>
            <ul className="list-disc list-inside text-muted flex flex-col gap-3">
              <li>
                <strong>Test early, test often.</strong> Run linting, type
                checks, and unit tests on every push. Add integration tests with
                the Slack CLI before merging pull requests.
              </li>
              <li>
                <strong>Use branch-based deployments.</strong> Feature branches
                deploy to dev, main deploys to staging, and release tags deploy
                to production.
              </li>
              <li>
                <strong>Keep manifests in version control.</strong> Your Slack
                app manifest defines permissions, scopes, and features. Track
                changes to it just like source code.
              </li>
              <li>
                <strong>Monitor deployments.</strong> Use Slack&apos;s app logs
                and set up alert webhooks to notify your team when a deployment
                succeeds or fails.
              </li>
              <li>
                <strong>Document your pipeline.</strong> Include a
                CONTRIBUTING.md that explains how to set up the dev environment,
                run tests, and trigger deployments.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Can I use CI/CD with Slack&apos;s Workflow Builder?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Yes. Export your workflows as JSON, store them in Git, and use
                  the Slack API to sync them during deployment. This gives you
                  version control and audit trails for no-code workflows too.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  What CI platforms work best with Slack apps?
                </h3>
                <p className="text-muted text-sm mt-1">
                  GitHub Actions is the most common choice because it integrates
                  natively with GitHub repos. GitLab CI and CircleCI work well
                  too. Any platform that supports Node.js and can install the
                  Slack CLI will work.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  How do I handle Slack tokens securely in CI?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Use your CI provider&apos;s encrypted secrets feature. Never
                  hardcode tokens. Rotate tokens regularly and use separate
                  tokens for each environment. GitHub Actions supports
                  environment-specific secrets.
                </p>
              </div>
              <div className="p-4 rounded-[32px] border border-black/5">
                <h3 className="font-bold">
                  Should I test Slack AI agents in CI?
                </h3>
                <p className="text-muted text-sm mt-1">
                  Absolutely. Mock the AI responses in unit tests and run
                  end-to-end tests against a staging environment. This is
                  especially important when your agent interacts with external
                  APIs or databases.
                </p>
              </div>
            </div>
          </section>

          <BlogRelatedArticles currentSlug="slack-cicd-best-practices" />

          <section className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Next steps</h2>
            <p className="text-muted">
              Setting up CI/CD for your Slack app is one of the highest-ROI
              investments you can make. Start with a simple pipeline that runs
              linting and tests, then gradually add deployment automation and
              environment management.
            </p>
            <p className="text-muted">
              If you need help building or deploying Slack apps with proper
              CI/CD pipelines, Bold Studio&apos;s dedicated team can set up your
              entire development infrastructure. We build custom Slack apps,
              automate Slack workflows, and deploy AI agents — all with
              production-grade CI/CD built in.
            </p>
            <BlogCtaCard
              title="Need a Slack app with CI/CD built in?"
              description="We build custom Slack apps, workflows, and AI agents with automated testing and deployment pipelines. Book a call and tell us what you need."
            />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
