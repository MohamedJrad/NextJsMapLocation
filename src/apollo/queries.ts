import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
query {
  getLocations{
    name{
      ar
      fr
      en
    }
    description{
      ar
      fr
      en
    }
    address{
      ar
      fr
      en
    }
    sector
    lat
    long
  }
}
`;



export const GET_LOCATIONS_BY_SECTOR = gql`
query getLocationsBySector($sector:String!) {
  getLocationsBySector(sector:$sector){
    name{
      ar
      fr
      en
    }
    description{
      ar
      fr
      en
    }
    address{
      ar
      fr
      en
    }
    sector
    lat
    long
  }
}
`
export const GET_IS_LOGGEDIN = gql`
	query GetisLoggedIn {
		isLoggedIn @client
	}
`;