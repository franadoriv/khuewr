export default class BackendApi {
  private static id_token: string = "";

  static get apiUrl(): string {
    return process.env.API_ADDRESS;
  }

  public static async fetchRequest(
    url: string,
    init?: RequestInit
  ): Promise<Response> {
    console.log("BackendApi.fetchRequest.id_token:", this.id_token);
    return await fetch(url, {
      ...init,
      headers: {
        ...init?.headers,
        id_token: this.id_token
      }
    });
  }

  public static async LoginIn(id_token: string): Promise<boolean> {
    try {
      this.id_token = id_token;
      const loginResp = await this.fetchRequest(`${this.apiUrl}/login`);
      return loginResp.status === 200;
    } catch (ex) {
      console.error("LoginIn.error:", ex);
      this.id_token = "";
      return false;
    }
  }
}
