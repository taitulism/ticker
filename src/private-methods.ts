import { Timestamp } from './types';
import { setTimeListener } from './set-time-listener';
import type Ticker from './Ticker';

export function resume (ticker: Ticker, now: Timestamp): void {
	setNextTick(ticker, now + ticker.remainder);

	ticker.remainder = 0;
}

export function setNextTick (ticker: Ticker, nextTarget: Timestamp): void {
	ticker.nextTick = nextTarget;

	ticker.abortFn = setTimeListener(nextTarget, () => {
		if (ticker.isTicking) {
			runTick(ticker, nextTarget);
		}
	});
}

export function runTick (ticker: Ticker, currentTarget: Timestamp): void {
	const {interval} = ticker;
	let nextTarget: Timestamp = currentTarget + interval;

	const now = Date.now();
	const delay = now - currentTarget;

	if (delay > interval) {
		while (now > nextTarget) {
			nextTarget += interval;
		}
	}

	setNextTick(ticker, nextTarget);

	ticker.tickHandler?.();
}

export function abort (ticker: Ticker): void {
	if (ticker.abortFn) {
		ticker.abortFn();
		ticker.abortFn = undefined;
	}
}
