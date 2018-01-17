# UVA app
![Build](https://travis-ci.org/webgem-xyz/UVA-React.svg?branch=master)
[![GitHub version](https://badge.fury.io/gh/webgem-xyz%2FUVA-React.svg)](https://badge.fury.io/gh/webgem-xyz%2FUVA-React)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1d0d80ff5c2acd17b3d1/test_coverage)](https://codeclimate.com/github/webgem-xyz/UVA-React/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/1d0d80ff5c2acd17b3d1/maintainability)](https://codeclimate.com/github/webgem-xyz/UVA-React/maintainability)

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
* [AddButton Component](#addbutton-component)
* [AddMedia Component](#addmedia-component)
* [FilterButton Component](#filterbutton-component)
* [Header Component](#header-component)
* [Home Component](#home-component)
* [InputGroup Component](#inputgroup-component)
* [Item Component](#item-component)
* [Login Component](#login-component)
* [Measurement Component](#measurement-component)
* [Media Component](#media-component)
* [Overview Component](#overview-component)
* [Reset Component](#reset-component)

## Account Component
### Usage
The Account component consists of the following
* Header
  * Back arrow
  * Account
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
Uid | string | The identifier of the user, used to get the user info etc.
Logout | function | The function to run when the user presses the Sign out button.

## Add Component
### Usage
The Add component consists of the following
* Header
  * Back arrow
  * Add Measurement
* Form
  * Longitude
    * Label
    * Input (type number)
  * Latitude
    * Label
    * Input (type number)
  * Date of measurement
    * Label
    * Input (type date)
* Button +
  * Adds a new form field
    * Select (select the measurement type)
    * Input of the measurement
  * Remove Item button
    * Removes the new form field
* Button Submit Measurement
  * Adds measurement to database
  * Sends user to [Overview Component](#overview-component)

### Location
The Add Component is located at
```
  src/routes/add/
```
### Attributes
The Add Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
addMeasurement | function | The function that handles adding the measurement to the database.

## AddButton Component
### Usage
The AddButton component consists of the following
* Link (button)
  * Icon
  * Text of button

### Location
The AddButton Component is located at
```
  src/components/addButton/
```
### Attributes
The AddButton Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
To | string | Where should the button point to.
Icon | image (string) | What should the icon be of the button.
Alt | string | The alt text of the icon.
Text | string | What should the text of the button be.


## AddMedia Component
### Usage
The AddMedia component consists of the following
* Header
  * Back arrow
  * Add Media
* Form
  * Longitude
    * Label
    * Input (type number)
  * Latitude
    * Label
    * Input (type number)
  * Date
    * Label
    * Input (type date)
  * Category
    * Label
    * Input (type select)
  * Description
    * Label (Description (optional))
    * Input (type text)
* Button +
  * Add media (camera roll or camera)
* Currently uploaded media
  * Picture
    * X button to remove media
* Button Submit Media
  * Submits the media to the database
  * Sends the user back to [Overview Component](#overview-component)

### Location
The AddMedia Component is located at
```
  src/routes/addMedia/
```
### Attributes
The Add Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
AddMeasurement | function | The function that handles adding the media and data to the measurement.
Uid | string | The user identifier used to decide where the image should be uploaded to.

## FilterButton Component
### Usage
The FilterButton Component consists of the following
* Button
  * All
  * Measurements
  * Media
* Filter Function

### Location
The FilterButton Component is located at
```
  src/components/filterButton/
```
### Attributes
The FilterButton Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Filter | string | What should the filter be.
Text | string | What text should the button display.
HandleFilter | function | function that handles the filtering.

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
To | string | Used to determen where the backarrow should send the user to. Don't define if page doesn't need a back arrow.
Title | string | The text that should be displayed on the top of the page.
Accic | boolean | Should there be a account circle to [Account Component](#account-component).
BackColor | string | The color code that the header should have.

## Home Component
### Usage
The Home component consists of the following
* syncstate of measurements
* addMeasurement function
* Router

### Location
The Home Component is located at
```
  src/components/home/
```
### Attributes
The Home Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
uid | string | User identifier, used to get the measurements of the specific user.

## InputGroup Component
### Usage
The InputGroup Component consists of the following
* Label
* Input field

### Location
The InputGroup Component is located at
```
  src/components/inputGroup/
```
### Attributes
The InputGroup Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Kind | string | What is the identifier of the input field.
Label | string | What should the label of the input field be.
Value | string | What should the default value of the input field be.
handleState | function | The function that handles user input in the inputfield.
FullWidth | bool | Should the input field be 50% of the width or 100%.
Placeholder | string | What should the placeholder of the input field be.

## Item Component
### Usage
The Item Component consists of the following
* Type (icon)
* Date
* Uploaded (V)
* When clicked on the Item Component it will send them to [Measurement Component](#measurement-component).

### Location
The Item Component is located at
```
  src/components/item/
```
### Attributes
The Item Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Key | string | Unique identiier for item.
Index | string | The key used for the item data.
Details | object | The data of the item (type, date, uploaded).

## Login Component
### Usage
The Login component consists of the following
* Logo of MyMarine
* Login form
  * Username
    * Label
    * Input (type email)
  * Password
    * Label
    * Input (type password)
* Log in button
  * If the login is succesfull it will send the user to [Overview Component](#overview-component)
* I forgot my password ( link to [Reset Component](#reset-component) )

### Location
The Login Component is located at
```
  src/routes/login/
```
### Attributes
The Account Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Signin | function | The function that handles the login.

## Measurement Component
The Measurement component consists of the following
* Information from the Measurements
* A Delete button
* Map focused at the coordinates from the measurements.

## Media Component
### Usage
The Media Component consists of the following
* Header
  * Back arrow
  * View Media
* List of data (label - value)
  * Longitude
  * Latitude
  * Date
  * Category
  * Description
* Media
  * The uploaded media (preview)

### Location
The Media Component is located at
```
  src/routes/media/
```
### Attributes
The Media Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Uid | string | Used to get the media of the user.
mediaId | string | Used to get the media that was selected.


## Overview Component
### Usage
The Overview Component consists of the following
* Header
  * Dashboard
  * Button to [Account Component](#account-component)
* Add data
  * [AddButton Component](#addbutton-component) Add Measurement to [Add Component](#add-component)
  * [AddButton Component](#addbutton-component) Add Media to [AddMedia Component](#addmedia-component)
* Overview
  * Filter
    * [FilterButton Component](#filterbutton-component)
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
Measurements | object | The measurements of the logged in user.

## Reset Component
### Usage
The Reset Component consists of the following
* Header
  * Back arrow
  * Reset password
* Email
  * Label
  * Input (type email)
* Button
  * Reset password

### Location
The Reset Component is located at
```
  src/routes/reset/
```
### Attributes
The Reset Component accepts the following attributes

Attribute | Type | Usage
--- | --- | ---
Reset | function | The function that handles the reset of the password.