import React from 'react'
import { gql, useQuery } from '@apollo/client' 

const sorette = gql`
  query MyQuery {
    sorettes {
      id
      name
      detail
      thumbnail {
        url
      }
    }
  }
`;

const Contact = () => {
  const { data, loading, error } = useQuery(sorette);

  if (loading) return "Loading Now...";
  if (error) return `Return Error ${error}`;

  return (
    <>
    <h1>Contact</h1>
    <div>
      {data.sorettes.map((sorette) => (
        <div key={sorette.id}>
          <div>
            <p>{sorette.name}</p>
            <p>{sorette.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  )
}

export default Contact