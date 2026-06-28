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