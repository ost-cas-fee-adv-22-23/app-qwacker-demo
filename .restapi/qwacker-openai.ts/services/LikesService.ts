/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LikesService {

    /**
     * Create a like on a specific post.
     * @param id The ID (ulid) of the post to like.
     * @returns void
     * @throws ApiError
     */
    public static likesControllerLike(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/posts/{id}/likes',
            path: {
                'id': id,
            },
            errors: {
                401: `User is unauthorized.`,
                403: `No authenticated user is found.`,
            },
        });
    }

    /**
     * Delete a like on a specific post.
     * @param id The ID (ulid) of the post to unlike.
     * @returns void
     * @throws ApiError
     */
    public static likesControllerUnlike(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}/likes',
            path: {
                'id': id,
            },
            errors: {
                401: `User is unauthorized.`,
                403: `No authenticated user is found.`,
            },
        });
    }

}
