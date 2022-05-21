const flags = require('../string/3x2/index.js')

const US = require('../string/3x2/US.js')
const RU = require('../string/3x2/RU.js')

describe('exports/string/3x2', () => {
	it('should export all flags as named exports', () => {
		expect(flags.US).to.be.string
		expect(flags.RU).to.be.string
	})

	it('should export individual flags as default export', () => {
		expect(US.default).to.be.string
		expect(RU.default).to.be.string
	})
})