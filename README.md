# Let's go!

A simple site that reads Expedia's JSON API which presents a bunch of Hotel deals.
The documentation for this API can be found [here](https://gist.github.com/Jun-Dai/6101aadf80e47e6c46a3)


## Running Locally (Sandbox)

Checkout the project using the following command:

```
git clone https://github.com/oelwary/e1.git
npm install
heroku local web
```

The app should now be running on [localhost:5000](http://localhost:5000/).

## Running from Heroku

The application is hosted [here](https://warm-plains-82201.herokuapp.com/)


## Documentation

### Assumptions
 - The API can ignore malformed inputs (e.g. lengthOfStay=fourteenDays, legnthOfStay=14)
 - The API appears to be versioned (https://offersvc.expedia.com/offers/v2). Hence,
   any breaking changes in the API (the url inputs, and the structure of the returned
   JSON ) will be made under a new version.
 - The application was tested on the latest version of Google Chrome on Ubuntu 16.04.
   No testing was done on other web browsers/platforms.
 - The application is intended for use on a desktop/tablet and not on a device with a
   smaller screen.
 - No checks were made on the provided paramerter values other than encoding them. Hence,
   There is worked that is needed to ensure that the application does not forward
   malicious query parameters to the REST API (which might cause, for exmaple, a SQL
   injection attack/exploit).

