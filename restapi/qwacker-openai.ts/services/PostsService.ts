/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { deleted } from '../models/deleted';
import type { post } from '../models/post';
import type { reply } from '../models/reply';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * Fetch a paginated list of posts, ordered by the time of their creation. May contain deleted posts.
     * @param offset The offset for pagination of further calls. Defaults to 0 if omitted.
     * @param limit The amount of posts that is returned in one call. Minimum is 1, maximum is 1000. Defaults to 100.
     * @param newerThan The ID of a post, to only return posts that are newer than the given post. If omitted, all posts are returned.
     * @returns any The paginated list of posts.
     * @throws ApiError
     */
    public static postsControllerList(
        offset?: number,
        limit?: number,
        newerThan?: string,
    ): CancelablePromise<{
        data?: Array<({
            /**
             * ID of the post, defined in the ULID format.
             */
            id?: string;
            /**
             * ID of the user who created the post.
             */
            creator?: string;
            /**
             * Text in the post.
             */
            text?: string;
            /**
             * URL - if any - to the media object attached to this post.
             */
            mediaUrl?: string | null;
            /**
             * If mediaUrl is set, this field contains the mime type of the media object.
             */
            mediaType?: string | null;
            /**
             * Number of total likes on this post.
             */
            likeCount?: number;
            /**
             * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
             */
            likedByUser?: boolean;
            /**
             * Indicates, that this result is a post.
             */
            type?: post;
            /**
             * Number of total replies to this post.
             */
            replyCount?: number;
        } | {
            /**
             * ID of the post, defined in the ULID format.
             */
            id?: string;
            /**
             * ID of the user who created the post.
             */
            creator?: string;
            /**
             * Text in the post.
             */
            text?: string;
            /**
             * URL - if any - to the media object attached to this post.
             */
            mediaUrl?: string | null;
            /**
             * If mediaUrl is set, this field contains the mime type of the media object.
             */
            mediaType?: string | null;
            /**
             * Number of total likes on this post.
             */
            likeCount?: number;
            /**
             * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
             */
            likedByUser?: boolean;
            /**
             * Indicates, that this result is a reply to a post.
             */
            type?: reply;
            /**
             * Reference ID to the parent post.
             */
            parentId?: string;
        } | {
            /**
             * Indicates, that this result is a deleted post.
             */
            type?: deleted;
            /**
             * ID of the post, defined in the ULID format.
             */
            id?: string;
            /**
             * ID of the user who created the post.
             */
            creator?: string;
            /**
             * ID of the parent.
             */
            parentId?: string | null;
        })>;
        /**
         * The total count of posts in the system.
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
            url: '/posts',
            query: {
                'offset': offset,
                'limit': limit,
                'newerThan': newerThan,
            },
        });
    }

    /**
     * Create a new post with the logged in user. A post can contain an optional image and must contain text.
     * @param formData The data for the post to create.
     * @returns any The post was created.
     * @throws ApiError
     */
    public static postsControllerCreate(
        formData: {
            /**
             * The text of the post.
             */
            text?: string;
            /**
             * The image of the post.
             */
            image?: Blob | null;
        },
    ): CancelablePromise<{
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * Text in the post.
         */
        text?: string;
        /**
         * URL - if any - to the media object attached to this post.
         */
        mediaUrl?: string | null;
        /**
         * If mediaUrl is set, this field contains the mime type of the media object.
         */
        mediaType?: string | null;
        /**
         * Number of total likes on this post.
         */
        likeCount?: number;
        /**
         * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
         */
        likedByUser?: boolean;
        /**
         * Indicates, that this result is a post.
         */
        type?: post;
        /**
         * Number of total replies to this post.
         */
        replyCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The uploaded file is not an image or bigger than 5MB.`,
                401: `User is unauthorized.`,
                403: `No authenticated user is found.`,
            },
        });
    }

    /**
     * Get a specific post.
     * @param id The ID (ulid) of the post to get.
     * @returns any The requested post. This may be a post, a reply, or a deleted post.
     * @throws ApiError
     */
    public static postsControllerSingle(
        id: string,
    ): CancelablePromise<({
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * Text in the post.
         */
        text?: string;
        /**
         * URL - if any - to the media object attached to this post.
         */
        mediaUrl?: string | null;
        /**
         * If mediaUrl is set, this field contains the mime type of the media object.
         */
        mediaType?: string | null;
        /**
         * Number of total likes on this post.
         */
        likeCount?: number;
        /**
         * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
         */
        likedByUser?: boolean;
        /**
         * Indicates, that this result is a post.
         */
        type?: post;
        /**
         * Number of total replies to this post.
         */
        replyCount?: number;
    } | {
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * Text in the post.
         */
        text?: string;
        /**
         * URL - if any - to the media object attached to this post.
         */
        mediaUrl?: string | null;
        /**
         * If mediaUrl is set, this field contains the mime type of the media object.
         */
        mediaType?: string | null;
        /**
         * Number of total likes on this post.
         */
        likeCount?: number;
        /**
         * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
         */
        likedByUser?: boolean;
        /**
         * Indicates, that this result is a reply to a post.
         */
        type?: reply;
        /**
         * Reference ID to the parent post.
         */
        parentId?: string;
    } | {
        /**
         * Indicates, that this result is a deleted post.
         */
        type?: deleted;
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * ID of the parent.
         */
        parentId?: string | null;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Create a reply to a post with the logged in user. A reply can contain an optional image and must contain text.
     * @param id The ID (ulid) of the post to reply to.
     * @param formData The data for the reply to create.
     * @returns any The reply was created.
     * @throws ApiError
     */
    public static postsControllerReply(
        id: string,
        formData: {
            /**
             * The text of the reply.
             */
            text?: string;
            /**
             * The image of the reply.
             */
            image?: Blob | null;
        },
    ): CancelablePromise<{
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * Text in the post.
         */
        text?: string;
        /**
         * URL - if any - to the media object attached to this post.
         */
        mediaUrl?: string | null;
        /**
         * If mediaUrl is set, this field contains the mime type of the media object.
         */
        mediaType?: string | null;
        /**
         * Number of total likes on this post.
         */
        likeCount?: number;
        /**
         * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
         */
        likedByUser?: boolean;
        /**
         * Indicates, that this result is a post.
         */
        type?: post;
        /**
         * Number of total replies to this post.
         */
        replyCount?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `The uploaded file is not an image or bigger than 5MB.`,
                401: `User is unauthorized.`,
                403: `No authenticated user is found.`,
                404: `No post with the given ID was found.`,
            },
        });
    }

    /**
     * Deletes a post or reply if it exists and if the logged in user is the author.
     * @param id The ID (ulid) of the post that shall be deleted.
     * @returns void
     * @throws ApiError
     */
    public static postsControllerDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/posts/{id}',
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
     * Get an ordered list of replies for the given post.
     * @param id The ID (ulid) of the post to get the replies from.
     * @returns any The list of replies for a given post.
     * @throws ApiError
     */
    public static postsControllerReplies(
        id: string,
    ): CancelablePromise<Array<({
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * Text in the post.
         */
        text?: string;
        /**
         * URL - if any - to the media object attached to this post.
         */
        mediaUrl?: string | null;
        /**
         * If mediaUrl is set, this field contains the mime type of the media object.
         */
        mediaType?: string | null;
        /**
         * Number of total likes on this post.
         */
        likeCount?: number;
        /**
         * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
         */
        likedByUser?: boolean;
        /**
         * Indicates, that this result is a reply to a post.
         */
        type?: reply;
        /**
         * Reference ID to the parent post.
         */
        parentId?: string;
    } | {
        /**
         * Indicates, that this result is a deleted post.
         */
        type?: deleted;
        /**
         * ID of the post, defined in the ULID format.
         */
        id?: string;
        /**
         * ID of the user who created the post.
         */
        creator?: string;
        /**
         * ID of the parent.
         */
        parentId?: string | null;
    })>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/{id}/replies',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Search for posts or replies in the database. The result is always paginated and ordered by the time of their creation.
     * @param requestBody The search parameters.
     * @returns any The paginated search result.
     * @throws ApiError
     */
    public static postsControllerSearch(
        requestBody: {
            /**
             * Search for posts that contain this text.
             */
            text?: string | null;
            tags?: Array<string>;
            mentions?: Array<string>;
            /**
             * Search for posts that are replies to other posts. If omitted, all posts are searched.
             */
            isReply?: boolean | null;
            /**
             * The offset for pagination of further calls.
             */
            offset?: number | null;
            /**
             * The amount of posts that is returned in one call. Minimum is 1, maximum is 1000.
             */
            limit?: number | null;
        },
    ): CancelablePromise<{
        data?: Array<({
            /**
             * ID of the post, defined in the ULID format.
             */
            id?: string;
            /**
             * ID of the user who created the post.
             */
            creator?: string;
            /**
             * Text in the post.
             */
            text?: string;
            /**
             * URL - if any - to the media object attached to this post.
             */
            mediaUrl?: string | null;
            /**
             * If mediaUrl is set, this field contains the mime type of the media object.
             */
            mediaType?: string | null;
            /**
             * Number of total likes on this post.
             */
            likeCount?: number;
            /**
             * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
             */
            likedByUser?: boolean;
            /**
             * Indicates, that this result is a post.
             */
            type?: post;
            /**
             * Number of total replies to this post.
             */
            replyCount?: number;
        } | {
            /**
             * ID of the post, defined in the ULID format.
             */
            id?: string;
            /**
             * ID of the user who created the post.
             */
            creator?: string;
            /**
             * Text in the post.
             */
            text?: string;
            /**
             * URL - if any - to the media object attached to this post.
             */
            mediaUrl?: string | null;
            /**
             * If mediaUrl is set, this field contains the mime type of the media object.
             */
            mediaType?: string | null;
            /**
             * Number of total likes on this post.
             */
            likeCount?: number;
            /**
             * Indicates if the current user liked this post. If the call was made unauthorized, all posts are returned with this field set to false.
             */
            likedByUser?: boolean;
            /**
             * Indicates, that this result is a reply to a post.
             */
            type?: reply;
            /**
             * Reference ID to the parent post.
             */
            parentId?: string;
        })>;
        /**
         * The total count of posts in the executed search.
         */
        count?: number;
        /**
         * If filled, hints the search parameters for the next page.
         */
        next?: {
            /**
             * Search for posts that contain this text.
             */
            text?: string | null;
            tags?: Array<string>;
            mentions?: Array<string>;
            /**
             * Search for posts that are replies to other posts. If omitted, all posts are searched.
             */
            isReply?: boolean | null;
            /**
             * The offset for pagination of further calls.
             */
            offset?: number | null;
            /**
             * The amount of posts that is returned in one call. Minimum is 1, maximum is 1000.
             */
            limit?: number | null;
        } | null;
        /**
         * If filled, hints the search parameters for the previous page.
         */
        previous?: {
            /**
             * Search for posts that contain this text.
             */
            text?: string | null;
            tags?: Array<string>;
            mentions?: Array<string>;
            /**
             * Search for posts that are replies to other posts. If omitted, all posts are searched.
             */
            isReply?: boolean | null;
            /**
             * The offset for pagination of further calls.
             */
            offset?: number | null;
            /**
             * The amount of posts that is returned in one call. Minimum is 1, maximum is 1000.
             */
            limit?: number | null;
        } | null;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
