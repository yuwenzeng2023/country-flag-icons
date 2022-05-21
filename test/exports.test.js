import {
	hasFlag,
	countries
} from '../index.js'

const Library = require('../index.commonjs.js')

describe('exports/core', () => {
	it('should export ES6', () => {
		hasFlag.should.be.a('function')
		countries.includes('RU').should.equal(true)
	})

	it('should export CommonJS', () => {
		Library.hasFlag.should.be.a('function')
		Library.countries.includes('RU').should.equal(true)
	})
})