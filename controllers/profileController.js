// controllers/profileController.js
const axios = require("axios");

exports.getProfile = async (req, res) => {
  try {
    
    const response = await axios.get(process.env.CATFACT_API_URL, {
      timeout: 5000,
    });
    const catFact = response.data.fact;


    const data = {
      status: "success",
      user: {
        email: "orikuolarotimi12345@gmail.com", 
        name: "Olarotimi Oriku", 
        stack: "Node.js/Express", 
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);  
    let statusCode;
    let message;

    if (error.code === "ECONNABORTED") {
      statusCode = 504;
      message = "Cat fact API request timed out. Please try again.";
    } 
    
    else if (error.response) {
      statusCode = error.response.status;
      message = error.response.data?.message || "Cat fact API returned an error.";
    }

    const errorResponse = {
      status: "error",
      message,
      timestamp: new Date().toISOString(),
    };

    return res
      .status(statusCode)
      .set("Content-Type", "application/json")
      .json(errorResponse);
  }
};
