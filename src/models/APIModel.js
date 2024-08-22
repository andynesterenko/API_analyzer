import mongoose from "mongoose";

const APISchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    enum: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    default: "GET",
  },
  requests: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      responseTime: {
        type: Number,
        required: true,
      },
      statusCode: {
        type: Number,
        required: true,
      },
      endPoint: {
        type: String,
        default: "/",
      },
      error: {
        type: Boolean,
        default: false,
      },
    },
  ],
  totalRequests: {
    type: Number,
    default: 0,
  },
  lastResponseTime: {
    type: Number,
    default: 0,
  },
  averageResponseTime: {
    type: Number,
    default: 0,
  },
  errorRate: {
    type: Number,
    default: 0,
  },
  availabilityRate: {
    type: Number,
    default: 0,
  },
});

export const APIModel = mongoose.model("API", APISchema);
