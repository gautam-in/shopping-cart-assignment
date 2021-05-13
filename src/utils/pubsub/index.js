/**
 * Pub Sub Model: For examples and features: https://www.npmjs.com/package/pubsub-js
 *
 * @module modules/pubsub
 */
'use strict';

import pubsub from 'pubsub-js';

/**
 * initialTypes contains the pre-defined topics to be used for PubSub
 */
import topics from '../../constant/topic.js';

// The below implementation is to ensure Type safety. Since Pub sub models use Strings directly, Typos are blunders waiting to happen.

/**
 * checks if the Topic exists in topics object. If not throws error
 *
 * @param {topics} topic - The topic. Must be a value saved inside {@link topics}.
 * @param {string} error - Error to be thrown if Topic not found
 */
const validateTopic = (topic, error) => {
    const isTopic = Object.keys(topics).some((name) => topics[name] === topic);
    if (!isTopic) throw new SyntaxError(error);
};

/**
 * Original subscribe functionality saved to a local variable
 */
const originalSubscribe = pubsub.subscribe;

/**
 * Original subscribe function replaced with this one
 * Checks is topic exists in topics object. If yes then adds a new subscription to the topic
 *
 * @param {topics} topic - The topic. Must be a value saved inside {@link topics}.
 * @param {function} handler - This function is called when data is published to the type.
 * @returns {subscriber} - Returns a subscriber instance
 */
pubsub.subscribe = (topic, handler) => {
    validateTopic(topic, 'Not a valid subscribe Topic.');

    return originalSubscribe(topic, handler);
};

/**
 * Original publish functionality saved to a local variable
 */
const originalPublish = pubsub.publish;

/**
 * Original publish function replaced with this one
 * Checks is topic exists in topics object. If yes then publishes data to the topic
 *
 * @param {topics} topic - The topic. Must be a value saved inside {@link topics}.
 * @param {object} data - The data can be received from any independent component.
 */
pubsub.publish = (topic, data) => {
    validateTopic(topic, 'Not a valid publish Topic.');

    originalPublish(topic, data);
};

export default pubsub;
