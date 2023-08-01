"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "openAIResponseStream", {
    enumerable: true,
    get: ()=>openAIResponseStream
});
function _stream() {
    const data = require("stream");
    _stream = function() {
        return data;
    };
    return data;
}
async function* transform(stream) {
    for await (const part of stream){
        const content = part.choices?.[0]?.delta?.content ?? part.choices?.[0]?.text;
        if (content) {
            yield content;
        }
    }
}
function openAIResponseStream(stream) {
    return _stream().Readable.from(transform(stream));
}
