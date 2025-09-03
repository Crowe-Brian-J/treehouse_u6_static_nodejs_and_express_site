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

// ----- Start Server -----
const PORT = 3000
app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`)
})
