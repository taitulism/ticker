const {expect} = require('chai');

const {
	Ticker,
	noop,
} = require('./common');

module.exports = function publicAPI () {
	describe('Public API', () => {
		const myTicker = new Ticker(1000, noop);

		describe('Props', () => {
			it('has a .isRunning flag prop', () => {
				expect(myTicker.isRunning).to.be.a('boolean');
			});
			it('has a .timeLeft prop', () => {
				expect(myTicker.timeLeft).to.be.a('number');
			});
			it('has a .tickOnStart prop', () => {
				expect(myTicker.tickOnStart).to.be.a('boolean');
			});
		});

		describe('Configuration Methods', () => {
			it('has a .setInterval(num) method', () => {
				expect(myTicker.setInterval).to.be.a('function');
			});
			it('has a .setCallback(fn) method', () => {
				expect(myTicker.setCallback).to.be.a('function');
			});
			it('has a .set(num, fn) method', () => {
				expect(myTicker.set).to.be.a('function');
			});
		});

		describe('Methods', () => {
			it('has a .getTimeLeft() method', () => {
				expect(myTicker.getTimeLeft).to.be.a('function');
			});
			it('has a .start() method', () => {
				expect(myTicker.start).to.be.a('function');
			});
			it('has a .stop() method', () => {
				expect(myTicker.stop).to.be.a('function');
			});
			it('has a .reset() method', () => {
				expect(myTicker.reset).to.be.a('function');
			});
			it('has a .destroy() method', () => {
				expect(myTicker.destroy).to.be.a('function');
			});
		});
	});
};
