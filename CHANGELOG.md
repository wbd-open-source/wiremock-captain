<!---
Template for next unreleased block, should not be visible in github ui.
## [unreleased]
### Breaking Changes
### Security
### Removed
### Added
### Deprecated
### Fixed
--->

## [4.1.3] 2025-11-06

### Fixed

- Update dependencies

## [4.1.2] 2025-06-16

### Fixed

- Update dependencies

## [4.1.1] 2025-05-22

### Fixed

- Update dependencies

## [4.1.0] 2025-04-02

### Added

- Support finding mappings by metadata via `findMappingByMetadata` method
- Support removing mappings by metadata via `removeMappingByMetadata` method

## [4.0.0] 2025-03-13

### Breaking Changes

- Replace `AxiosResponse` return type with native `Response` type for all methods

### Fixed

- Update dependencies

## [3.6.1] 2025-03-07

### Fixed

- Update dependencies

## [3.6.0] 2025-02-06

### Added

- Support default features in constructor via optional second parameter
- Add internal `mergeWireMockFeatures` method for feature management

### Fixed

- Update dependencies

## [3.5.0] 2024-09-30

### Fixed

- Update dependencies

## [3.4.0] 2024-09-12

### Fixed

- Update README

## [3.3.2] 2024-09-09

### Fixed

- Update dependencies

## [3.3.1] 2024-04-30

### Fixed

- Update dependencies

## [3.3.0] 2023-04-05

### Fixed

- Update dependencies

## [3.2.1] 2023-04-05

### Fixed

- Update dependencies

## [3.2.0] 2022-12-21

### Fixed

- Update dependencies

## [3.1.1] 2022-06-13

### Fixed

- Update tsconfig

## [3.1.0] 2022-05-10

### Added

- Support response faults

## [3.0.2] 2022-05-05

### Fixed

- Update outdated dependencies

## [3.0.1] 2022-04-01

### Fixed

- Export `Method` type

## [3.0.0] 2022-03-24

### Breaking Changes

- Move around export of TS types

### Added

- Support webhooks and callbacks

## [2.2.2] 2022-02-18

### Fixed

- Update dependencies

## [2.2.1] 2021-12-18

### Fixed

- Update return type for `getAllMappings`

## [2.2.0] 2021-12-16

### Added

- Support default response header

## [2.1.0] 2021-12-14

### Added

- Support `resetMappings`

## [2.0.0] 2021-11-30

### Breaking Changes

- Replace `node-fetch` with `axios`

## [1.6.0] 2021-11-19

### Added

- Add default JSON `Content-Type` header for stubs

## [1.5.2] 2021-09-30

### Fixed

- Dependency updates

## [1.5.1] 2021-08-23

### Fixed

- Update `README`

## [1.5.0] 2021-08-10

### Added

- Support `WireMockAPI` for mocking one-off service APIs

## [1.4.0] 2021-05-11

### Fixed

- Update `Method` to have `PATCH` and `CONNECT` options

## [1.3.1] 2021-04-02

### Fixed

- Remove `examples/` from npm package
- Change `method` references to be of type `Method`

## [1.3.0] 2021-03-18

### Added

- Support `scenario`

## [1.2.0] 2021-03-12

### Added

- Support `getAllRequests`, `getUnmatchedRequests`

### Fixed

- Modify `clearMappings`, `clearRequests`, `requests`

## [1.1.1] 2021-03-08

### Fixed

- `package.json` and `README` improvements

## [1.1.0] 2021-03-05

### Added

- Initial release
