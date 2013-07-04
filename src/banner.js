/*!
 * jQuery Steps Plugin v0.9.7 - A powerful jQuery wizard plugin that supports accessibility and HTML5
 * https://github.com/rstaib/jquery-steps
 *
 * Copyright (c) 2013 Rafael J. Staib
 * Released under the MIT license
 *
 * Follow me on twitter: https://twitter.com/@RafaelStaib
 *
 * Requires jQuery version 1.4.4 or higher
 * Please report issues at: https://github.com/rstaib/jquery-steps/issues
 */

/* 
 * TODOs:
 * - Add tests and styles for loading animation (Spinner)
 * - Add tests for add, insert and remove
 * - Add tests in general
 * - Shrink the comprehensive code
 *
 * Planed Features:
 * - Progress bar
 * - Implement preloadContent for async and iframe content types.
 * - Implement functionality to skip a certain amount of steps 
 * - Dynamic settings change (setOptions({ enablePagination: false }))
 * - Dynamic step update (setStepContent(0, { title: "", content: "" }))
 * - Jump from any page to a specific step (via uri hash tag test.html#steps-uid-1-3)
 * - Add Swipe gesture for devices that support touch
 * - Allow clicking on the next step even if it is disabled (so that people can decide whether they use prev button or the step button next to the current step)
 * - Property to set the step orientation (horizontal/vertical) [stepOrientation: "horizontal" v 0]
 *
 */

/**
 * @module jQuery.steps
 * @requires jQuery (always required), jQuery.cookie (only required if saveState is `true`)
 */
;(function ($, undefined)
{
    "use strict";
