/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import urljoin from "url-join";

function SEO({ description, lang, meta, keywords, title }) {
  const { seoImage, site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        seoImage: file(relativePath: { eq: "landing-cover.jpg" }) {
          childImageSharp {
            fixed(width: 1600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const seoImageUrl = urljoin(site.siteMetadata.siteUrl, seoImage.childImageSharp.fixed.src);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: 'google-site-verification',
          content: 'ePMriV_-H2lldLkXE2ys9SWHsCYVxNO0z4DdGOn0il0',
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: seoImageUrl,
        },
        {
          property: `twitter:image`,
          content: seoImageUrl,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image:alt`,
          content: title,
        },
        {
          property: `og:url`,
          content: site.siteMetadata.siteUrl,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:locale`,
          content: `it_IT`,
        },
        {
          name: `robots`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `googlebot`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `theme-color`,
          content: `#9c28b1`,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        {
          name: `mobile-web-app-capable`,
          content: `yes`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MobileApplication",
          "name": site.siteMetadata.title,
          "description": metaDescription,
          "url": site.siteMetadata.siteUrl,
          "image": seoImageUrl,
          "applicationCategory": "UtilitiesApplication",
          "operatingSystem": ["iOS", "Android"],
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR"
          },
          "author": {
            "@type": "Person",
            "name": site.siteMetadata.author,
            "url": "https://www.mattianatali.it"
          },
          "publisher": {
            "@type": "Organization",
            "name": site.siteMetadata.title,
            "url": site.siteMetadata.siteUrl,
            "logo": {
              "@type": "ImageObject",
              "url": urljoin(site.siteMetadata.siteUrl, "/icons/icon-512x512.png")
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "150"
          },
          "keywords": keywords.join(", "),
          "inLanguage": "it-IT",
          "downloadUrl": [
            "https://apps.apple.com/it/app/gaslow-prezzo-carburanti/id1510630580",
            "https://play.google.com/store/apps/details?id=it.mattianatali.gaslowapp&hl=it"
          ]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": site.siteMetadata.title,
          "url": site.siteMetadata.siteUrl,
          "logo": {
            "@type": "ImageObject",
            "url": urljoin(site.siteMetadata.siteUrl, "/icons/icon-512x512.png"),
            "width": 512,
            "height": 512
          },
          "description": metaDescription,
          "founder": {
            "@type": "Person",
            "name": site.siteMetadata.author,
            "url": "https://www.mattianatali.it"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Milano",
            "addressCountry": "IT"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "me@mattianatali.it",
            "contactType": "customer service",
            "areaServed": "IT",
            "availableLanguage": "Italian"
          },
          "sameAs": [
            "https://www.facebook.com/gaslowapp",
            "https://www.linkedin.com/in/mattian",
            "https://github.com/matitalatina"
          ]
        })}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `it`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
