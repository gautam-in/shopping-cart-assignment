# Handlebars express boilerplate

Boilerplate code for developing websites in handlebars with an express API and SCSS for styling.

--------

### Architecture
```
│
├─ public               # Files accessible from the frontend
│  ├─ img               # Images
│  │  └─ ...
│  ├─ js                # Frontend scripts
│  │  └─ ...
│  ├─ index.css         # Compiled CSS file
│  └─ ...               # Favicon files
│
├─ src                  # Assets, data, and content
│  ├─ assets
│  │  └─ scss           # Styles written in SCSS
│  │     └─ ...
│  ├─ json              # Data
│  │  └─ ...
│  └─ views             # Handlebars files
│     ├─ layouts        # Data for posts, projects, etc.
│     │  └─ layout.hbs  # Wrapper HTML for all pages
│     ├─ partials       # HTML partials
│     │  └─ ...         # Other partials
│     └─ ...            # Page components
│
├─ .eslintrc            # Documentation
├─ .gitignore           # Files not included in git repo
├─ index.js             # Configure express server
├─ package.json         # Layout dependencies
├─ routes.js            # App API's and routing
├─ ...                  # Yarn config files
└─ README.md            # Documentation
```
