// ----- Require Dependencies -----
const express = require('express')
const path = require('path')
const data = require('./data.json')

// ----- App Setup -----
const app = express()

// Set view engine to Pug
app.set('view engine', 'pug')

// Serve static files from public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

// ----- Routes -----

// Index route - renders home page with all projects
app.get('/', (req, res) => {
  res.render('index', { projects: data.projects })
})

// About route - renders about page
app.get('/about', (req, res) => {
  res.render('about')
})

// Dynamic project route - renders project page by id
app.get('/project/:id', (req, res, next) => {
  const projectId = parseInt(req.params.id, 10)
  const project = data.projects.find((p) => p.id === projectId)

  if (project) {
    res.render('project', { project })
  } else {
    const err = new Error('Project not found') // <- create Error object
    err.status = 404
    next(err) // pass it to the global error handler
  }
})

// ----- Error Handling -----

// 404 handler
app.use((req, res, next) => {
  // Ignore static assets
  if (
    req.originalUrl.startsWith('/static/') ||
    req.originalUrl.endsWith('.ico')
  ) {
    return next() // skip logging for these files
  }
  const err = new Error('Sorry, the page you are looking for does not exist')
  err.status = 404
  console.error(`404 Error: ${err.message}`)
  res.status(404).render('page-not-found', { err }) // render page-not-found.pug directly
})

// Global error handler
app.use((err, req, res, next) => {
  err.status = err.status || 500
  err.message = err.message || 'Oops! Something went wrong on the server.'
  console.error(`Error Status: ${err.status}`)
  console.error(`Error Message: ${err.message}`)
  res.status(err.status).render('error', { err }) // render error.pug for all other errors
})

// ----- Start Server -----
const PORT = 3000
app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`)
})
