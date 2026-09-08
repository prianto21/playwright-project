import { APIRequestContext } from "@playwright/test";

export class UserApi {

    constructor(private request: APIRequestContext) {
    }

    async getUser(userId: number) {

        return await this.request.get(
            `https://reqres.in/api/users/${userId}`
        );

    }
}