/*
 * MIT License
 *
 * Copyright (c) 2022 Kasper Stad
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const securityHeaders = {
	"Content-Security-Policy" : "default-src 'self'; frame-ancestors 'none'",
	"Cross-Origin-Embedder-Policy" : "require-corp",
	"Cross-Origin-Opener-Policy" : "same-origin",
	"Cross-Origin-Resource-Policy" : "same-site",
	"Permissions-Policy" : "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
	"Referrer-Policy" : "no-referrer",
	"X-Frame-Options" : "SAMEORIGIN"
}

/**
 * Default response to undefined and unmatched routes and requests
 * @returns {Response} HTTP Response with Status plain/text and body as the string defined
 */

const response = (text = '404: Not Found', statusCode = 404, statusText = 'Not Found') => {

	const newHeaders = new Headers()
	const setHeaders = Object.assign({}, securityHeaders);

	newHeaders.set("Content-Type", "text/plain")
	Object.keys(setHeaders).forEach(name => newHeaders.set(name, setHeaders[name]));

	return new Response(text, {
		status: statusCode,
		statusText: statusText,
		headers: newHeaders
	})
}

export default response
