"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAIResponseStream = void 0;
const stream_1 = require("stream");
async function* transform(stream) {
    for await (const part of stream) {
        const content = part.choices?.[0]?.delta?.content ?? part.choices?.[0]?.text;
        if (content) {
            yield content;
        }
    }
}
/**
 * Converts the result of calling openai with `stream: true` into a readable stream that
 * Fasitfy can respond with.
 *
 *
 * @param {AsyncIterable<any>} stream - An AsyncIterable containing OpenAI response parts.
 * @returns {Readable} A Readable stream with the transformed content from the input stream.
 *
 *
 * @example
 * // Using the openAIResponseStream function to convert an AsyncIterable into a Readable stream
 * const stream = await connections.openai.chat.completions.create({
 *   model: "gpt-3.5-turbo",
 *   messages: [{ role: "user", content: "Hello!" }],
 *   stream: true,
 * });
 * await reply.send(openAIResponseStream(stream));
 *
 * @see {@link https://github.com/openai/openai-node} - OpenAI Node.js client library.
 * @see {@link https://docs.gadget.dev/guides/http-routes/route-configuration#sending-responses} - Sending responses in Gadget.
 */
function openAIResponseStream(stream) {
    return stream_1.Readable.from(transform(stream));
}
exports.openAIResponseStream = openAIResponseStream;
//# sourceMappingURL=index.js.map