import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
query {
  getLocations{
    id
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
    id
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

export const GET_USER = gql`
	query GetUser {
		getUser @client
	}
`;

export const GET_TOKEN = gql`
	query GetToken {
		getToken @client
	}
`;

export const LAN=gql`

query language{
  language @client
}

`