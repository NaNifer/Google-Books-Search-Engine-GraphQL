// define the resolvers for the queries and mutations

// Imports the user model
const { User } = require('../models');

// Import authentication utility and error
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    // .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('You need to be logged in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('It looks like your username or passowrd are incorrect.')
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('It looks like your username or passowrd are incorrect.')
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user)
            return { token, user };
        },
        saveBook: async (parent, { book }, context) => {
        // If context has a `user` property, that means the user saving book has a valid token and is logged in
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: book } },
                    { new: true }
                )
            }
        // If user attempts to save book and isn't logged in, throw an error
            throw new AuthenticationError('You need to be logged in!')
        },

        // Logged in user can only remove a book from their own profile
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                );
            }
            throw new AuthenticationError('Please log in.');
        },
    },
};

module.exports = resolvers;