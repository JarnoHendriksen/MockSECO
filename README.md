# MockSECO

![Fairtally](https://img.shields.io/badge/fair--software.eu-%E2%97%8F%20%20%E2%97%8F%20%20%E2%97%8B%20%20%E2%97%8B%20%20%E2%97%8B-orange?style=for-the-badge)

A mock for SearchSECO, to facilitate the integration of SearchSECO into FAIRSECO. This mock was initially created because the real SearchSECO was down when we wanted to implement a parser for SearchSECO's output. This is not quite as relevant anymore, since SearchSECO is currently back online (though not consistently).

However, SearchSECO is unable to analyze private repositories. To make sure FAIRSECO still receives some kind of output, we use this mock if the repo is private.

## How to Run
`docker run --rm --name searchseco-container jarnohendriksen/mockseco:v1`
