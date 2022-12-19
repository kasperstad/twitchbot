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

import response from "./response"

/**
 * Calculate the streamers age from request parameter and returns that value
 * @param {string} birthday The birtday in the form: yyyy-MM-dd (eg. 1970-01-01)
 * @param {Object} req The Request object from the mainHandler
 * @returns {Response} HTTP Response with Status plain/text and body as the age (integer)
 */
const ageHandler = async req => {

	const { searchParams } = new URL(req.url)

	let day = searchParams.get("day") || null;

	if (day != null) {

		const tzDate = new Date().toLocaleString('en-US', {timeZone: TZ})
		const currentDate = new Date(tzDate)

		day = new Date(day)

		let currentAge = currentDate.getFullYear() - day.getFullYear()
		let month = currentDate.getMonth() - day.getMonth()

		if (month < 0 || (month === 0 && currentDate.getDate() < day.getDate())) {
			currentAge--
		}

		return response(currentAge, 200, 'OK')
	}

	return response()
}

export default ageHandler
