import axios from "axios";
import { buildProxiedUrl } from "../../config/config";
import { mockEventsData } from "./mock-events-data";

export const GetPUSBEvent = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.get(buildProxiedUrl("/event_timeline"));
      return response.data?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(`Attempt ${i + 1} failed:`, error.response);

        // If it's the last retry, use mock data as fallback
        if (i === retries - 1) {
          console.error("❌ API Error after all retries:", error.response);
          console.warn("⚠️ Falling back to MOCK data. API appears to be down or unreachable.");
          return mockEventsData;
        }

        // Only retry on timeout/service unavailable errors
        if (error.response?.status !== 504 && error.response?.status !== 503) {
          console.error("API Error:", error.response);
          console.warn("⚠️ Falling back to MOCK data");
          return mockEventsData;
        }

        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
      } else {
        console.log(error);
        console.warn("⚠️ Falling back to MOCK data");
        return mockEventsData;
      }
    }
  }
  return mockEventsData;
};

export const GetPUSBEventById = async (id) => {
  try {
    const response = await axios.get(buildProxiedUrl(`/event_timeline/${id}`));
    return response.data?.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};

export const GetPUSBEventTimeline = async (eventId) => {
  try {
    const response = await axios.get(
      buildProxiedUrl(`/event_timeline/${eventId}/detail`)
    );
    return response.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
  }
  return null;
};

export const GetPUSBEventTimelineById = async (eventId, timelineId) => {
  try {
    const response = await axios.get(
      buildProxiedUrl(`/event_timeline/${eventId}/detail/${timelineId}`)
    );
    return response.data?.data[0];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log(error);
    }
    throw error;
  }
};
