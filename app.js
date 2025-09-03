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
app.get('/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id, 10)
  const project = data.projects.find((p) => p.id === projectId)

  if (project) {
    res.render('project', { project })
  } else {
    // If no project found, render a 404 page
    res.status(404).render('error', { message: 'Project not found' })
  }
})

// ----- Error Handling -----

// 404 handler
app.use((req, res, next) => {
  const err = new Error('Sorry, the page you are looking for does not exist')
  err.status = 404
  console.error(`404 Error: ${err.message}`)
  next(err)
})

// Global Error Handler
app.use((err, req, res, next) => {
  //Ensure err has a status and a message
  err.status = err.status || 500
  err.message = err.message || 'Oops! Something went wrong on the server.'

  // Log out the error details
  console.error(`Error Status: ${err.status}`)
  console.error(`Error Message: ${err.message}`)

  // Render error page with err details
  res.status(err.status)
  res.render('error', { err })
})

// ----- Start Server -----
const PORT = 3000
app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`)
})
