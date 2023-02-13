/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Fetch a paginated list of users, ordered by their username.
     * @param offset The offset for pagination of further calls. Defaults to 0 if omitted.
     * @param limit The amount of users that is returned in one call. Minimum is 1, maximum is 1000. Defaults to 100.
     * @returns any The paginated list of users.
     * @throws ApiError
     */
    public static usersControllerList(
        offset?: number,
        limit?: number,
    ): CancelablePromise<{
        data?: Array<{
            /**
             * The (long) ID of the user.
             */
            id?: string;
            /**
             * The username of the user. May be used to mention someone in the posts.
             */
            userName?: string;
            /**
             * The first name of the user.
             */
            firstName?: string;
            /**
             * The last name of the user.
             */
            lastName?: string;
            /**
             * URL to the avatar of the user. This field may be empty (empty string).
             */
            avatarUrl?: string;
        }>;
        /**
         * The total count of users in the system.
         */
        count?: number;
        /**
         * If filled, hints the next api call to make to fetch the next page.
         */
        next?: string | null;
        /**
         * If filled, hints the next api call to make to fetch the previous page.
         */
        previous?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }

    /**
     * Fetch your own authenticated profile.
     * @returns any Your own profile.
     * @throws ApiError
     */
    public static usersControllerMe(): CancelablePromise<{
        /**
         * The (long) ID of the user.
         */
        id?: string;
        /**
         * The username of the user. May be used to mention someone in the posts.
         */
        userName?: string;
        /**
         * The first name of the user.
         */
        firstName?: string;
        /**
         * The last name of the user.
         */
        lastName?: string;
        /**
         * URL to the avatar of the user. This field may be empty (empty string).
         */
        avatarUrl?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }

    /**
     * Fetch a user by id.
     * @param id
     * @returns any The user.
     * @throws ApiError
     */
    public static usersControllerGetById(
        id: string,
    ): CancelablePromise<{
        /**
         * The (long) ID of the user.
         */
        id?: string;
        /**
         * The username of the user. May be used to mention someone in the posts.
         */
        userName?: string;
        /**
         * The first name of the user.
         */
        firstName?: string;
        /**
         * The last name of the user.
         */
        lastName?: string;
        /**
         * URL to the avatar of the user. This field may be empty (empty string).
         */
        avatarUrl?: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
        });
    }

}
