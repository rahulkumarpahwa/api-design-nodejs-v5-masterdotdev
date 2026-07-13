1. What is the primary purpose of JavaScript in a browser?
1. To manipulate the DOM, handle UI interactions, and make HTTP calls

2. What is the global object in a browser's JavaScript environment?
2. The window object

3. What is the primary purpose of Node.js?
3. To build servers, access file systems, and perform system-level operations

4. What is the global object in Node.js?
4. An object literally called 'global', which provides APIs for file systems, networking, process management, and cryptography

5. List the different types of backend services mentioned in the transcription
5. Long-lived servers
Serverless functions
Edge functions
Background jobs
Cron jobs

6. What is the purpose of creating a /health route in an Express server?
6. A /health route is a common convention used to check if a server is still running and operational, typically pinged at intervals to ensure the server's availability and responsiveness

7. What does the abbreviation 'ESM' stand for in the context of module imports?
7. ESM stands for ECMAScript Modules, a standard way of importing and exporting modules in modern JavaScript and TypeScript

8. What is an HTTP verb in the context of server routing?
8. An HTTP verb is an action or type of request indicating the desired operation to be performed on a server, such as GET, POST, PUT, DELETE, etc.

9. What is the typical convention for naming the Express application instance?
9. The typical convention is to name the Express application instance 'app', though it can technically be named anything

10. What is the purpose of a src or source directory in a project?
10. A src directory contains the raw source files that will be written for a project, serving as an organizational convention for storing original code files

11. What is the primary function of Postman?
11. Postman allows users to visually test APIs by sending different types of requests and viewing responses

12. What types of data can a server send back over a network?
12. A server can send parsable data like JSON, HTML, strings, files, but cannot send executable logic or cyclic objects directly

13. What is the meaning of localhost in a URL?
13. Localhost represents the IP address 127.0.0.1, which refers to the current device running the server

14. What network transmission restrictions exist when sending data?
14. You cannot send executable logic, cyclic objects, or directly executable code over the network; data must be convertible to a string or file

15. What does a typical API endpoint request look like?
15. A typical API endpoint request includes a HTTP verb (like GET), a specific route (like /health), and potentially additional parameters or data

16. What is an environment variable?
16. A variable injected into the environment that allows dynamic configuration and options within a server without changing the code, useful for managing secrets and reusing codebases across different environments

17. What problem do environment variables solve when managing application configurations?
17. They allow dynamic value changes without hard-coding variables, making it easier to manage different settings for staging, production, and local development environments

18. How do environment variables impact code deployment and configuration management?
18. They enable changing configuration values without modifying code, typically requiring only a server restart to apply new settings

19. What is a potential problem with environment variables?
19. They are not typed, and it's difficult to know which ones exist without checking the .env file or consulting an experienced team member

20. Why create multiple .env files like .env, .env.example, and .env.test?
20. To separate environment configurations, keep secrets out of version control, and provide example variable names for team members while allowing different configurations for testing

21. How are environment variables traditionally accessed in Node.js?
21. By using process.env.[variable name], which does not provide type checking

22. What is Zod used for in the context of environment variables?
22. Zod provides runtime type-checking and schema validation, allowing verification of environment variable types and presence at runtime

23. What are the benefits of creating a custom environment variable handling approach?
23. To get type-checked environment variables, autocomplete, guarantees that required variables are present, and ability to set defaults for optional variables

24. What is an enum in Zod schema, and what are the typical values for NODE_ENV?
24. An enum represents a select set of options. For NODE_ENV, the typical values are development, test, and production.

25. Why is the coerce method used when defining environment variables in Zod?
25. Environment variables are always strings, so coerce is used to convert them to the desired type (like a number) that the application expects.

26. What protocol prefix indicates a PostgreSQL database URL?
26. 'postgres://' is the protocol prefix that indicates a PostgreSQL database URL.

27. What is the recommended minimum length for a JWT_SECRET?
27. The JWT_SECRET should be a string with a minimum of 32 characters.

28. What range is recommended for BCRYPT_ROUNDS when hashing passwords?
28. BCRYPT_ROUNDS should be a number with a minimum of 10 and a maximum of 20.

29. What is the primary recommendation for handling .env files in a project?
29. Never commit .env files to GitHub to protect sensitive information and secrets

30. What are the benefits of setting up an .env file for configuration?
30. Provides a tidy and predictable environment, ensures required environment variables are set, and helps catch errors when starting the server

31. What is a strategy for managing secrets and sensitive configuration values?
31. Rotate secrets periodically, use secrets management tools like HashiCorp Vault, and avoid hardcoding sensitive information

32. How can environment variables be made more flexible across different deployment stages?
32. Make environment variables optional or non-optional based on the current environment (e.g., production vs development), and set different defaults or validation rules

33. What is the purpose of a secrets management tool like HashiCorp Vault?
33. To centralize and securely manage environment variables and secrets across different environments, providing a single SDK or URL to load configuration without exposing individual values

34. What are the five main HTTP methods discussed in the explanation?
34. GET (retrieve data), POST (create something), PUT (replace entire resource), PATCH (partially update resource), and DELETE (remove resource)

35. What does CRUD stand for in the context of API routes?
35. Create, Read, Update, and Delete - representing the four primary actions that can be performed on a resource

36. What is the primary purpose of a GET request?
36. To retrieve data from a server, typically returning HTML or JSON, with the intent of getting something from the server

37. What is the key difference between a PUT and a PATCH request?
37. A PUT request replaces an entire resource, changing nearly everything except the ID, while a PATCH request partially updates specific fields of a resource

38. What is the main goal of HTTP methods in an API?
38. To help other systems and clients understand the intent of the request, and allow software to make assumptions about how to handle different types of requests

39. What HTTP status code is returned when a route is not registered in Express?
39. 404 found 

40. What do HTTP status codes in the 400 range typically indicate?
40. The client's request is incorrect or invalid

41. What happens when a server route handler does not send a response?
41. The server will hang and eventually timeout

42. What do HTTP status codes in the 200 range typically represent?
42. Successful requests

43. What do HTTP status codes in the 500 range typically indicate?
43. Server-side errors or issues

44. What are sub-routers in Express, and how are they typically organized?
44. Sub-routers are individual routers for specific resources that can be mounted onto a top-level router. They are typically created by importing the Router from Express and are organized by resource type (e.g., User Routes, Habit Routes).

45. What are the typical CRUD routes for a Habit resource?
45. The typical CRUD routes for a Habit resource include: GET / (get all habits), GET /:id (get a single habit), POST / (create a habit), DELETE /:id (delete a habit), and potentially custom routes like POST /complete/:id.

46. What HTTP status codes are most commonly used for successful responses?
46. 200 and 201 are the most commonly used status codes for successful responses. Status 201 technically means a successful post request, while 200 is a general success status.

47. What is required to import a module in JavaScript?
47. To import a module, it must first be exported. A module is essentially a closure, and exporting allows other parts of the application to access it.

48. How do developers typically handle error status codes?
48. Developers tend to be more precise with 400-series error codes since they are user-facing, while most successful routes default to a 200 status code.

49. What HTTP method is used to get all users?
49. GET method is used to retrieve all users

50. What HTTP method is used to create a new user in an admin context?
50. POST method is used to create a new user, typically restricted to admin dashboard access

51. What HTTP method is used to update user details?
51. PUT method is used to update existing user details

52. What HTTP method is used to remove a user from the system?
52. DELETE method is used to delete a user

53. What is the standard HTTP status code returned when successfully retrieving all users?
53. Status code 200 is typically used when successfully retrieving all users

54. What does app.use() do when mounting routes in Express?
54. It allows you to specify a base route path for a group of routes, so routes can be decoupled and easily relocated without changing internal route definitions

55. Why do you need to include file extensions when importing modules in Node with ES modules?
55. Node requires explicit file extensions when using ES modules; without the extension, the module will not import correctly

56. What is the difference between HTTP verbs and the .use() method in Express?
56. HTTP verbs are specific methods (GET, POST, etc.) tied to particular actions, while .use() handles all HTTP methods for a given route regardless of the specific verb

57. How do subroutes work in Express routing?
57. Subroutes allow you to mount routes under a specific base path, so a route like /register under /api/auth would become /api/auth/register

58. What does Express actually enforce regarding HTTP methods and responses?
58. Express only cares that you send back a response or throw an error; it does not enforce REST conventions or the intended purpose of specific HTTP methods

59. What potential issue can arise when creating deeply nested routers?
59. Route collisions can occur, where routes registered first will take precedence, which can be difficult to debug in a sprawling router configuration

60. How can routes be conditionally created in a web application?
60. Routes can be conditionally added based on environment modes (like dev mode), feature flags set by environment variables, or specific conditions like A/B testing scenarios

61. What is the purpose of a /health endpoint in web services?
61. It allows monitoring tools to ping the service repeatedly, checking if the application is up, measuring response times, and detecting potential performance issues or service degradation

62. What are different approaches to organizing routes in a web application?
62. Routes can be organized by resource (users, authentication, habits), feature-based approach, by versions, or co-located in separate folders with their associated components like routes, tests, handlers, and database queries

63. What special routing configuration is typically required for Single Page Applications (SPAs)?
63. Servers need to always return the index.html file, allowing client-side routing to handle navigation, which platforms like Netlify can handle automatically

64. What is the fundamental definition of Middleware?
64. Middleware is code that sits between two other pieces of code, typically a set of functions that can be run in a specific order, which can inspect, modify, or short-circuit a request/response.

65. What unique capabilities does Middleware have in an API context?
65. Middleware can access request and response objects, inspect and modify requests, potentially respond before a handler, and can short-circuit a request using the response object.

66. What critical constraint exists when responding to an HTTP request?
66. A request can only be responded to once. After a response is sent, the connection is closed, and additional attempts to respond will result in errors.

67. How does JSON method sending differ from manual JSON transmission?
67. JSON methods automatically stringify data, add appropriate headers, and set content-type to 'application/json', which is equivalent to manually stringifying JSON and setting headers.

68. What potential issue must developers be cautious of when using Middleware?
68. Developers must protect handlers from executing if Middleware has already responded to prevent serious routing and response issues.

69. What is an Edge Function in the context of middleware?
69. An Edge Function is a middleware that runs on a Content Delivery Network (CDN) before the request reaches the origin server, allowing for tasks like redirecting routes or modifying content before the main server is initiated.

70. What is a common use case for HTTP interceptors in frontend middleware?
70. Common use cases include automatically adding authentication tokens to every request without repeating code, and handling response scenarios like redirecting on a 401 unauthorized error.

71. What is the key difference between middleware and a standard handler in Express.js?
71. The key difference is the third argument next, which allows middleware functions to pass control to the next middleware in the stack by calling next().

72. What happens if you call next() in a middleware function that has already sent a response?
72. It doesn't make sense to continue through the request cycle after sending a response. If a response is sent, you should not call next().

73. How are middleware functions executed in Express.js?
73. Middleware functions are called in the order they are registered, from left to right. Calling next() moves to the next middleware in the stack, and if no middleware remains, it proceeds to the route handler.

74. What are the two primary scenarios for calling next() in middleware?
74. Checking or enhancing the request object without determining middleware flow, such as logging analytics. 2. Performing a 'Go/No-Go' check where next() is called based on a condition like authorization or access control.

75. What happens if middleware does not call next(), respond, or throw an error?
75. The request will hang indefinitely because the system won't know what to do. The middleware will wait without progressing or completing the request.

76. What does passing an argument to next() signify in Express middleware?
76. Passing any argument to next() is assumed to be an error. This tells Express to skip subsequent middleware and go directly to the error handler middleware.

77. What is the recommended practice when responding inside middleware?
77. Always call return after responding, unless it's the last line of code. This prevents subsequent code from running after the response has been sent.

78. What must a middleware function do to continue request processing?
78. A middleware function must either: call next() to continue to the next middleware, send a response using methods like res.json() or res.send(), or throw an error.

79. What does CORS stand for and what is its primary purpose?
79. CORS stands for Cross-Origin Resource Sharing, and its primary purpose is to protect users by preventing scripts on a website from accessing resources from a different origin without permission in web browsers.

80. What typically happens during a CORS preflight check?
80. During a CORS preflight check, the browser sends an OPTIONS request to the server, providing details about the origin attempting to access a URL and its headers. The server then responds with allowed headers and origins.

81. Why would a middleware like Helmet be useful in an Express application?
81. Helmet is a collection of security best practices for servers that sets appropriate headers to protect against common web application attacks.

82. What are the purposes of Express.json() and Express.urlencoded() middleware?
82. Express.json() ensures that request payloads can be accessed as objects, while Express.urlencoded() helps handle URL-encoded query strings in HTTP requests.

83. In which environments do CORS checks typically occur?
83. CORS checks only occur in web browsers. API calls made from non-browser environments like terminals or Postman will not trigger CORS restrictions.

84. What is the main purpose of input validation in an API?
84. To protect against invalid inputs, prevent manual if-checks in handlers, and ensure that data meets expected criteria before processing

85. What library is used in this example for schema validation?
85. Zod, which allows defining schemas and parsing inputs against those schemas

86. What are the three main arguments passed to a middleware function in Express?
86. request, response, and next function

87. Why might you reassign the validated data back to the request body after parsing?
87. To capture potential defaults or coercions that the schema might apply, ensuring the body reflects the expected modifications

88. What status code is typically returned when input validation fails?
88. 400 (Bad Request), with a JSON object explaining the validation errors

89. What is always true about URL parameters in web requests?
89. Parameters in a URL are always strings, regardless of what data type they represent

90. What is a recommended approach to handling database IDs to minimize string parsing?
90. Using UUIDs instead of incremental IDs to avoid parsing strings to numbers in URLs

91. What does query represent in web requests?
91. An object containing key-value pairs of query variables

92. Why might parameter validation seem redundant with Express?
92. While Express guarantees a parameter's presence and string type, custom validation allows for additional checks like minimum or maximum length

93. What is the potential issue with using next() inside a route handler?
93. Using next() in a handler typically indicates that the route is not properly structured, and there is likely a better way to handle the logic

NOTE: Starting with Express 5, route handlers and middleware that return a Promise will call next(value) automatically when they reject or throw an error.

94. What is a common pitfall when working with Middleware in Express-like frameworks?
94. Forgetting to call 'next()' will cause the middleware chain to hang, and incorrect middleware order (such as trying to parse JSON before body parsing) can prevent accessing request body properties

95. What is a recommended practice when responding in a middleware function?
95. If you are going to respond, put a return statement in front of the response to prevent further code execution, and avoid calling 'next()' after sending a response

96. What problem does a Middleware factory solve?
96. A Middleware factory allows wrapping middleware in a promise and automatically handling errors, eliminating the need to write repetitive try-catch error handling logic in each middleware function

97. What happens if you attempt to send headers or respond multiple times in a middleware function?
97. Technically, you cannot send headers more than once, and attempting to do so will result in an error

98. What is a potential issue with running background work after responding to a request?
98. Running background work after responding can create race conditions, lose error handling capabilities, and make tracking completion difficult, so it should only be done for simple tasks like logging or analytics

99. What defines a relational database according to the concept discussed?
99. A relational database is a database with fixed columns, where data have dependencies on each other, particularly around ownership models. Tables represent collections of objects, with unique keys and indexes showing relationships between data.

100. What are the key components of a relational database schema?
100. The key components are tables (collections of objects), rows (individual objects), columns (fields on objects), Primary Keys (unique identifiers), and Foreign Keys (references to relationships between tables).

101. What are the types of relationships in a relational database?
101. The types of relationships are one-to-one, one-to-many, and many-to-many. These define how different data entities are connected and interact with each other in the database schema.

102. How does domain-driven development approach data modeling?
102. Domain-driven development focuses on critical user journeys, breaking down an application into different user experiences with a defined start and end. It identifies the data needed to complete each journey and how those data relate to each other.

103. What is a Foreign Key in a relational database?
103. A Foreign Key is a key from another table that references a relationship between tables. For example, in a one-to-one relationship like a person with one house, the Foreign Key can be placed on either the user's table or the home table.
 
104. What is an ORM in the context of database interactions?
104.  An ORM (Object-Relational Mapping) is essentially an SDK for a database that provides an abstraction layer for interacting with databases, offering type-safe and easy-to-use functions without needing to write low-level SQL queries directly.

105. What unique features does PostgreSQL offer for database management?
105. PostgreSQL supports multiple advanced features including JSON arrays, custom data types, full-text search, geospatial search (GIS), complex query handling, and is open-source with extensive ecosystem support.

106. What are the primary advantages of using an ORM?
106. ORMs provide type safety, help prevent SQL injection, simplify database interactions, abstract away complex SQL queries, and offer easy-to-use functions for database operations without requiring deep SQL expertise.

107. How do ORMs improve database interactions compared to raw SQL?
107. ORMs provide a higher-level abstraction that allows developers to interact with databases using programming language constructs, offering type safety, easier query management, and reducing the need to write low-level SQL queries manually.

108. Why are ORMs considered beneficial for database management?
108. ORMs simplify database interactions by providing an SDK-like interface, offering type safety, preventing common issues like SQL injection, and allowing developers to work with databases without needing extensive SQL knowledge.

109. What are migrations in the context of databases?
109. Migrations are a method of version control for databases that allow changing the database schema and data structure while maintaining compatibility with existing data, essentially acting as a contract for how data is stored and transformed.

110. What is the difference between destructive and non-destructive database changes?
110. Non-destructive changes include adding an optional field, while destructive changes involve renaming or deleting fields. Non-destructive changes are preferred as they cause minimal disruption and complexity in migrations.

111. What are the two primary types of migrations in database management?
111. Schema migrations involve changing the structure of database objects like tables, columns, and indexes. Data migrations involve transforming existing data to match a new schema structure when changes affect the data itself.

112. What are the typical steps in a database migration workflow?
112. Make schema changes in code, 2. Create migration files, 3. Inspect and review the migration plan, 4. Run migrations against the database, 5. Test outside of production before deploying

113. Why are migrations crucial in maintaining database integrity?
113. Migrations prevent inconsistencies between database versions and application expectations, ensuring that code does not break when database structures change and allowing controlled, systematic updates to database schemas and data.

114. What is the purpose of a unique index in a database schema?
114. A unique index allows quick data retrieval and ensures that no two records have the same value in the indexed column, preventing duplicate entries like emails. It helps locate data quickly in constant time without scanning the entire table.

115. What is the primary purpose of using UUID as a primary key?
115. UUID (Universally Unique Identifier) serves as a unique, randomly generated identifier for database records, providing a globally unique value that can be generated without potential conflicts across different systems or databases.

116. What are the typical considerations when defining a VARCHAR column in a database schema?
116. When defining a VARCHAR column, key considerations include setting a maximum length constraint, specifying nullability (such as not null), and potentially adding unique constraints. VARCHAR allows text storage with a specified maximum character length.

117. How does a foreign key relationship work in a database schema?
117. A foreign key creates a link between two tables by referencing the primary key of another table, establishing a relationship. In this schema, it allows actions like cascade delete and enables querying related entities across different tables.

118. What is the benefit of using a join table for managing many-to-many relationships?
118. A join table allows flexible and normalized data storage by creating connections between two entities, enabling bidirectional querying. It helps manage complex relationships by storing links between related tables without directly embedding foreign keys.

119. In Drizzle ORM, how can you define a one-to-many relationship between users and habits?
119. Use the relations helper method, specify 'many' for habits, and return an object defining the relationship. For example: { habits: relations.many(habits) } which allows querying a user's habits

120. What are the fields used to link a habit to a user in a database relationship?
120. habits.user_id references users.id, creating a one-to-many relationship where each habit belongs to one user

121. How does Drizzle ORM handle the many-to-many relationship between habits and tags?
121. Through a joint table (habit_tags) that allows connecting a single habit to a single tag, using habit_tags.habit_id referencing habits.id and habit_tags.tag_id referencing tags.id

122. What types of relationships can a habit have in this database schema?
122. A habit can have: one user (many-to-one), many entries (one-to-many), and many tags (many-to-many)

123. What is the purpose of creating a new 'user' field on the habits table?
123. To allow direct access to the user object associated with a habit, beyond just having a user_id foreign key

124. What is the purpose of using type of with Drizzle schema's infer select?
124. To create a TypeScript type with the same fields as a database table, which can be used throughout the application for type inference and consistency

125. What is the difference between an insert user schema and a select user schema?
125. An insert user schema defines the required fields for creating a new user, while a select user schema represents the fields returned when querying a user, which typically includes additional metadata like ID, created at, and updated at

126. What libraries are being imported for schema and type generation?
126. Drizzle for creating insert and select schemas, and Zod for runtime validation of input schemas

127. What are the minimum required fields for creating a user according to the described schema?
127. An email (unique), a username (unique), and a password

128. What are the benefits of using runtime schema validation?
128. To ensure that input objects follow the database schema, validate data at runtime in addition to TypeScript type checking, and enforce data integrity before database insertion

129. What are two recommended best practices for database schema design?
129. Always add timestamps for tracking creation and modification times, 2. Enforce constraints at the database level such as unique, not null, and foreign keys

130. What is normalization in database schema design?
130. Normalization involves choosing where to place foreign keys based on query patterns, optimizing the schema for the most frequent querying side while avoiding excessive backend logic refactoring

131. When should database schemas be used for validation?
131. Use schema validation when all fields satisfying the schema's constraints will be supplied by the user. Do not use schema validation for fields automatically provided by the system

132. What is the recommended approach for handling destructive schema changes?
132. Make changes additively: first add the new field, get it into production, then gradually migrate data and stop using the old field

133. What are the benefits of using enums in database schema design?
133. Enums restrict values to a predefined set, provide normalization, and make it easier for frontend developers to understand expected input values

134. What is the purpose of database connection pooling?
134. To reuse database connections across requests, reducing computational expense of creating new connections each time and managing the limited number of connections a database can handle

135. What potential issue can occur with connection pooling during development with Node watch?
135. Memory leaks can occur when the server restarts, leaving previous pool connections open, which can eventually lead to reaching the connection limit

136. What is Neon in the context of this discussion?
136. A company that provides hosted, managed Postgres databases with a product called Launchpad that allows creating free databases quickly

137. What steps are needed to set up a database connection using Drizzle ORM?
137. Create a pool using pg, use a singleton pattern for development, create a database client with Drizzle ORM, pass in the connection client and database schema

138. What libraries are typically imported when setting up a database connection with Drizzle ORM?
138. Import Drizzle from drizzle-orm/node-postgres, pool from pg, database schema, environment variables, and utility helpers like isProd and Remember

139. What does the 'db:push' script do in the context of database management?
139. It pushes the current schema directly to the database without caring about existing data, similar to pushing directly to main in Git. It's recommended for development but not for production environments.

140. What is the purpose of the 'db:generate' script in Drizzle Kit?
140. The 'db:generate' script creates SQL files for migrations, allowing you to prepare and track database schema changes over time.

141. What functionality does the 'db:studio' command provide?
141. The 'db:studio' command starts Drizzle's web app, a visual database explorer that allows you to visualize your database, view data, add data, run raw SQL, and interact with your database schema.

142. What is the difference between 'db:push' and 'db:migrate'?
142. 'db:push' directly applies schema changes to the database without careful data merging, while 'db:migrate' carefully runs saved migrations, typically used for production databases to ensure data integrity.

143. What is the purpose of the 'db:seed' script?
143. The 'db:seed' script runs a file that populates the database with initial or test data, helping to set up a consistent starting state for the database.

144. What is a seed script in the context of database management?
144. A seed script is a way of populating a database with data for various purposes such as testing features, developing front-end interfaces, or simulating data scenarios using fake or curated data.

145. What are three common methods for seeding a database?
145. Using fake data generation tools like Faker.js, 2. Hand-creating or hand-selecting data, 3. Importing production or staging database dumps

146. What is a critical precaution when running a seed script?
146. Never run a seed script on a production database, and avoid storing production database credentials locally on your computer

147. What is typically the first step in a seed script?
147. Clearing all existing data from the database tables to ensure a clean slate for seeding new data

148. How can a seed script be executed?
148. A seed script can be run directly from the terminal or imported and called programmatically in other code, using Node.js module detection to determine its execution context

149. What is the purpose of the check with ARGV at the end of a seeding script?
149. To prevent the script from automatically running when imported into another file, allowing programmatic execution from the terminal while avoiding unintended automatic runs

150. What are some recommended approaches for managing seed data in a project?
150. Options include using a seed folder with scenario-specific files, generating fake data with tools like Faker, using JSON files, exporting/importing from databases, or creating branches of production databases with existing data

151. What potential issue can occur when making schema changes in a database?
151. Destructive changes like renaming a required field can cause problems. In production, migrations should be generated and carefully applied to avoid data loss

152. What is the recommended workflow for database schema changes during development?
152. Use DB Push to test changes continuously, and once a feature is complete and ready for a pull request, generate a single migration file instead of creating multiple migration files for every small change

153. What considerations are important when seeding data for testing specific scenarios?
153. Create targeted seed data that mimics specific use cases, such as seeding a database with one user having 30 habits to test UI features like pagination

154. What are the three key components of user access management in an API?
154. Identification (who you are), Authentication (proving access rights), and Authorization (determining specific allowed actions)

155. What is the purpose of Role-Based Access Control (RBAC)?
155. To define roles with specific permissions, specifying exactly what actions and resources each role can access, such as member, owner, admin, or teammate

156. What are the main differences between session-based and JWT authentication?
156. Session-based authentication stores state server-side and tracks logins across devices, while JWT is stateless with tokens stored on the client and requires token verification on each request

157. What is the primary difference between authentication and authorization?
157. Authentication proves access rights to an API (e.g., matching email and password), while authorization determines specific actions an authenticated user is allowed to perform

158. What are some common methods of authentication?
158. Passwords, token-based methods, multi-factor authentication (MFA), API keys, and JSON Web Tokens (JWT)

159. What are the key steps in the bcrypt password hashing process?
159. Take the password
Generate a random salt
Combine the password with the salt
Apply an encryption algorithm (like blowfish)
Repeat the hashing process multiple times (typically 10-12 rounds)

160. Why should passwords not be stored in plain text?
160. To protect against potential data breaches and ensure that even engineers cannot see the original password value. Hashing obfuscates the password and provides a layer of security.

161. What is the primary strategy for user sign-up?
161. Validate user input based on database schema requirements, check that unique elements are not already taken (using unique indexes), hash passwords, and generate a JSON Web Token for API access.

162. What is the goal of password hashing?
162. To create a strong, reproducible hash that is computationally difficult to reverse but consistent when using the same inputs, while ensuring the ability to verify user credentials during sign-in.

163. How should unique constraints like email uniqueness be handled during user sign-up?
163. Use database unique indexes instead of manually querying to check for existing entries, which would be inefficient for large user databases.

164. What is the purpose of creating a controllers folder in an Express application?
164. Controllers (or handlers) contain the functions that are executed when specific routes are accessed, defining the logic for handling HTTP requests and responses

165. What two primary imports are needed for creating an Express route handler function?
165. Express request and response types, which allow type checking and proper handling of HTTP request and response objects

166. Why is it important to make password hashing an async function?
166. To prevent timing attacks, where attackers might measure hashing time to gain insights about the password or system

167. What are the typical HTTP status codes used for handling registration errors?
167. 500 status code for system-level errors, and 400 status code for user-related errors like duplicate email registrations

168. What is the primary benefit of implementing middleware and validation checks before a controller function?
168. It allows the controller to make assumptions and simplifies code by reducing the need for extensive validation if-statements within the controller function

169. What is a JSON Web Token (JWT) fundamentally?
169. A JSON Web Token is an object converted to a string based on an algorithm, which can be encoded and later decoded back to the original object, typically used for securely transmitting information between parties

170. What unique user attributes are recommended to include in a JWT payload?
170. Recommended unique user attributes include user ID, email, and username - identifiers that help safely identify the user without including sensitive information like passwords

171. Why is setting an expiration time important for JSON Web Tokens?
171. Setting an expiration time prevents tokens from living forever, which reduces the risk of unauthorized access if a token is compromised

172. What cryptographic algorithm is typically used by default for signing JWTs?
172. HS256 (HMAC with SHA-256) is the default algorithm used for signing JSON Web Tokens

173. What types of sensitive information should NOT be included in a JWT payload?
173. Sensitive information like passwords and credit card numbers should not be included in a JWT payload to maintain security

174. What is Zod used for in input validation?
174. Zod allows runtime validation with more granular checks like regex password validation and email format verification, which are too inefficient to perform at the database level

175. How can Zod schemas be created for database validation?
175. Zod schemas can be created directly from database schemas using tools like Drizzle, or can be custom-built with additional validation checks

176. What is a refresh token in authentication?
176. A refresh token is a JSON Web Token without an expiration date that can be used to generate a new authentication token when the original token expires, providing a seamless login experience

177. Why is runtime validation important for user registration?
177. Runtime validation ensures data integrity by checking input requirements like presence of email, username, password, and can perform additional checks like format validation before database insertion

178. What validation errors are returned when registering a user?
178. Validation errors include missing required fields like email, username, and password, which can be directly displayed to users in form validation feedback

179. What method from Drizzle ORM can be used to find a user by email?
179. The eq function can be used with find first method to find a user by email

180. Why is it recommended to respond with 'invalid credentials' instead of specifying whether an email exists?
180. To prevent potential attackers from gathering information about existing accounts and reduce the risk of identity theft

181. What tool can be used for input validation in the sign-in process?
181. Zod can be used to validate email and password inputs, with optional validation for email format and password complexity

182. How should user data be handled when sending a response after successful login?
182. Create a new object that does not include the hashed password to prevent sending sensitive information

183. What approach is recommended for handling login errors?
183. Most errors in the login flow would be considered server errors (500 status), such as database query failures, password comparison issues, or token generation problems

184. What is the bearer token pattern in HTTP authentication?
184. A pattern where a JSON Web Token is attached to the Authorization header, with the value being the word 'bearer' followed by the token, which allows the server to verify and authenticate each request

185. What is the purpose of HTTP headers?
185. Headers are key-value metadata objects that provide additional information about a request, such as origin, caching strategies, authorization credentials, and custom information

186. How does token verification work in JWT authentication?
186. Token verification checks that the token is not expired, was signed with the same secret key, and decodes the token back into its original payload object containing user information like ID, email, and username

187. What environment variable is used for JWT secret key?
187. JWT_SECRET is the environment variable used to store the secret key for signing and verifying JSON Web Tokens

188. What encoding is typically used when working with JWT secret keys?
188. UTF-8 encoding is typically used when handling JWT secret keys

189. What is the purpose of creating an AuthenticatedRequest interface in TypeScript?
189. To extend the Express request object and allow attaching a user property, enabling type-safe access to authenticated user information in controllers

190. What are the key steps in the authentication middleware token verification strategy?
190. Check Authorization header for bearer token, 2. Extract JWT token, 3. Verify token, 4. Attach user to request if verified, 5. Call next(), 6. Deny access if verification fails

191. How does the middleware handle scenarios where no authentication token is present?
191. It returns a bad request status, indicating the client did not provide authentication

192. What status code is returned when token verification fails?
192. 403 Forbidden status

193. How is the bearer token extracted from the Authorization header?
193. By splitting the header value, since bearer tokens are typically formatted as 'Bearer [token]'

194. Why can't authentication middleware be applied globally in a web application?
194. Applying authentication middleware globally would block all routes, including public routes like sign-up, which should remain accessible to everyone

195. What are the two extra headers added when signing a JWT token?
195. 'iat' (initialized at) and 'exp' (expires), which can be used to check token expiration or invalidate tokens during a security breach

196. Why is authentication necessary for routes related to habits and users?
196. Habits belong to specific users, and without authentication, it would be impossible to associate habits with the correct user and prevent unauthorized access to all database entries

197. How can authentication be added to routes in a web application?
197. Authentication can be added by either putting middleware on each route or adding authentication at the router level using methods like router.use with an authenticate token middleware

198. What status code is returned when a request is made without proper authentication?
198. A 401 unauthorized status code is returned when a request is made without proper authentication

Note: Express.js v5 automatically intercepts errors thrown in async functions and forwards them to the error handling middleware, so writing try-catch just to call next(error) is no longer necessary.

199. What are two approaches to handling authentication middleware at different levels of routing?
199. Router-level middleware (protecting entire router subtree) and route-level middleware (protecting individual routes), with router-level being more clean and consistent

200. List three security best practices when handling authentication tokens
200. Never log tokens, 2) Use HTTPS in production, 3) Set reasonable token expiration dates, 4) Validate authentication on every request, 5) Do not cache authentication state

201. What potential issue can arise when creating an allow list of routes in middleware?
201. Route references might exist in multiple places, which can cause maintenance problems if route names change. This can be mitigated by using constants for route names.

202. What prefix is important to remember when sending authentication tokens?
202. The 'Bearer' prefix should be included with tokens

203. After authentication middleware, what becomes available in request objects?
203. req.user becomes available, allowing safe methods for retrieving user-specific data

204. What do HTTP status codes in the 200 range typically represent
204. HTTP status codes in the 200 range represent successful responses

205. What does a 404 HTTP status code typically indicate?
205. The requested resource or route does not exist

206. What HTTP status codes are frequently used for client errors?
206. Status codes in the 400 range, such as 400 (invalid input), 401 (authentication missing), 403 (unauthorized), and 404 (resource not found)

207. What does a 500 HTTP status code represent?
207. A server crash or internal server error

208. What does a 503 HTTP status code typically indicate?
208. The server is intentionally shut down, often due to issues like a problematic migration