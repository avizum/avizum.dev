import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Alpine Terms of Service",
};

export default function Terms() {
  return (
    <div className="legal">
      <div className="legal-header">
        <h1 className="title">Terms of Service for Alpine Bot</h1>
        <div className="legal-date">
          <p>Effective: 2026-11-15</p>
          <p>Last Updated: 2026-11-13</p>
        </div>
      </div>
      <hr />
      <p>
        These Terms of Service (the "Terms") govern your access to and use of Alpine (The "Bot,"
        "Application," or "App") an Application on Discord, operated by avizum ("we," "us," or
        "our,"). By adding the application to your Discord server, or by using any of its features,
        you agree to be bound to these Terms. If you do not agree, do not use this Application.
      </p>
      <nav className="legal-toc">
        <ol>
          <li>
            <a href="#description">Description of Service</a>
          </li>
          <li>
            <a href="#acceptable-use">Acceptable Use</a>
          </li>
          <li>
            <a href="#data-privacy">Data Collection and Privacy</a>
          </li>
          <li>
            <a href="#modifications">Modifications to Application</a>
          </li>
          <li>
            <a href="#termination">Termination of Services</a>
          </li>
          <li>
            <a href="#liability">Limitation of Liability</a>
          </li>
          <li>
            <a href="#indemnification">Indemnification</a>
          </li>
          <li>
            <a href="#changes">Changes to Terms</a>
          </li>
          <li>
            <a href="#governing-law">Governing Law</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ol>
      </nav>
      <h2 id="description">Description of Service</h2>
      <p>Alpine is a multipurpose Bot on Discord.</p>
      <h2 id="acceptable-use">Acceptable Use</h2>
      <p>
        By using this Application, you must comply with{" "}
        <a href="https://discord.com/terms" target="_blank" rel="noreferrer noopener">
          Discord's Terms of Service
        </a>{" "}
        and{" "}
        <a href="https://discord.com/guidelines" target="_blank" rel="noreferrer noopener">
          Community Guidelines
        </a>{" "}
        to use the Bot. You must meet Discord's minimum age requirement to use Discord itself. You
        also agree not to:
      </p>
      <ul>
        <li>
          Use the App for any unlawful purpose or in violation of Discord's Terms of Service and/or
          Community Guidelines
        </li>
        <li>Attempt to exploit, abuse, or interfere with the App's normal operation</li>
        <li>Use the App to harass, threaten or harm others</li>
        <li>
          Resell, sublicense, or represent our operated instance of the App as your own without
          proper permission
          <ul>
            <li>
              <strong>Note:</strong> The App's source code is publicly available under the GNU
              General Public License v3.0 (GPL-3.0). The above clause does NOT restrict your rights
              under that license to use, modify, or host your own instance of the App's source code,
              it only concerns the instance of the App that we operate.
            </li>
          </ul>
        </li>
      </ul>
      <h2 id="data-privacy">Data Collection and Privacy</h2>
      <p>
        Our collection and use of data is described in our <Link href="/">Privacy Policy</Link>.
      </p>
      <p>
        We collect and store only what is necessary for the App's features to function. This may
        include server, channel, role, and user identifiers used for settings moderation, and
        feature configuration.
      </p>
      <h2 id="modifications">Modifications to the Application</h2>
      <p>
        This Application is provided on an "as available" basis. Uptime, availability or error free
        operation is not guaranteed. We may modify, suspend, or discontinue the Application, or any
        feature it provides at any time, with or without notice.
      </p>
      <h2 id="termination">Termination of Services</h2>
      <p>
        We reserve the right to terminate or suspend your access to this App at any time, for any
        reason, including the violation of these terms. This includes servers this App has been
        added to.
      </p>
      <h2 id="liability">Limitation of Liability</h2>
      <p className="legal-caps">
        TO THE FULLEST EXTENT PERMITTED BY LAW, AVIZUM SHALL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, REVENUE, OR
        GOODWILL, ARISING FROM YOUR USE OF OR INABILITY TO USE THE APPLICATION, EVEN IF WE HAVE BEEN
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <h2 id="indemnification">Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless avizum from any claims, damages, losses, or
        expenses (including reasonable legal fees) arising out of your use of the App or your
        ciolation of these Terms.
      </p>
      <h2 id="changes">Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Users of the App will be notified of material
        changes via the Support Server. Continued use of the Application after changes take effect
        constitutes acceptance of the revised Terms.
      </p>
      <h2 id="governing-law">Governing Law</h2>
      <p>
        These Terms are governed by the laws in the State of California, United States, without
        regard to conflict-of-law principles.
      </p>
      <h2 id="contact">Contact Information</h2>
      <p>
        If you have any questions or concerns about these Terms, you may contact us through
        following channels:
      </p>
      <ul>
        <li>
          Discord Support Server:{" "}
          <a href="https://discord.gg/muTVFgDvKf" target="_blank" rel="noreferrer noopener">
            discord.gg/muTVFgDvKf
          </a>
        </li>
        <li>
          Email: <a href="mailto:me@avizum.dev">me@avizum.dev</a>
        </li>
      </ul>
    </div>
  );
}
