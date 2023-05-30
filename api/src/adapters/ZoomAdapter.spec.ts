import { ZoomAdapter } from "./ZoomAdapter";
import axios from "axios";

jest.mock("axios");

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
});
