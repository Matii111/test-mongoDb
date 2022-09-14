const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {ApolloServer, gql} = require('apollo-server-express')
const {graphqlExpress, graphiqlExpress} = require('graphql-server-express');
const {makeExecutableSchema} = require('graphql-tools');
const {merge} = require('lodash');

const Admin = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/adminUser.js');
const Article = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/article.js');
const DeliveryUser = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/deliveryUser.js');
const NoPayment = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/noPayment.js');
const Order = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/order.js');
const Payment = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/payment.js');
const PaymentMethods = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/paymentMethods.js');
const Receipt = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/receipt.js');
const Register = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/register.js');
const User = require('/home/mati/Documentos/DesarrolloWeb/MongoDbTest/mongoDb-test/models/user.js');

mongoose.connect('mongodb+srv://mati:71280558mch@cluster0.bmwighb.mongodb.net/bdwebmovil',{useNewUrlParser: true, useUnifiedTopology: true});

const typeDefs = gql`
	type User{		
		run:        String!,
		name:       String,
		lastName:   String,
		pass:       String,
		adress:     String!,
		commune :   String,
		province:   String,
		region:     String,
		birthday:   String,
		gender:     String,
		email:      String!,
		phone:      String,
		registered: Boolean!
	}
	type Admin{
		user : 	User!,
		accessPass: String!,
	}
	type Article{
		articleId: 	    ID,
		articleName:    String,	
		price:          Int!,
		disponiblity:   Boolean!
	}
	type DeliveryUser{
		user : 	User!,
		accessPassDelivery: String!,
	}
	type NoPayment{
		paymentStatus: Payment!
		noPaymentStatus: Boolean!
		paymentCause: String!,
	}
	type Order{
		orderId:       ID!,
		orderStatus:   String!,
		paymentStatus: Payment!,
		paymentMethods: PaymentMethods!, 
		articles: [Article]!,
		user: User!,
	}
	type Payment{
		user: User!,
		admin: Admin!,
		order: Order!,
		paymentMethod: PaymentMethods!,
		paymentStatus: String!,
	}
	type PaymentMethods{		
		paymentMethod: String!,		
	}
	type Receipt{		
		user: User!,
		admin: Admin!,
		order: Order!,
	}
	type Register{		
		user: User!,
		admin: Admin!,
	}
	type Alert{
		message: String
	}

	input UserInput{
		run:        String!,
		name:       String,
		lastName:   String,
		pass:       String,
		adress:     String!,
		commune :   String,
		province:   String,
		region:     String,
		birthday:   String,
		gender:     String,
		email:      String!,
		phone:      String,
		registered: Boolean!
	}
	input AdminInput{
		accessPass: String!,
	}
	input ArticleInput{
		idArticle: ID!,
		articleName:    String!,	
		price:          Int!,
		disponiblity:   Boolean!
	}
	input DeliveryUserInput{
		user : 	String!,
		accessPassDelivery: String!,
	}
	input NoPaymentInput{
		paymentStatus: String!,
		noPaymentStatus: Boolean!,
		paymentCause: String!
	}
	input OrderInput{
		idOrder: ID!,
		orderStatus:   String!,
		paymentStatus: Boolean!,
		paymentMethod: String!,
		article: [String]!,
		user: String!,
	}		
	input PaymentInput{
		user: String!,
		admin: String!,
		order: String!,
		paymentMethod: String!,	
		paymentStatus: String!,
	}
	input PaymentMethodsInput{
		paymentName: String!
	}
	input ReceiptInput{
		idReceipt: ID!,
		user: String!,
		admin: String!,
		Order: String!,
	}
	input RegisterInput{		
		user: String!,
		admin: String!,	
	}

	type Query{
		getUsers: [User]
	}
	type Mutation{
		addUser(input: UserInput): User		
	}
	type Mutation{
		addAdmin(input: AdminInput): Admin		
	}
	`;

const resolvers = {
	Query: {
		async getUsers(obj){
			const users = await User.find();
			return users;
			}
     	},
	Mutation: {
		async addUser(obj, { input }){
			const user = new User(input);
			await user.save();
			return user;
		},
		async addAdmin(obj, { input }){
			const admin = new Admin(input);
			await admin.save();
			return admin;
		},
	}
}

let apolloServer = null;

const corsOptions = {
	origin: "http://localhost:8090",
	credentials: false
};

async function startServer(){
	const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
	await apolloServer.start();
	apolloServer.applyMiddleware({app, cors: false});
}

startServer();

const app = express();

app.use(cors());
app.listen(8090, function(){
	console.log("Servidor iniciado");
})
