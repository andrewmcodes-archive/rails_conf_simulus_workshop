// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.

// Boilerplate - creating and starting stimulus application
// looking in controllers folder, looking for `_controller`
// for autoloading controllers

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("controllers", true, /_controller\.js$/)
application.load(definitionsFromContext(context))
