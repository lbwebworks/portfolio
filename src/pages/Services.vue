<template>
  <section class="services-page">
    <h2 class="text-2xl font-semibold mb-4">Services</h2>

    <p class="services-intro">
      Website building is my part-time service focused on practical, reliable delivery. I build sites
      from the ground up and publish them online through GitHub Pages (free hosting) or via custom domain setup.
    </p>

    <div class="services-block">
      <h3>Delivery Process</h3>
      <ol>
        <li>Requirements gathering</li>
        <li>Planning and project scope confirmation</li>
        <li>Development</li>
        <li>Testing and revisions</li>
        <li>Approval</li>
        <li>Online publishing</li>
      </ol>
    </div>

    <div class="services-block">
      <h3>Scope Overview</h3>
      <ul>
        <li>Primary scope: static pages and websites without login/register.</li>
        <li>Also within scope: projects with login/register and light database management, with longer timelines.</li>
        <li>Dynamic content without authentication can still be delivered as static architecture by reading from site data or uploaded files.</li>
        <li>Admin/content updates can be handled through GitHub pull requests.</li>
      </ul>
    </div>

    <div class="services-block">
      <h3>Sample Price Guide</h3>
      <div class="price-table-wrap">
        <table class="price-table">
          <thead>
            <tr>
              <th>Package</th>
              <th>Typical Coverage</th>
              <th>Lead Time</th>
              <th>Starting Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Starter Static</td>
              <td>1-4 pages, content sections, contact details, deployment</td>
              <td>3-5 days</td>
              <td>PHP 8,000+</td>
            </tr>
            <tr>
              <td>Dynamic Static</td>
              <td>File/data-driven content, PDF/media updates, GitHub PR update flow</td>
              <td>5-9 days</td>
              <td>PHP 15,000+</td>
            </tr>
            <tr>
              <td>Light App</td>
              <td>Login/register + light database requirements, dashboard-lite features</td>
              <td>10-20+ days</td>
              <td>PHP 30,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="services-note">Final pricing depends on page count, content complexity, revisions, integrations, and maintenance needs.</p>
    </div>

    <div class="services-block">
      <h3>Limitations and Heavy Projects</h3>
      <p>
        Full e-commerce platforms are considered heavy projects and are outside my usual quick-turn scope.
        Websites with dynamic content plus login/register, custom domain email integration, and deeper backend requirements
        are the heaviest category and require more planning time.
      </p>
    </div>
  </section>
</template>
