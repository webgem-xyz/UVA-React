# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.0.6] - 2018-01-18
### Added
- MeasurementRow Component to README [#44](https://github.com/webgem-xyz/UVA-React/issues/44)

### Fixed
- Spelling mistakes in ISSUE_TEMPLATE.md
- Moved syncState out of Measurement Component in to Home.js [#31](https://github.com/webgem-xyz/UVA-React/issues/31)

### Changed
- readme.md to README.md (The standard).
- Updated Media Component in README to show the proper props it accepts.

## [0.0.5] - 2018-01-18
### Changed
- Made code more DRY
- Updated Media to use MeasurementRow Component
- Changed color values to the global variable
- Fixed font-weight 900 to 700

## [0.0.4] - 2018-01-18
### Added
- Media component. (Still needs the new measurement component)

### Changed
- Item component now uses measurement type to determen if it should send it to /mes/:measurementId or /med/:mediaId
- Router path changed from "/media/:mediaId" to "/med/:mediaId"

## [0.0.3] - 2018-01-18
### Fixed
- Spelling mistake in README (line 7)
- Spelling mistake in InputGroup Component (Proptypes.sring > PropTypes.string - line 44)

## [0.0.3] - 2018-01-17
### Added
- Login Component.
- Account Component.
- Added browser support to README

### Changed
- The InputGroup Component now accepts autocomplete as a prop.

### Fixed
- Missing trailing newline at end of login/style.scss & account/style.scss

## [0.0.2] - 2018-01-17
### Added
- RemoveButton Component.
- ProgressBar Component.
- Updated readme to reflect the new RemoveButton and ProgressBar Component.

### Changed
- Moved remove input and ProgressBar out of Add & AddMedia into there own components.
- Replaced code of date of measurements with InputGroup Component.

### Fixed
- Duplicate code in AddMedia.
- Reduced lines of code in the AddMedia Component.

### Removed
- Removed UID prop from Add component as it doesn't use / need it.
- Removed trailing unused code.

## [0.0.1] - 2018-01-17
### Added
- InputGroup Component now accepts the props fullWidth & placeholder.
- AddMedia now accepts prop uid.
- AddMedia component.
- Home component to README.
- Updated README to reflect changes made.

### Changed
- Placeholder of input field date from "loading coordinates.." to "YYYY-MM-DD".
- Moved SyncState of measurements to components/home/index.js (#31).
- Moved AddMeasurements function to components/home/index.js (#31).
- Changed router to send all paths except account to /home and setup a router in /home to send to the right component.

### Fixed
- Cleaned up code of the Overview Component.
- Fixed issue #29 in src/style/index.scss
- Fixed issue's #26 #24 & #23 in src/components/header/style.scss
