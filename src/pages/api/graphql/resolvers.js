
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const User = require('./user')
const Location = require('./location')

export const resolvers = {
    Query: {

        async user(root, { id }, { user }) {
            // try {
            //     if (!user) throw new Error('You are not authenticated!')
            //     // return models.User.findByPk(id)
            // } catch (error) {
            //     throw new Error(error.message)
            // }
        },
        async getLocations(root) {
            try {
                const locations = Location.find({})
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
            try {
                console.log(location)
                // let newLocation = new Location({
                //     name: location.name,
                //     description: location.description,
                //     lat: location.lat,
                //     long: location.long,
                //     address: location.address,
                //     sector: location.sector

                // })
                // const result = await newLocation.save()




                return true
            } catch (error) {
                throw new Error(error.message)
            }

        },
        async deleteLocation(_, { id }) {
            try {



                return {
                    token: token, user: user
                }
            } catch (error) {
                throw new Error(error.message)
            }

        },
        async updateLocation(_, { id, location }) {
            try {



                return {
                    token: token, user: user
                }
            } catch (error) {
                throw new Error(error.message)
            }

        }
    },

}