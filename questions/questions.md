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