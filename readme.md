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
handleSubmit | function | The function that handles the adding the measurement to the database.


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
handleImageSubmit | function | The function that handles uploading and handling the media to the database.


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
Uid | string | Used to get the measurements of the logged in user.

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