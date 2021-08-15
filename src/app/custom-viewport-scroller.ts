import { ViewportScroller } from '@angular/common';
import { ErrorHandler } from '@angular/core';

/**
 * Manages the scroll position for a browser window.
 */

export class CustomViewportScroller implements ViewportScroller {
    private offset: () => [number, number] = () => [0, 0];

    constructor(private scrollElementID: string, private document: Document, private window: any, private errorHandler: ErrorHandler) { }

    /**
     * Configures the top offset used when scrolling to an anchor.
     * @param offset A position in screen coordinates (a tuple with x and y values)
     * or a function that returns the top offset position.
     *
     */
    setOffset(offset: [number, number] | (() => [number, number])): void {
        if (Array.isArray(offset)) {
            this.offset = () => offset;
        } else {
            this.offset = offset;
        }
    }

    /**
     * Retrieves the current scroll position.
     * @returns The position in screen coordinates.
     */
    getScrollPosition(): [number, number] {
        const scrollEl = this.document.querySelector(`#${this.scrollElementID}`);
        if (this.supportScrollRestoration() && scrollEl) {
            return [scrollEl.scrollLeft, scrollEl.scrollTop];
        } else {
            return [0, 0];
        }
    }

    /**
     * Sets the scroll position.
     * @param position The new position in screen coordinates.
     */
    scrollToPosition(position: [number, number]): void {
        const scrollEl = this.document.querySelector(`#${this.scrollElementID}`);
        if (this.supportScrollRestoration() && scrollEl) {
            // Total hack but waiting for for content/images to load to give us a 
            // better chance of hitting our scroll target. It also gives the UI a bit
            // of movement to show users that we scrolled them after page load. In a
            // real implementation of ViewportScroller, we should get rid of this but
            // it suits my current needs.
            setTimeout(() => {
                scrollEl.scrollTo(position[0], position[1]);
            }, 100);
        }
    }

    /**
     * Scrolls to an anchor element.
     * @param anchor The ID of the anchor element.
     */
    scrollToAnchor(anchor: string): void {
        if (this.supportScrollRestoration()) {
            // Escape anything passed to `querySelector` as it can throw errors and stop the application
            // from working if invalid values are passed.
            if (this.window.CSS && this.window.CSS.escape) {
                anchor = this.window.CSS.escape(anchor);
            } else {
                anchor = anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            }
            try {
                const elSelectedById = this.document.querySelector(`#${anchor}`);
                if (elSelectedById) {
                    this.scrollToElement(elSelectedById);
                    return;
                }
                const elSelectedByName = this.document.querySelector(`[name='${anchor}']`);
                if (elSelectedByName) {
                    this.scrollToElement(elSelectedByName);
                    return;
                }
            } catch (e) {
                this.errorHandler.handleError(e);
            }
        }
    }

    /**
     * Disables automatic scroll restoration provided by the browser.
     */
    setHistoryScrollRestoration(scrollRestoration: 'auto' | 'manual'): void {
        if (this.supportScrollRestoration()) {
            const history = this.window.history;
            if (history && history.scrollRestoration) {
                history.scrollRestoration = scrollRestoration;
            }
        }
    }

    private scrollToElement(el: any): void {
        const rect = el.getBoundingClientRect();
        const left = rect.left + this.window.pageXOffset;
        const top = rect.top + this.window.pageYOffset;
        const offset = this.offset();
        this.window.scrollTo(left - offset[0], top - offset[1]);
    }

    /**
     * We only support scroll restoration when we can get a hold of window.
     * This means that we do not support this behavior when running in a web worker.
     *
     * Lifting this restriction right now would require more changes in the dom adapter.
     * Since webworkers aren't widely used, we will lift it once RouterScroller is
     * battle-tested.
     */
    private supportScrollRestoration(): boolean {
        try {
            return !!this.window && !!this.window.scrollTo;
        } catch {
            return false;
        }
    }
}
