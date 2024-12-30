import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import LocationMap from "./LocationMap"

const scheduleBoard = {
    marginTop: '1rem',
    background: "var(--black)",
    border: "4px solid var(--siteYellow)",
    padding: "1rem",
    borderRadius: ".5rem",
    width: "100%",
    height: "25rem"
}

const mapHeader = {
    fontSize: 'var(--fontMd)',
    color: 'var(--black)',
    textAlign: 'center',
    marginTop: '2rem'
  }

const title = {
    fontSize: '1.5rem',
    color: 'var(--siteYellow)',
}

const subtitle = {
    fontSize: '1.25rem',
    color: 'var(--sitePink)',
}

const Schedule = () => {
    return (
        
        <div className="row">
                      <p style={mapHeader}>Where are we today!</p>

   <div className='col-sm-12 col-md-4'>
            <StaticQuery
                query={scheduleList}
                render={(data) => {
                    const edges = data.allContentfulSchedule.edges;
                    return (
                        <ul className='p-0'>
                            {edges.map(({ node }) => (
                                <li key={node.id}>
                                    <div style={scheduleBoard}>
                                        <div>
                                            <strong style={title}>Monday: </strong>
                                            <span style={subtitle}>
                                                {node.monday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Tuesday: </strong>
                                            <span style={subtitle}>
                                                {node.tuesday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Wedndeday: </strong>
                                            <span style={subtitle}>
                                                {node.wednesday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Thursday: </strong>
                                            <span style={subtitle}>
                                                {node.thrusday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Friday: </strong>
                                            <span style={subtitle}>
                                                {node.friday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Saturday: </strong>
                                            <span style={subtitle}>
                                                {node.saturday || "N/A"}
                                            </span>
                                        </div>
                                        <div>
                                            <strong style={title}>Sunday: </strong>
                                            <span style={subtitle}>
                                                {node.sunday || "N/A"}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    );
                }}
            />


        </div>
        <div className="col-sm-12 col-md-8">
            <LocationMap />
        </div>
        </div>
    )
}



export default Schedule

const scheduleList = graphql`
query {
    allContentfulSchedule {
      edges {
        node {
          monday
          tuesday
          wednesday 
          thursday
          friday
          saturday
          sunday
        }
      }
    }
  }`