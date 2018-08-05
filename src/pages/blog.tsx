import * as React from 'react'
import Link from 'gatsby-link'

import "./blog.scss"


interface IndexPageProps {
    data:{
        site:{
            siteMetadata:{
                title: string;
            }
        }
        allMarkdownRemark: {  
            edges:{
                node:{
                    frontmatter:{
                        title: string;
                        path: string;
                        date: string;
                    }
                }
            }[],
        }
    }
}



export default class extends React.Component<IndexPageProps, {}> {
    constructor(props: IndexPageProps, context: any) {
      super(props, context)
    }
    public render() {

        const blogpages = this.props.data.allMarkdownRemark.edges.map((edge)=>{
            const {title, path, date} = edge.node.frontmatter;
            return (
                <Link to={path}>
                    <div className="post-card">
                        <div className="post-card-title">{title}</div>
                        <div className="post-card-date">{date}</div>
                    </div>
                </Link>
            )
        })

      return (
        <div>
          <h1 >Blog Pages</h1>
          <div className="wrapper-blog">
            {blogpages}
          </div>
        </div>
      )
    }
  }

export const pageQuery = graphql`
    query BlogQuery {
        site{
            siteMetadata{
                title
            }
        }
        allMarkdownRemark {  
            edges {
                node {
                    frontmatter {
                        title
                        path
                        date
                    }
                }
            }
        }
    }
`
