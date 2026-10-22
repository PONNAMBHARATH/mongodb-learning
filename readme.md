# MongoDB Learning – Queries & CRUD Operations

A hands-on MongoDB learning repository covering fundamental database concepts, CRUD operations, query operators, filtering, sorting, pagination, and aggregation using MongoDB Atlas.

## Overview

This repository contains practical MongoDB queries and examples to understand how to store, retrieve, update, delete, and analyze documents in a NoSQL database. It also explores executing queries directly through the MongoDB interface.

## Topics Covered

- **MongoDB Fundamentals** – Databases, collections, documents, fields, and ObjectId.
- **CRUD Operations** – `insertOne()`, `insertMany()`, `find()`, `findOne()`, `updateOne()`, `updateMany()`, `deleteOne()`, and `deleteMany()`.
- **Query Operators** – `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$or`, and `$and`.
- **Projection** – Retrieve only the required fields.
- **Sorting & Pagination** – `sort()`, `limit()`, and `skip()`.
- **Counting & Distinct Values** – `countDocuments()` and `distinct()`.
- **Update Operators** – `$set` and `$inc`.
- **Aggregation Pipeline** – `$match`, `$group`, `$avg`, `$sum`, and `$sort`.
- **MongoDB Atlas** – Cloud database setup and querying.

## Technology Stack

- MongoDB Atlas
- Node.js
- Express.js
- MongoDB Node.js Driver
- Postman

## Sample Use Cases

- Student management system
- Filtering students based on marks, age, and course
- Updating student records
- Retrieving unique course values
- Calculating average marks and student counts using aggregation

## Learning Goals

- Understand document-oriented NoSQL databases.
- Practice MongoDB query syntax.
- Integrate MongoDB with Node.js applications.
- Build a foundation for developing database-driven REST APIs.

## Getting Started

1. Create a free MongoDB Atlas account.
2. Set up a database deployment and configure database access.
3. Configure the MongoDB connection string using environment variables.
4. Run the sample queries in MongoDB Atlas or MongoDB Shell.
5. Use Node.js and Express to perform CRUD operations through REST APIs.

**Note:** This is a learning project intended for practice and experimentation. Never commit database credentials or secrets to version control.

**env format**

MONGODB_URI=
DB_NAME=
PORT=3000