import jwt from "jsonwebtoken";

// ✅ Middleware to verify student token
export async function verifyToken_student(request, response, next) {
  try {
    const authHeader = request.get("Authorization"); // get token from header

    if (!authHeader) {
      return response.status(401).send({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1]; // extract token after "Bearer"

    jwt.verify(token, "StudentSystem12", (error, payload) => {
      if (error) {
        console.error(error);
        return response.status(401).send({ message: "Invalid or expired token" });
      }

      console.log("✅ Token verified successfully!");
      console.log("Payload:", payload);

      // Store logged-in user ID for later use
      request.loggedInStudentID = payload.studentId; // or adminId, depending on what you encoded

      next(); // ✅ continue to the next middleware or route
    });
  } catch (error) {
    console.error(error);
    response.status(500).send({ message: "Something went wrong during token verification" });
  }
}
