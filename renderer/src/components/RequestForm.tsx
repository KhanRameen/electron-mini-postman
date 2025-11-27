import { useState } from "react";
import { type ApiResponseType, type ApiRequestType } from "../types/api";

type methods = "GET" | "POST" | "PUT" | "DELETE" | "PATCH"

async function sendRequest(options: ApiRequestType) {
    return await window.api.request(options)
}

export const RequestForm = () => {
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState<methods>("GET");
    const [headers, setHeaders] = useState("{}");
    const [body, setBody] = useState("{}");
    const [response, setResponse] = useState<ApiResponseType | null>(null);

    function parseJson(input: string) {
        try {
            return JSON.parse(input);
        } catch {
            return null;
        }
    }

    async function handleSend() {
        const res = await sendRequest({
            url,
            method,
            headers: parseJson(headers),
            body: parseJson(body),
        });

        setResponse(res);
    }

    return (
        <div className="p-20">
            <h1>Api Testing Tool</h1>

            <select value={method} onChange={(e) => setMethod(e.target.value as methods)}>
                <option value={"GET"}>GET</option>
                <option value={"POST"}>POST</option>
                <option value={"PUT"}>PUT</option>
                <option value={"PATCH"}>PATCH</option>
                <option value={"DELETE"}>DELETE</option>
            </select>

            <input
                placeholder="https://api.example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full mt-10"
            />

            <textarea
                placeholder="Headers (JSON)"
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                className="w-full border-2 mt-10"
            />

            <textarea
                placeholder="Body (JSON)"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full border-2 mt-10"
            />

            <button onClick={handleSend} className="mt-10">
                Send
            </button>

            {response && (
                <pre className="w-full border-2 mt-10 bg-gray-400" >
                    {JSON.stringify(response, null, 2)}
                </pre>
            )}
        </div>
    );

}