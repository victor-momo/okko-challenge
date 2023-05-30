import { ZoomAdapter } from "./ZoomAdapter";
import axios from "axios";

jest.mock("axios");

const mockMeeting = [
  {
    uuid: "",
    id: 1,
    host_id: "",
    topic: "",
    type: 1,
    start_time: "",
    duration: 1,
    timezone: "",
    agenda: "",
    created_at: "",
    join_url: ""
  }
];

describe("Zoom External Boundary Adapter", () => {
  it("should successfully instantiate a new Zoom Adapter", () => {
    const adapter = new ZoomAdapter();
    expect(adapter).toBeInstanceOf(ZoomAdapter);
  });

  it("should successfully send a POST request to get a Zoom access token, and store it when successful", async () => {
    (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
      data: {
        access_token: "mock_access_token"
      }
    });

    const adapter = new ZoomAdapter();
    await adapter.getAccessToken();
    expect(adapter.hasApiAccess).toBe(true);
    expect(adapter.accessToken).toStrictEqual("mock_access_token");
  });

  it(
    "When sending a GET request to get all existing zoom meetings, should send first a POST request" +
      " to get a Zoom API access token if it hasn't done so yet",
    async () => {
      (axios as jest.Mocked<typeof axios>).post.mockResolvedValue({
        data: {
          access_token: "mock_access_token"
        }
      });
      (axios as jest.Mocked<typeof axios>).get.mockResolvedValue({
        data: {
          random: "random-data"
        }
      });

      const adapter = new ZoomAdapter();
      await adapter.getAllMeetings();
      expect(adapter.hasApiAccess).toBe(true);
      expect(adapter.accessToken).toStrictEqual("mock_access_token");
    }
  );

  it("Should run a successful GET request, and return a list of Meetings", async () => {
    (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
      data: {
        access_token: "mock_access_token"
      }
    });
    (axios as jest.Mocked<typeof axios>).get.mockResolvedValue({
      data: {
        meetings: [mockMeeting]
      }
    });

    const adapter = new ZoomAdapter();
    const meetings = await adapter.getAllMeetings();
    expect(meetings.length).toStrictEqual(1);
    expect(meetings[0]).toStrictEqual(mockMeeting);
  });

  it(
    "Should throw an error when failing a GET request," +
      "and if failing the GET request with an unauthorized HTTP response code (401)," +
      "should reset the api access token flow",
    async () => {
      (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
        data: {
          access_token: "mock_access_token"
        }
      });
      (axios as jest.Mocked<typeof axios>).get.mockRejectedValueOnce({
        response: {
          status: 401
        }
      });

      const adapter = new ZoomAdapter();
      try {
        await adapter.getAllMeetings();
      } catch (e) {
        expect((e as any).response.status).toStrictEqual(401);
        expect(adapter.hasApiAccess).toBeFalsy();
      }
    }
  );

  it("Should run a successful POST request, and return a newly created Meeting", async () => {
    (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
      data: {
        access_token: "mock_access_token"
      }
    });
    (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
      data: mockMeeting
    });

    const adapter = new ZoomAdapter();
    const newMeeting = await adapter.createMeeting({
      startDate: new Date().toUTCString(),
      endDate: new Date().toUTCString(),
      object: ""
    });
    expect(newMeeting).toStrictEqual(mockMeeting);
  });

  it(
    "Should throw an error when failing a POST request," +
      "and if failing the POST request with an unauthorized HTTP response code (401)," +
      "should reset the api access token flow",
    async () => {
      (axios as jest.Mocked<typeof axios>).post.mockResolvedValueOnce({
        data: {
          access_token: "mock_access_token"
        }
      });
      (axios as jest.Mocked<typeof axios>).post.mockRejectedValueOnce({
        response: {
          status: 401
        }
      });

      const adapter = new ZoomAdapter();
      try {
        await adapter.createMeeting({
          startDate: new Date().toUTCString(),
          endDate: new Date().toUTCString(),
          object: ""
        });
      } catch (e) {
        expect((e as any).response.status).toStrictEqual(401);
        expect(adapter.hasApiAccess).toBeFalsy();
      }
    }
  );
});
