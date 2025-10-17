
This is a simple Node.js and Express application that fetches random cat facts from an external API and returns the response as JSON.  
It includes proper error handling, environment variables, CORS configuration, and rate limiting.

---

## 📥 Clone the Repository

```bash
git clone https://github.com/orikuOlarotimi/HNG-Internship.git
cd HNG-Internship
📦 Install Dependencies
bash
Copy code
npm install
⚙️ Environment Variables
Create a .env file in the project root with the following:

env
Copy code
PORT=5000
CAT_FACT_API=https://catfact.ninja/fact
ALLOWED_ORIGIN=*
Explanation:

PORT → Port number the server will run on (default is 5000)

CAT_FACT_API → Base URL for the Cat Facts API

ALLOWED_ORIGIN → Origin allowed for CORS (default is *)

▶️ Run the Server
bash
Copy code
npm start
Your server should now be running on:
👉 http://localhost:5000

📡 API Endpoints
Method	Endpoint	Description
GET	/	Returns a welcome message
GET	/api/profile	Fetches a random cat fact and returns JSON

✅ Response example:

json
Copy code
{
  "status": "success",
  "user": {
    "email": "orikuolarotimi12345@gmail.com",
    "name": "Olarotimi Oriku",
    "stack": "Node.js/Express"
  },
  "fact": "Cats have five toes on their front paws, but only four toes on their back paws.",
  "timestamp": "2025-10-16T19:00:00.000Z"
}
❌ Error Handling
Timeout Error: Returns 504 with a timeout message.

API Error: Returns the error from the Cat Facts API with the proper HTTP code.

Example:

json
Copy code
{
  "status": "error",
  "message": "Request timed out. Please try again later."
}
🧰 Dependencies
express

axios

cors

dotenv

express-rate-limit

🚀 Deployment
This project can be deployed on Railway, Render, or Vercel.

Railway Deployment Steps:

Push your code to GitHub.

Create a new project on Railway.

Connect your GitHub repo.

Add the .env variables in Railway settings.

Deploy 🚀

👨🏽‍💻 Author
GitHub: orikuOlarotimi

Project Repo: HNG-Internship