import { APIRequestContext } from "@playwright/test";

 export type LoginRequest = {
        email?  : string;
        password?: string;

    }

export class LoginApi {
    constructor(private request: APIRequestContext) {
    }

     async loginRevamp(data: LoginRequest) {

    return await this.request.post("/api/login", {
      data,
    });
  }
   
    async login(email: string, password: string) {

        return await this.request.post("/api/login", {
            data: {
                email: email,
                password: password,
            },
        });
    }

    async loginWithoutPassword(email: string) {

    return await this.request.post("/api/login", {
        data: {
            email: email,
        },
    });

}
}