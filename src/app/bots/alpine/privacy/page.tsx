import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpine Privacy Policy",
};

export default function Privacy() {
  return (
    <div className="legal">
      <div className="legal-header">
        <h1 className="title">Privacy Policy for Alpine Bot</h1>
        <p className="legal-date">Last Updated: 2026-11-11</p>
      </div>
      <hr />
      <p>
        This Privacy Policy explains how Alpine (the "Bot," "Application," or "App"), operated by
        avizum ("we," "us," or "our"), collects, uses, and protects your information. By using the
        App, you agree to the practices described in this policy. If you do not agree, do not use
        the App.
      </p>

      <h2>Information We Store</h2>
      <p>Depending on which features you or your server use, we may store:</p>
      <ul>
        <li>Discord user IDs</li>
        <li>Guild (Server) IDs</li>
        <li>Channel IDs</li>
        <li>Role IDs</li>
        <li>Your timezone and color preference</li>
        <li>Words and/or phrases that you register for the App's Highlight feature</li>
        <li>Join and Leave message templates configured by server administrators</li>
      </ul>
      <p>
        We do not store message content, usernames, avatars, or member lists. We do not collect your
        email, legal name, or IP addresses.
      </p>

      <h2>Information We Process Without Storing</h2>
      <p>
        Some features require the App to read data that Discord sends to it in real time. This data
        is used only at the moment it is received to perform the feature described, and is then
        discarded. It is never saved to a database, written to logs, or shared with anyone.
      </p>

      <h3>Message Content</h3>
      <p>
        The App receives the content of messages in channels it can see. This is used only for the
        Highlight feature:
      </p>
      <ul>
        <li>
          When a message is sent, the App checks it in memory against the words and phrases
          registered by users of the Highlight feature.
        </li>
        <li>
          If a match is found, the App sends the registered user a Direct Message containing a link
          to the message and a short preview of it. This is only sent if that user already has
          permission to view the channel the message was sent in.
        </li>
        <li>
          Whether or not a match is found, the message content is discarded immediately after the
          check. It is not stored, logged, or retained in any way.
        </li>
      </ul>
      <p>
        Message content is never used to train machine learning or artificial intelligence models,
        and is never sold or shared with third parties.
      </p>

      <h3>Server Member Events</h3>
      <p>
        The App receives events from Discord when a member joins or leaves a server. These events
        include the member's username, display name, and avatar. They are used only to:
      </p>
      <ul>
        <li>Send the server's configured Join and Leave messages</li>
        <li>Run the Member Verification feature, if enabled by the server</li>
      </ul>
      <p>
        This information is used to build the message or perform the action, and is then discarded.
        The App does not store member information or maintain a list of a server's members.
      </p>

      <h2>How We Use Your Information</h2>
      <p>We use the information above to provide the App's features, including:</p>
      <ul>
        <li>Join and Leave messages for the server</li>
        <li>Member Verification feature</li>
        <li>Automatic thread unarchiving</li>
        <li>Sharing your timezone with other users of the App, where relevant to that feature</li>
        <li>Applying your color preference</li>
        <li>The Highlight feature</li>
        <li>Responding to your requests or inquiries</li>
        <li>
          Restricting or terminating access to the Application for users that violate our Terms of
          Service, where necessary
        </li>
      </ul>

      <h2>Your Choices</h2>
      <ul>
        <li>
          The Highlight feature is opt-in. You are only sent highlights if you register words or
          phrases yourself.
        </li>
        <li>
          Join and Leave messages and Member Verification are opt-in per server, and are only active
          if a server administrator enables them.
        </li>
        <li>
          You can remove your registered highlight words or phrases at any time, or delete all of
          your data as described below.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect the data we store. However, in the unlikely event of
        a data breach affecting your information, we will notify affected users where possible.
      </p>

      <h2>Data Deletion</h2>
      <p>
        You may delete your data at any time using the App's{" "}
        <code className="i-code">/deletemydata</code> command. If you no longer have access to the
        App, you may contact us to request deletion. Your data is not automatically deleted if you
        remove the Application from your server, or if you disable a feature. The data is retained
        until you request its deletion through the method above.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Users of the App will be notified of
        material changes via the Support Server. Continued use of the Application after changes take
        effect constitutes acceptance of the revised Policy.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, you may contact us through
        the following channels:
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
        <li>Sending a Direct Message to the Bot through Discord</li>
      </ul>
    </div>
  );
}
