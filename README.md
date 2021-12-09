# NextJsMapLocation
Arsela s technical test

Main Feature:
Custom JWT  Authentication API with Nodejs , GraphQL and MongoDB

#Technologies:

       Frontend:

-Next.js

-Apollo Client

-styled-componets

-GoogleMaps API

      Backend:

-Next.js server-side  api

-Apollo server 

-Mongoose

-GraphQL API:

*Query :*

- *getLocationsBySector(*sector*:String!):[Location]*
- *getLocations:[Location]*

*Mutation :*

- *registerUser(* email*: String!,* password*: String!): AuthPayload!*
- *login (*email*: String!,* password*: String!): AuthPayload!*
- *addLocation(*location*:LocationInput):Boolean*
- *updateLocation(*id*:String,*location*:LocationInput):Boolean*
- *deleteLocation(*id*:String):Boolean*


        Database:


MongDB



        Deployment :

AWS

MongoDB Atlas
