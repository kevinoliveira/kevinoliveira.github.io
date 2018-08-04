import * as React from 'react'
import Link from 'gatsby-link'


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
            return <li><Link to={path}>{title} - {date}</Link></li>
        })

      return (
        <div>
          <h1 >Blog Pages</h1>
          <ul>
            {blogpages}
          </ul>
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
