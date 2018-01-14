# UVA app
The UVA is made as a colleberation between students of Mediacollege Amsterdam and the University of Amsterdam. The goal of the project was to create a App to collect marine data.

## Target devices
Our target devices are all recent mobile devices. The devices will not always have a internet connection so the app is required to work offline. Data must be visible offline and when you are offline you should be able to submit data.

## Getting Started
To get started clone the respority.
Open the folder in the terminal and run
```
  npm install
```

To start the development server run
```
  npm run dev
```
Open your browser and go to http://localhost:8080

To create a production build run
```
  npm run serve -- --server config
```

## License information
Copyright (c) 2018 Webgem ALL RIGHTS RESERVED

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Table of Contents
* [Account Component](#account-component)
* [Add Component](#add-component)
* [AddMedia Component](#addmedia-component)
* [Header Component](#header-component)
* [Item Component](#item-component)
* [Login Component](#login-component)
* [Measurement Component](#measurement-component)
* [Media Component](#media-component)
* [Overview Component](#overview-component)

## Account Component
### Usage
The Account component consists of the following
* Graph of the ammount of contributions
  * Ammount of contributions is based on a montly basis.
* Account info
  * Username
  * Logged in since
* Sign out button
  * Send user back to [Login Component](#login-component).

### Location
The Account Component is located at
```
  src/routes/account/
```
### Attributes
The Account Component accepts the following attributes
Attribute | Type | Usage
--- | --- | ---
uid | string | The identifier of the user, used to get the user info etc.
logout | function | The function to run when the user presses the Sign out button.

## Add Component

## AddMedia Component

## Header Component
### Usage
The Header component consists of the following
* Back arrow
* Page title
* Account circle button to [Account Component](#account-component)

### Location
The Header Component is located at
```
  src/components/header/
```
### Attributes
The Header Component accepts the following attributes
Attribute | Type | Usage
--- | --- | ---
to | string | Used to determen where the backarrow should send the user to. Don't define if page doesn't need a back arrow.
title | string | The text that should be displayed on the top of the page.
accic | boolean | Should there be a account circle to [Account Component](#account-component).
backColor | string | The color code that the header should have.
## Item Component

## Login Component

## Measurement Component

## Media Component

## Overview Component
### Usage
The Overview Component consists of the following
* Header
  * Dashboard
  * Button to [Account Component](#account-component)
* Add data
  * Button Add Measurement to [Add Component](#add-component)
  * Button Add Media to [AddMedia Component](#addmedia-component)
* Overview
  * Filter
    * All
    * Measurements
    * Media
  * List of measurements
    * Type (icon)
    * Date
    * Uploaded (V)


### Location
The Overview Component is located at
```
  src/routes/overview/
```
### Attributes
The Overview Component accepts the following attributes
Attribute | Type | Usage
--- | --- | ---
uid | string | Used to get the measurements of the logged in user.
