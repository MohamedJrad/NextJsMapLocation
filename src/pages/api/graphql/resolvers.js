
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const User = require('./user')
const Location = require('./location')
var mongoose = require('mongoose');
var uuid = require('uuid');


export const resolvers = {
    Query: {

        // async user(root, { id }, { user }) {
        //     // try {
        //     //     if (!user) throw new Error('You are not authenticated!')
        //     //     // return models.User.findByPk(id)
        //     // } catch (error) {
        //     //     throw new Error(error.message)
        //     // }
        // },
        async getLocations(parent, args, context) {
            // if (!context.user || !context.user.role.includes('admin')) return null;
            try {
                const locations = Location.find({})
                console.log(locations.getLocations)
                return locations
            } catch (error) {
                throw new Error(error.message)
            }
        },
        async getLocationsBySector(root, { sector }) {
            try {
                const locations = Location.find({
                    sector: sector
                })
                return locations
            } catch (error) {
                throw new Error(error.message)
            }
        },


    },
    Mutation: {
        async registerUser(root, { email, password }) {
            try {

                let user = new User({
                    email: email,
                    password: await bcrypt.hash(password, 10),
                    role: 'user'
                })
                const result = await user.save()
                const token = jsonwebtoken.sign(
                    { email: email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1y' }
                )



                return {
                    token: token, user: result,
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        async login(_, { email, password }) {
            try {

                const users = await User
                    .find({
                        email: email   // search query
                    })

                if (users.length === 0) {
                    throw new Error('Email Not Found')
                }

                const user = users[0]


                const isValid = await bcrypt.compare(password, user.password)



                if (!isValid) {
                    throw new Error('Incorrect password')
                }



                // return jwt
                const token = jsonwebtoken.sign(
                    { email: user.email },
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' }
                )

                return {
                    token: token, user: user
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        async addLocation(_, { location }) {

            const id = uuid.v4()
            console.log(id)
            try {

                let newLocation = new Location({
                    id: uuid.v4().toString(),
                    name: location.name,
                    description: location.description,
                    lat: location.lat,
                    long: location.long,
                    address: location.address,
                    sector: location.sector

                })
                await newLocation.save()




                return true
            } catch (error) {
                throw new Error(error.message)
            }

        },
        async deleteLocation(_, { id }) {
            try {
                await Location.findOneAndRemove({
                    id: id
                })
                return true



            } catch (error) {
                throw new Error(error.message)
            }

        },
        async updateLocation(_, { id, location }) {
            try {

                //  Location.findOneAndUpdate(
                //      {
                //          email: 'ada.lovelace@gmail.com'  // search query
                //      },
                //      {
                //          email: 'theoutlander@live.com'   // field:values to update
                //      },
                //      {
                //          new: true,                       // return updated doc
                //          runValidators: true              // validate before update
                //      })


            } catch (error) {
                throw new Error(error.message)
            }

        }
    },

}