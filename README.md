# MockSECO
A mock for SearchSECO, which is used to integrate SearchSECO into FAIRSECO, while the real SearchSECO is unavailable.

## How to Run
`docker run --rm --name searchseco-container -e "github_token=<token>" -e "worker_name=<name>" jarnohendriksen/mockseco:v1 check <url>`

MockSECO doesn't actually require any options, but because we wanted to implement the feature as close to the real thing as posible, we already added them in advance. 
