/*
 * Description  : 
 * Author       : Huxd
 * Date         : 2021-11-27 15:17:15
 * LastEditors  : Huxd
 * LastEditTime : 2021-11-28 17:53:02
 */
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/avatar.jpeg"
        width={50}
        height={50}
        quality={95}
        alt="avatar"
      />
      {author?.name && (
        <p>
          Personal blog by <strong>{author.name}</strong> 
          <br />{author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
