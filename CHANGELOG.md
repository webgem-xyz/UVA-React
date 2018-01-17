# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

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
